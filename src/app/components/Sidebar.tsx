"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
	faHamburger,
	faHome,
	faBook,
	faHeart,
	faPerson,
	faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar() {
	const [expandedMenu, setExpandMenu] = useState(true);
	const expandMenu = () => {
		setExpandMenu(!expandedMenu);
	};
	return (
		<div
			className={`flex flex-col items-center overflow-hidden transition-all duration-300
			text-gray-400 dark:text-blue-400  
			bg-gray-900  dark:bg-gray-950
			${expandedMenu ? "w-40 h-full opacity-100" : "w-16 h-full opacity-100"}`}
		>
			{/* Top Link */}
			<Link
				href="#"
				className={`flex items-center justify-center mt-3
			${expandedMenu ? "w-full px-3" : ""}`}
			>
				<FontAwesomeIcon icon={faHome} className={`w-8 h-8`} />
				<span className={`${expandedMenu ? "" : "hidden"}`}>
					Reflect Flow
				</span>
			</Link>
			{/* Groups */}
			<div
				className={`flex flex-col items-center mt-3 border-t border-gray-700
				${expandedMenu ? "w-full" : ""}`}
			>
				<Link
					href="#"
					className={`flex items-center justify-center mt-3 rounded 
						hover:bg-gray-700 hover:text-gray-300
						${expandedMenu ? "w-full h-12 px-3" : " w-12 h-12"}`}
				>
					<FontAwesomeIcon icon={faPerson} className={`w-6 h-6`} />
					<span className={`${expandedMenu ? "" : "hidden"}`}>
						Profile
					</span>
				</Link>
				<Link
					href="#"
					className={`flex items-center justify-center mt-3 rounded 
						hover:bg-gray-700 hover:text-gray-300
						${expandedMenu ? "w-full h-12 px-3" : " w-12 h-12"}`}
				>
					<FontAwesomeIcon icon={faHeart} className={`w-6 h-6`} />
					<span className={`${expandedMenu ? "" : "hidden"}`}>
						Emotion Recording
					</span>
				</Link>
				<Link
					href="#"
					className={`flex items-center justify-center mt-3 rounded 
						hover:bg-gray-700 hover:text-gray-300
						${expandedMenu ? "w-full h-12 px-3" : " w-12 h-12"}`}
				>
					<FontAwesomeIcon icon={faBook} className={`w-6 h-6`} />
					<span className={`${expandedMenu ? "" : "hidden"}`}>
						Journal
					</span>
				</Link>
				<Link
					href="#"
					className={`flex items-center justify-center mt-3 rounded 
						hover:bg-gray-700 hover:text-gray-300
						${expandedMenu ? "w-full h-12 px-3" : " w-12 h-12"}`}
				>
					<FontAwesomeIcon
						icon={faNoteSticky}
						className={`w-6 h-6`}
					/>
					<span className={`${expandedMenu ? "" : "hidden"}`}>
						Quotes
					</span>
				</Link>
			</div>
			{/* Collapsible Button */}
			<button
				className={`flex items-center justify-center 
					${expandedMenu ? "w-full h-16 mt-auto" : "w-16 h-16 mt-auto"} 
					bg-gray-800 hover:bg-gray-700 hover:text-gray-300`}
				onClick={expandMenu}
			>
				<FontAwesomeIcon icon={faHamburger} className="w-8 h-8" />
				<span className={`${expandedMenu ? "" : "hidden"}`}>
					Collapse
				</span>
			</button>
		</div>
	);
}
