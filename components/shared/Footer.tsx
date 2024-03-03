import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/home.module.css"

const Footer = () => {
    return (
        <footer className={`${styles.greeting_container} bg-slate-800`}>
            <section>
                <div className={styles.circle_box}>
                    <div className={styles.title}>
                        {/* <Image
                        src={"/assets/icons/logo.png"}
                        className={styles.icon_logo}
                        alt="logo"
                        width={40}
                        height={40}
                        /> */}
                        <h5 className="text-lg">wedding agency</h5>
                        <Image
                        src={"/assets/images/text_logo.png"}
                        className={styles.text_logo}
                        alt="text logo"
                        width={300}
                        height={50}
                        />
                    </div>
                    <div className={styles.flower_border}>
                        <Image
                        src={"/assets/images/clover.png"}
                        className={`${styles.flower_image} ${styles.fi_1}`}
                        alt="clover"
                        width={180}
                        height={300}
                        />
                        <Image
                        src={"/assets/images/clover.png"}
                        className={`${styles.flower_image} ${styles.fi_2}`}
                        alt="clover"
                        width={180}
                        height={300}
                        />
                    </div>
                </div>
                <div className={`${styles.square_box} bg-slate-900`}></div>
            </section>
            {/* <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
            <Link href="/" className="flex items-center gap-5">
                <Image
                    src="/assets/images/logo.png"
                    alt="Had Wedding Logo"
                    width={200}
                    height={40}
                />
            </Link>

                <p className="font-medium text-sm">2024 Had Wedding. All Right Reserved.</p>
            </div> */}
        </footer>
    )
}

export default Footer
