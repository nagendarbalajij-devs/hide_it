const requestConnectToWallet = () => {
	window.ethereum.request({
		method: "eth_requestAccounts",
	});
};

export { requestConnectToWallet };
