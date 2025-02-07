import { Sidebar } from "../components/Sidebar";

export default function Page() {
  return (
    <main className="grid grid-cols-4">
      <Sidebar />
      <section className="col-span-3">Journalling</section>
    </main>
  );
}
