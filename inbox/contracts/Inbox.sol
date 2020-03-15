pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    constructor(string initialMessgae) public {
        message = initialMessgae;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string) {
        return message;
    }
}