const { expect } = require("chai");
const { ethers } = require("hardhat");
const { send } = require("../src/services/contract_services");

describe("Greeter", function () {
	it("Should return the new greeting once it's changed", async function () {
		const Greeter = await ethers.getContractFactory("Greeter");
		const greeter = await Greeter.deploy("Hello, world!");
		await greeter.deployed();

		expect(await greeter.greet()).to.equal("Hello, world!");

		const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

		// wait until the transaction is mined
		await setGreetingTx.wait();

		expect(await greeter.greet()).to.equal("Hola, mundo!");
	});
});

describe("Test Function", () => {
	it("Should save a message", async () => {
		const HideIt = await ethers.getContractFactory("HideIt");
		const hideIt = await HideIt.deploy();
		await hideIt.deployed();

		const saveTx = await hideIt.saveMessage(
			"Content",
			"Message For Future",
			"Future",
			0,
			false
		);
		const res = await saveTx.wait();
		expect(await res).to.not.equal(undefined);

		const s = await send(
			hideIt.saveMessage("Content", "Message For Future", "Future", 0, false)
		);
		console.log(s);
		expect(s).to.not.equal(undefined);
	});
});
