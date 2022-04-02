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
	console.log(ContractServices.instance.getSigner());
	const res = await get(
		ContractServices.instance.contract.getMessageFromAddress()
	);
	console.log(res.length);
	if (res.length > 0) {
		const res2 = await get(
			ContractServices.instance.contract.getMessageContentFromId(res[1])
		);
		console.log(res2);
	}
};
