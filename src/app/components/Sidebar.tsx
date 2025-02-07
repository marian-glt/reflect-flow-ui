"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
	faHamburger,
	faHome,
	faBook,
	faHeart,
	faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Sidebar() {
	const [expandedMenu, setExpandMenu] = useState(true);
	return (
		<div
			className={`flex flex-col items-center overflow-hidden
		${expandedMenu ? "w-48" : "w-16"} h-screen 
		text-gray-700 bg-gray-200
		dark:text-gray-400 dark:bg-gray-900`}
		>
			{/* Navigation Header */}
			<Link href="#" className="flex items-center justify-between mt-3">
				<FontAwesomeIcon icon={faHome} className="w-8 h-8" />
				<span>{expandedMenu ? "Reflect Flow" : ""}</span>
			</Link>
			{/* Navigation Links */}
			<div className="flex flex-col items-center mt-3 border-t border-gray-700">
				<Link
					href="#"
					className="flex items-center justify-between w-24 h-10 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
				>
					<FontAwesomeIcon icon={faPerson} className="w-6 h-6" />
					Profile
				</Link>
				<Link
					href="#"
					className="flex items-center justify-between w-24 h-10 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
				>
					<FontAwesomeIcon icon={faBook} className="w-6 h-6" />
					Journal
				</Link>
				<Link
					href="#"
					className="flex items-center justify-center w-32 h-10 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
				>
					<FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
					Emotion Log
				</Link>
			</div>
			{/* Collapse Button */}
			<button
				className="flex items-center justify-center mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
				onClick={() => setExpandMenu(!expandedMenu)}
			>
				<FontAwesomeIcon icon={faHamburger} className="w-8 h-8" />
				Collapse menu
			</button>
		</div>
	);
}
