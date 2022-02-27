import { ContractServices, send } from "../services/contract_services";

export const saveMessageHelper = async (message) => {
	const res = await send(
		ContractServices.instance.contract.saveMessage(
			message.message,
			message.content,
			message.fMessage,
			message.fine,
			message.isPrivate
		)
	);
	console.log(res);
};
