import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
          Generate QR Code
        </h2>
        <Link href="/generate">
          <Button>Generate</Button>
        </Link>
      </div>
    </main>
  );
}
