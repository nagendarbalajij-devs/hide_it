import { Web3Provider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";
import { resolvePath } from "react-router-dom";
import Web3 from "web3";
import { ContractServices, get, send } from "../services/contract_services";

export const saveMessageHelper = async (message) => {
	const res = await send(
		ContractServices.instance.contract.saveMessage(
			message.content,
			message.message,
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
	var list = [];
	const res = await get(
		ContractServices.instance.contract.getMessageFromAddress()
	);
	if (res.length > 0) {
		for (let i = 0; i < res.length && i <= 10; i++) {
			list.push(
				await ContractServices.instance.contract.getMessageContentFromId(res[i])
			);
		}
		return list;
	}
};

export const getFullMessage = async ({ messageId, fine }) => {
	console.log(messageId);
	const res = await send(
		ContractServices.instance.contract.getMessage(messageId.toString(), {
			value: fine.toString(),
		})
	);
	return res;
};
