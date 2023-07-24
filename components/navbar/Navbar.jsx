import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 left-0 flex items-center justify-between py-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          QR Menu
        </h3>
        <div className="space-x-4 flex items-center">
          <div className="space-x-2">
            <Link href="/login">
              <Button
                variant="ghost"
                className="underline"
              >
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
