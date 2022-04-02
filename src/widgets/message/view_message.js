import { ethers } from "ethers";
import { CgLock, CgLockUnlock } from "react-icons/cg";

export const ViewMessage = (props) => {
	const m = props.children;
	return (
		<div
			className="my-4 flex w-full flex-row items-center justify-between rounded-md bg-red-50 py-2 px-2 shadow-sm transition ease-in-out hover:scale-105 hover:transition-all"
			onClick={props.onClick}
		>
			<div className="flex flex-row items-center justify-start">
				<div className="ml-2 mr-2 ">
					{m.isPrivate ? <CgLock> </CgLock> : <CgLockUnlock></CgLockUnlock>}
				</div>
				<div className="flex flex-col items-start justify-start ">
					<div className="px-2 pt-1 text-lg font-semibold text-red-600">
						{m.message}
					</div>
					<div className="px-2 text-xs font-normal text-black">
						{m.messageId}
					</div>
				</div>
			</div>
			<div className="mr-6 select-none rounded-md bg-red-600 py-2 px-4 text-sm font-bold text-white">
				{m.fine <= 0 ? `FREE` : ethers.utils.formatEther(m.fine.toString())}
			</div>
		</div>
	);
};
