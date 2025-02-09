import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tabs from "./components/Tabs";

export default function Home(): React.ReactNode {
	return (
		<div className="h-full grid grid-flow-row gap-1 grid-rows-12">
			<div className="row-span-1 mb-1">
				<div className="flex flex-col items-left pl-8 w-full h-full bg-slate-800/30 rounded-b-3xl shadow-slate-950/20 shadow-md">
					<div className="flex flex-row w-52 justify-between my-auto">
						<FontAwesomeIcon
							icon={faBook}
							className="w-8 h-8 mt-0"
						/>
						<h1 className="text-3xl font-medium font-geist-sans my-auto text-slate-100/40">
							Reflect Flow
						</h1>
					</div>
				</div>
			</div>
			<div className="row-span-11">
				<div className="grid grid-cols-8 gap-1 h-full">
					<div>
						<Tabs />
					</div>
					<div className="flex flex-col items-center col-span-7 bg-gray-800">
						Content
					</div>
				</div>
			</div>
		</div>
	);
}
