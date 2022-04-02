import { ThemeProvider } from "@emotion/react";
import { Switch } from "@mui/material";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { getMyMessages } from "../../helper/contract_helper";
import { AccentInput, AccentInputArea } from "../../widgets/inputs";
import { ViewMessage } from "../../widgets/message/view_message";
import { PageTitle } from "../../widgets/texts";

const ViewPage = (props) => {
	const [walletAvailable, setWalletAvailable] = useState(false);
	const [contents, setContents] = useState([]);
	const [search, setSearch] = useState();
	const setWalletLoadCallback = useOutletContext();

	useEffect(() => {
		setWalletLoadCallback(() => {
			getMyMessages();
		});
	});

	return (
		<div className="flex w-full flex-row items-start justify-center pt-10">
			<div className="justify-star mx-4 flex h-full w-full flex-col items-start  md:w-2/3">
				<div className="flex w-full flex-col items-center justify-between lg:flex-row">
					<PageTitle>Messages </PageTitle>
					<div className="mt-2 block w-full justify-center lg:mt-0 lg:w-1/3">
						<AccentInput
							value=""
							className="w-full"
							placeholder="Search with public address"
							onChange={() => {}}
						/>
					</div>
				</div>
				<div className="mt-12 w-full">
					{search !== "" ? (
						<div>
							{contents.length === 0 ? (
								<div> </div>
							) : (
								<ContentList>{contents}</ContentList>
							)}
						</div>
					) : (
						<NoMessages></NoMessages>
					)}
				</div>
			</div>
		</div>
	);
};

const ContentList = (props) => {
	return (
		<div>
			{props.children.map((e) => (
				<ViewMessage>{e}</ViewMessage>
			))}
		</div>
	);
};
const NoMessages = (props) => {
	return <div className="text-center">Enter a address to search</div>;
};

const EmptyList = (props) => {
	return <div className="text-center">You have not hidden anything yet...</div>;
};

export { ViewPage };
