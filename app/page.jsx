import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Welcome to <span className="text-brand-500">QR Menu</span> App
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A brief introduction to the QR Menu App and its purpose.
          </p>

          <div className="space-x-3">
            <Link href="/dashboard">
              <Button
                className="space-x-1"
                variant="secondary"
              >
                <span>Dashboard Preview</span>
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                className="space-x-1"
                variant="secondary"
              >
                <span>Menu Preview</span>
              </Button>
            </Link>
            <Link href="/generate">
              <Button>
                <span>Get Started</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
