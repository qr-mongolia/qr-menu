import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <main className="container flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Welcome to <span className="text-brand-500">QR Menu</span> App
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A brief introduction to the QR Menu App and its purpose.
          </p>

          <Link href="/generate">
            <div className="space-x-3">
              {/* <Button
                className="space-x-1"
                variant="secondary"
              >
                <BsGithub />
                <span>Github</span>
              </Button> */}
              <Button>
                <span>Get Started</span>
              </Button>
            </div>
          </Link>
        </div>
        {/* <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
            Generate QR Code
          </h2>
          <Link href="/generate">
            <Button>Generate</Button>
          </Link>
        </div> */}
      </main>
    </>
  );
}
