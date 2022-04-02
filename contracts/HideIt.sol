// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract HideIt {
    mapping(address => bytes32[]) private contentForAddress;
    mapping(bytes32 => Message) private contentForMessageId;
    uint256 private totalCount = 0;
    address contractOwner;

    constructor() {
        contractOwner = msg.sender;
    }

    // Saving a message by generating a random message id
    function saveMessage(
        string memory _content,
        string memory _message,
        string memory _messageForFuture,
        uint256 _fine,
        bool _isPrivate
    ) public {
        totalCount++;
        bytes32 _messageId = createMessageId(_content, totalCount, msg.sender);
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
        emit ReturnSaveMessageId(_messageId);
    }

    // Get a saved message from message Id
    function getMessageContentFromId(bytes32 _messageId)
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

    function getMessage(bytes32 _messageId)
        public
        payable
        checkFine(_messageId)
        checkPrivate(_messageId)
    {
        Message memory m = contentForMessageId[_messageId];
        emit ReturnMessage(m);
    }

    // Get a saved message from senders addresss
    function getMessageFromAddress() public view returns (bytes32[] memory) {
        return contentForAddress[msg.sender];
    }

    function createMessageId(
        string memory _text,
        uint256 _num,
        address _addr
    ) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }

    function withdraw() public payable checkOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function test() public payable returns (bytes32) {
        uint256 i = 12;
        return keccak256(abi.encodePacked("_text", i, msg.sender));
    }

    //EVENTS
    event ReturnSaveMessageId(bytes32);
    event ReturnMessage(Message);

    // MODIFIERS
    modifier checkPrivate(bytes32 messageId) {
        Message memory m = contentForMessageId[messageId];
        if (m.isPrivate) {
            require(msg.sender == m.owner, "This is a private message!");
            _;
        } else {
            _;
        }
    }

    modifier checkFine(bytes32 _messageId) {
        Message memory m = contentForMessageId[_messageId];
        require(msg.value >= m.fine);
        _;
    }

    modifier checkOwner() {
        if (msg.sender == contractOwner) {
            _;
        }
    }
}

//Structs

struct Message {
    string content;
    string message;
    string messageForFuture;
    uint256 fine;
    bool isPrivate;
    bytes32 messageId;
    address owner;
}

struct MessageContent {
    string message;
    uint256 fine;
    bool isPrivate;
    bytes32 messageId;
    address owner;
}
