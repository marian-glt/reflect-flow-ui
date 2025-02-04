import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-4">
      <Sidebar />
      <section className="col-span-3">Home</section>
    </main>
  );
}
