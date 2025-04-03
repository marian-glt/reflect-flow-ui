import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

export default function Home(): React.ReactNode {
	return (
		<div className="grid grid-cols-10 gap-2 w-full h-full">
			<div className="col-span-2">
				<Sidebar />
			</div>
			<div className="col-span-8">
				<MainContent />
			</div>
		</div>
	);
}
