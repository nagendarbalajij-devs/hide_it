require("@nomiclabs/hardhat-waffle");
const { task } = require("hardhat/config");
const fs = require("fs");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

task("deploy", "Deploy to local Ganache", async (taskArgs, hre) => {
	const FundMeContract = await hre.ethers.getContractFactory("HideIt");
	const deployment = await FundMeContract.deploy()
		.then((e) => {
			console.log(`Contract deployed at address ${e.address}`);
			fs.copyFileSync(
				"./artifacts/contracts/HideIt.sol/HideIt.json",
				"./src/abi/abi.json"
			);
		})
		.catch((e) => {
			console.log(e);
		});
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		localTest: {
			chainId: 1337,
			url: "HTTP://127.0.0.1:7545",
			accounts: [
				"7a55d648c67107346efccca63674fb087de839fd9f3dc4ed8c3025873dca8942",
			],
		},
		rinkeby: {
			chainId: 4,
			url: `${process.env.RINKEBY_URL}`,
			accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`],
		},
	},
	solidity: "0.8.7",
};
