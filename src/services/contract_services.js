import { toContainElement } from "@testing-library/jest-dom/dist/matchers";
import { Contract } from "ethers";
import { abi } from "../utils/abi";

const getContract = (signer) => {
	return new Contract(
		"0xbC327B886baD6685d4ee8A1b1E18C88a5BB84682",
		abi,
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
