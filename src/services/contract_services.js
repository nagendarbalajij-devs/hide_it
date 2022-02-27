import { TabsContext } from "@mui/base";
import { toContainElement } from "@testing-library/jest-dom/dist/matchers";
import { BigNumber, Contract } from "ethers";
import { abi, hideIdAbi } from "../utils/abi";
import { gProvider } from "./network_services";

const getContract = (signer) => {
	return new Contract(
		"0x12d0393b640c784cB1f1C459c97732Be324F6F64",
		hideIdAbi,
		signer
	);
};

export const createRecord = async (signer) => {
	const contract = getContract(signer);
	// const tx = await contract.saveStruct("asdf", 123);
	const tx = await contract.getStruct();
	// const rec = await tx.wait();
	console.log(tx.number);
	return;
};

export const saveMessage = async (signer, message) => {
	const contract = getContract(signer);
	const value = 0.00012 * 10 ** 18;
	const tx = await contract.test({
		value: value.toString(),
	});
	const res = await tx.wait();
	console.log(res);
	console.log(res.events);
	console.log(tx.result);
	return tx;
};

export const getMessageContent = async (_messageId) => {
	const contract = getContract(gProvider.getSigner(0));
	const tx = await contract.getMessageContentFromId(12);
	console.log(tx);
	const res = await tx.wait();
	console.log(res);
};
