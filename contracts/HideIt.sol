// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract HideIt {
    mapping(address => uint32[]) private contentForAddress;
    mapping(uint32 => Message) private contentForMessageId;
    uint256 private totalCount = 0;

    // Saving a message by generating a random message id
    function saveMessage(
        string memory _content,
        string memory _message,
        string memory _messageForFuture,
        uint256 _fine,
        bool _isPrivate
    ) public returns (uint32) {
        totalCount++;
        uint32 _messageId = createMessageId(_content, totalCount, msg.sender);
        Message memory m = Message({
            content: _content,
            message: _message,
            messageForFuture: _messageForFuture,
            fine: _fine,
            isPrivate: _isPrivate,
            messageId: _messageId,
            owner: msg.sender
        });
        contentForAddress[msg.sender].push(_messageId);
        contentForMessageId[_messageId] = m;
        return _messageId;
    }

    // Get a saved message from message Id
    function getMessageContentFromId(uint32 _messageId)
        public
        view
        returns (MessageContent memory)
    {
        Message memory m = contentForMessageId[_messageId];
        return
            MessageContent({
                message: m.message,
                fine: m.fine,
                isPrivate: m.isPrivate,
                owner: m.owner,
                messageId: m.messageId
            });
    }

    function getMessage(uint32 _messageId)
        public
        payable
        checkFine(_messageId)
        checkPrivate(_messageId)
        returns (Message memory)
    {
        Message memory m = contentForMessageId[_messageId];
        return m;
    }

    // Get a saved message from senders addresss
    function getMessageFromAddress() public view returns (uint32[] memory) {
        return contentForAddress[msg.sender];
    }

    modifier checkPrivate(uint32 messageId) {
        Message memory m = contentForMessageId[messageId];
        if (m.isPrivate) {
            require(msg.sender == m.owner, "This is a private message!");
            _;
        } else {
            _;
        }
    }

    modifier checkFine(uint32 _messageId) {
        Message memory m = contentForMessageId[_messageId];
        require(msg.value >= m.fine);
        _;
    }

    function createMessageId(
        string memory _text,
        uint256 _num,
        address _addr
    ) internal pure returns (uint32) {
        uint256 b = uint256(keccak256(abi.encodePacked(_text, _num, _addr)));
        return uint32(b);
    }
}

struct Message {
    string content;
    string message;
    string messageForFuture;
    uint256 fine;
    bool isPrivate;
    uint32 messageId;
    address owner;
}

struct MessageContent {
    string message;
    uint256 fine;
    bool isPrivate;
    uint32 messageId;
    address owner;
}
