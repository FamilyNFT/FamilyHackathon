// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAsset.sol";

contract familynft is LSP8IdentifiableDigitalAsset {
    constructor(string memory _name)
        LSP8IdentifiableDigitalAsset("FAMILYNFT", "FNFT", msg.sender)
    {}

    struct order {
        string color;
        string size;
        string style;
        uint256 time;
    }
    struct history {
        string action;
        uint256 timestamp;
    }

    uint256 count;
    mapping(address => uint256) admins;
    order[] orders;
    mapping(uint256 => history[]) histories;

    // constructor() {
    //     admins[msg.sender] = 1;
    // }

    function addOrder(
        string memory color,
        string memory size,
        string memory style
    ) public {
        order memory _order = order(color, size, style, block.timestamp);
        orders.push(_order);
    }

    function removeOrder(uint256 index) public {
        require(admins[msg.sender] >= 1, "not admin");
        delete orders[index];
    }

    function addAdmin(address to) public {
        require(admins[msg.sender] >= 1, "not admin");
        admins[to] = 1;
    }

    function removeAdmin(address to) public {
        require(admins[msg.sender] >= 1, "not admin");
        delete admins[to];
    }

    function addHistory(uint256 _id, string memory _action) public {
        histories[_id].push(history(_action, block.timestamp));
    }

    function mint(address to, string memory data) public {
        bytes32 Count = bytes32(count);
        bytes memory metadata = bytes(data);
        _mint(to, Count, true, metadata);
    }
}
