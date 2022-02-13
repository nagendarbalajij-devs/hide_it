require("@nomiclabs/hardhat-waffle");
const { task } = require("hardhat/config");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
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
				"0xccc8a734866ebb8da8a13d2d0331b5c7dc70ea49e22a3931fbaee896fce9e6c9",
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
