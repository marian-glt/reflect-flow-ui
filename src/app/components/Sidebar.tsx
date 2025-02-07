import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    // <aside className="flex flex-col p-4 col-span-1 ">
    //   <h1 className="border-b border-blue-500">
    //     <Link href="/" className="flex items-center gap-2 text-1xl font-bold">
    //       <FontAwesomeIcon icon={faHouse} className="w-5" />
    //       Reflect Flow
    //     </Link>
    //   </h1>
    //   <div className="flex flex-col bg-blue">
    //     <Link href="/profile" className="flex items-center gap-2">
    //       <FontAwesomeIcon icon={faChevronRight} className="w-2" />
    //       Profile
    //     </Link>
    //     <Link href="/emotion-log" className="flex items-center gap-2">
    //       <FontAwesomeIcon icon={faChevronRight} className="w-2" />
    //       Emotion Log
    //     </Link>
    //     <Link href="/journalling" className="flex items-center gap-2">
    //       <FontAwesomeIcon icon={faChevronRight} className="w-2" />
    //       Journalling
    //     </Link>
    //     <Link href="/research" className="flex items-center gap-2">
    //       <FontAwesomeIcon icon={faChevronRight} className="w-2" />
    //       Research
    //     </Link>
    //   </div>
    // </aside>
    <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400 bg-gray-900">
      {/* Navigation Header */}
      <Link href="/" className="flex items-center justify-center mt-3">
        <FontAwesomeIcon icon={faHouse} className="w-8 h-8" />
        Reflect Flow
      </Link>
      <div className="flex flex-col items-center mt-3 border-t border-gray-700">
        <Link
          href="/profile"
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          Profile
        </Link>
      </div>
      <div className="flex flex-col items-center mt-2 border-t border-gray-700">
        <Link
          href="/profile"
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
          Profile
        </Link>
      </div>
      <Link
        href="/"
        className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
      >
        <FontAwesomeIcon icon={faHouse} className="w-8 h-8" />
        Reflect Flow
      </Link>
    </div>
  );
}
