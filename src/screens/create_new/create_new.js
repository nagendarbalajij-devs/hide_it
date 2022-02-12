import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { requestConnectToWallet } from "../../utils/web3_utils";
import { AccentButton } from "../../widgets/button/accent_button";
import { AccentInput } from "../../widgets/inputs";

const CreateNew = (props) => {
	const [providerAvailable, setProviderAvailable] = useState(false);
	const [provider, setProvider] = useState();
	const [connected, setConnected] = useState(false);
	const [address, setAddress] = useState("");
	useEffect(() => {
		try {
			let provider = new ethers.providers.Web3Provider(window.ethereum);
			provider.listAccounts().then((val) => {
				console.log(val);
				console.log(val.length === 0);
				setConnected(val.length !== 0);
				setAddress(val);
			});
			setProviderAvailable(true);
			setProvider(provider);
		} catch (e) {
			setProviderAvailable(false);
		}
	}, []);

	return (
		<div className="flex flex-col px-12 py-6">
			<div className="flex flex-row items-center justify-between">
				<select className="cursor-pointer rounded-md border-red-600 bg-red-50 py-2 px-4 font-semibold outline-red-600 transition">
					<option className=" h-16 bg-red-50 outline-none">
						Select a Network
					</option>
					<option>Rinkeby Testnet</option>
					<option>Ethereum Mainnet</option>
				</select>
				<div
					className="select-none rounded-full border-2 border-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-600 hover:text-white hover:shadow-lg"
					onClick={requestConnectToWallet}
				>
					{providerAvailable
						? !connected
							? `Conntect to wallet`
							: `${address}`
						: `No providers available!!`}
				</div>
			</div>
			<div className="mt-6">
				<AccentInput placeholder="Enter a message" label="Enter a message" />
			</div>
			<div className="mt-6">
				<AccentInput
					placeholder="Enter"
					label="Enter a message you wish to hide"
				/>
			</div>
			<div className="mt-6">
				<AccentInput
					placeholder="Enter a message"
					label="Enter a message for yourself to the future"
				/>
			</div>
			<div className="mt-6 w-2/3">
				<AccentButton
					onClick={async () => {
						console.log(await provider.listAccounts());
					}}
				>
					Sign{" "}
				</AccentButton>
			</div>
		</div>
	);
};

export { CreateNew };
