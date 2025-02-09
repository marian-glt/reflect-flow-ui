import {
	faBookOpen,
	faHeart,
	faScroll,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tabs(): React.ReactNode {
	return (
		<div className="flex flex-col">
			<button
				type="button"
				className="w-14 h-10 pl-2 hover:w-20 hover:pl-6 rounded-tr-2xl hover:rounded-r-2xl transition-all duration-300 ease-in-out bg-slate-800/20"
			>
				<FontAwesomeIcon icon={faUser} className="w-6 h-6" />
			</button>
			<button
				type="button"
				className="w-14 h-10 pl-2 hover:w-20 hover:pl-6 hover:rounded-r-2xl transition-all duration-300 ease-in-out bg-slate-800/20"
			>
				<FontAwesomeIcon icon={faBookOpen} className="w-6 h-6" />
			</button>
			<button
				type="button"
				className="w-14 h-10 pl-2 hover:w-20 hover:pl-6 hover:rounded-r-2xl transition-all duration-300 ease-in-out bg-slate-800/20"
			>
				<FontAwesomeIcon icon={faScroll} className="w-6 h-6" />
			</button>
			<button
				type="button"
				className="w-14 h-10 pl-2 hover:w-20 hover:pl-6 rounded-br-2xl hover:rounded-r-2xl transition-all duration-300 ease-in-out bg-slate-800/20"
			>
				<FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
			</button>
		</div>
	);
}
