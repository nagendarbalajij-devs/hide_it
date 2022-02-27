const requestConnectToWallet = async (callback) => {
	await window.ethereum.request({
		method: "eth_requestAccounts",
	});
	// callback();
};

export { requestConnectToWallet };
