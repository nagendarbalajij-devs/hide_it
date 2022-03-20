export const hideIdAbi = `
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_messageId",
        "type": "uint32"
      }
    ],
    "name": "getMessage",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "message",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "messageForFuture",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fine",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isPrivate",
            "type": "bool"
          },
          {
            "internalType": "uint32",
            "name": "messageId",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "internalType": "struct Message",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_messageId",
        "type": "uint32"
      }
    ],
    "name": "getMessageContentFromId",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "message",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fine",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isPrivate",
            "type": "bool"
          },
          {
            "internalType": "uint32",
            "name": "messageId",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "internalType": "struct MessageContent",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMessageFromAddress",
    "outputs": [
      {
        "internalType": "uint32[]",
        "name": "",
        "type": "uint32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_content",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_messageForFuture",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_fine",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_isPrivate",
        "type": "bool"
      }
    ],
    "name": "saveMessage",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "test",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
`;

export const abi = `
[
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getStruct",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "message",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "number",
            "type": "uint256"
          }
        ],
        "internalType": "struct Message",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_number",
        "type": "uint256"
      }
    ],
    "name": "saveMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_number",
        "type": "uint256"
      }
    ],
    "name": "saveStruct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
`;
