import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/" className="w-36 flex items-center gap-5">
                    <Image
                        src="/icons/aj_logo.png"
                        alt="Had Wedding Logo"
                        width={18}
                        height={18}
                    />
                    <div className="font-bold text-nowrap text-base">Had Wedding</div>
                </Link>

                <p className="font-medium text-sm">2024 Had Wedding. All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
