import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1>Generate QR Code</h1>
        <Link href="/generate">
          <button className="px-2 py-1 text-xl font-semibold text-white transition-colors bg-purple-600 border rounded hover:bg-purple-800">
            Generate
          </button>
        </Link>
      </div>
    </main>
  );
}
