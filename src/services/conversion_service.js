import { get } from "./http_service";

export const convertEthToUsd = (eth, usd) => {
	return eth * usd;
};

export const convertEthToWei = (eth) => {
	return eth * 10 ** 18;
};

export const getUsdValue = async () => {
	const response = await get(
		"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"
	);
	return response.USD;
};
