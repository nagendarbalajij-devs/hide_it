import { Web3Provider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";
import { resolvePath } from "react-router-dom";
import Web3 from "web3";
import { ContractServices, get, send } from "../services/contract_services";

export const saveMessageHelper = async (message) => {
	const res = await send(
		ContractServices.instance.contract.saveMessage(
			message.message,
			message.content,
			message.fMessage,
			message.fine.toString(),
			message.isPrivate
		)
	);
	console.log(res);
	return;
};

export const getMyMessages = async (address) => {
	const res = await get(
		ContractServices.instance.contract.getMessageFromAddress()
	);
	if (res.length > 0) {
		const res2 = await get(
			ContractServices.instance.contract.getMessageContentFromId(
				"0xc3a94600643518006ffba08b78ef1fc8575a6660d795795ac67daa8803145d6d"
			)
		);
		console.log(res2);
	}
};
