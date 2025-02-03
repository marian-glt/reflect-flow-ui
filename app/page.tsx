import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-red-1">
        <Link href="emotion-log">Emotion Log</Link>
        <Link href="/journalling">Journalling</Link>
        <Link href="/research">Research</Link>
      </aside>
      <main className="flex-1 p-8">{/* Main content goes here */}</main>
    </div>
  );
}
