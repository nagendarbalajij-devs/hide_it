import { BigNumber, Contract } from "ethers";
import { abi, hideIdAbi } from "../utils/abi";
import { gProvider } from "./network_services";
import { ethers } from "ethers";
import { shouldForwardProp } from "@mui/styled-engine";
const abiJson = require("./../abi/abi.json");

export class ContractServices {
	static instance = ContractServices;
	contract;
	provider = new ethers.providers.Web3Provider(window.ethereum, "any");

	static init() {
		this.instance = new ContractServices();
	}

	getSigner() {
		return this.provider.getSigner(0);
	}

	loadContract(network) {
		switch (network) {
			case "rinkeby":
				this.contract = new Contract(
					"0x47599Cb3F93D7b89Fd316B8A4DD203260CDd439A",
					this.getAbi(),
					this.getSigner()
				);
				break;
			case "unknown":
				this.contract = new Contract(
					"0xA4098F72581EB3A16374DB3A0AEfb7Fc04b6DaB5",
					this.getAbi(),
					this.getSigner()
				);
				break;
			default:
				this.contract = null;
				break;
		}
	}

	getAbi() {
		return abiJson.abi;
	}
}

// const getContract = (signer) => {
// 	return new Contract(
// 		"0x12d0393b640c784cB1f1C459c97732Be324F6F64",
// 		hideIdAbi,
// 		signer
// 	);
// };

// export const createRecord = async (signer) => {
// 	const contract = getContract(signer);
// 	// const tx = await contract.saveStruct("asdf", 123);
// 	const tx = await contract.getStruct();
// 	// const rec = await tx.wait();
// 	console.log(tx.number);
// 	return;
// };

export const send = async (exec) => {
	const tx = await exec;
	const res = tx.wait();
	return res;
};

export const get = async (exec) => {
	const tx = await exec;
	return tx;
};

export function saveMessage(message, contract) {}

// export const getMessageContent = async (_messageId) => {
// 	const contract = getContract(gProvider.getSigner(0));
// 	const tx = await contract.getMessageContentFromId(12);
// 	console.log(tx);
// 	const res = await tx.wait();
// 	console.log(res);
// };
