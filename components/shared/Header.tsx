import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import Mobilenav from "./MobilenNav"
import MobileNav from "./MobilenNav"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36 flex items-center gap-5">
                <Image
                    src="/icons/aj_logo.png"
                    alt="Had Wedding Logo"
                    width={30}
                    height={30}
                />
                <div className="font-bold text-nowrap text-3xl">Had Wedding</div>
            </Link>

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems/>
                </nav>
            </SignedIn>

            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <MobileNav/>
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header
