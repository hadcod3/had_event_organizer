import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
            <Link href="/" className="flex items-center gap-5">
                <Image
                    src="/assets/images/logo.png"
                    alt="Had Wedding Logo"
                    width={200}
                    height={40}
                />
            </Link>

                <p className="font-medium text-sm">2024 Had Wedding. All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
