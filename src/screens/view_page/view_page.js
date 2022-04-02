import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { getFullMessage, getMyMessages } from "../../helper/contract_helper";
import { showContentPopup } from "../../redux/content_popup/content_popup_slice";
import { dismissPopup, showPopup } from "../../redux/popups/popup_slice";
import { setupMessageListener } from "../../services/contract_listeners";
import { popups } from "../../utils/popup_utils";
import { AccentInput } from "../../widgets/inputs";
import { ViewMessage } from "../../widgets/message/view_message";
import { PageTitle } from "../../widgets/texts";

const ViewPage = (props) => {
	const [contents, setContents] = useState([]);
	const [search] = useState();
	const setWalletLoadCallback = useOutletContext();

	useEffect(() => {
		setWalletLoadCallback(() => {
			console.log("asdf");
			getMyMessages().then((res) => {
				if (res.length > 0) {
					setContents(res);
				}
			});
		});
		try {
			getMyMessages().then((res) => {
				if (res.length > 0) {
					setContents(res);
				}
			});
		} catch (e) {
			console.log(`Error ${e}`);
		}
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
	const dispatch = useDispatch();
	return (
		<div>
			{props.children.map((e) => (
				<ViewMessage
					key={e.messageId}
					onClick={async () => {
						setupMessageListener(dispatch, (e) => {
							dispatch(showContentPopup(e));
						});
						dispatch(showPopup(popups.transactionInProgress));
						try {
							await getFullMessage(e);
						} catch (e) {
							dispatch(dismissPopup());
						}
					}}
				>
					{e}
				</ViewMessage>
			))}
		</div>
	);
};
const NoMessages = (props) => {
	return <div className="text-center">Enter a address to search</div>;
};

export { ViewPage };
