import { ContractServices, get, send } from "../services/contract_services";

export const saveMessageHelper = async (message) => {
	await send(
		ContractServices.instance.contract.saveMessage(
			message.content,
			message.message,
			message.fMessage,
			message.fine.toString(),
			message.isPrivate
		)
	);
	return;
};

export const getMyMessages = async (address) => {
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
	const res = await send(
		ContractServices.instance.contract.getMessage(messageId.toString(), {
			value: fine.toString(),
		})
	);
	return res;
};
