import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <aside className="flex flex-col p-4 col-span-1 ">
      <h1 className="border-b border-blue-500">
        <Link href="/" className="flex items-center gap-2 text-1xl font-bold">
          <FontAwesomeIcon icon={faHouse} className="w-5" />
          Reflect Flow
        </Link>
      </h1>
      <div className="flex flex-col bg-blue">
        <Link href="/profile" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          Profile
        </Link>
        <Link href="/emotion-log" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          Emotion Log
        </Link>
        <Link href="/journalling" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          Journalling
        </Link>
        <Link href="/research" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faChevronRight} className="w-2" />
          Research
        </Link>
      </div>
    </aside>
  );
}
