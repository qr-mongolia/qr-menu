import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="container sticky top-0 left-0 flex items-center justify-between py-4 backdrop-blur">
        <Link href={"/"}>
          <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
            QR Menu
          </h3>
        </Link>
        <div className="flex items-center space-x-4">
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
