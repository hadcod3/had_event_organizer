import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css"
import { imageList } from "@/constants";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home() {
    const events = await getAllEvents({
        query: '',
        category: '',
        page: 1,
        limit: 6
    })

    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="h1-bold">
                            Make your dream wedding come true with us!
                        </h1>
                        <p className="p-regular-20 md:p-regular-24">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus optio magnam sint veniam nulla error vero amet nostrum accusamus.
                        </p>
                        <Button size="lg" asChild className="button w-full sm:w-fit">
                            <Link href="#events">Explore Now</Link>
                        </Button>
                    </div>
                    <Image
                        src="/assets/images/flower.png"
                        alt="flower"
                        width={1200}
                        height={1200}
                        className="max-h-[70vh] object-contain object-center 2xl:max-h-[80vh]"
                    />
                </div>
            </section>

            <section className={styles.gallery_view}>
                <div className={`${styles.image_container} py-10`}>
                    <Image className={`${styles.image_box} ${styles.image_1} bg-slate-300`} src={`/assets/images/image-1.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className={`${styles.image_box} ${styles.image_2}`} src={`/assets/images/image-2.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className={`${styles.image_box} ${styles.image_3}`} src={`/assets/images/image-3.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className={`${styles.image_box} ${styles.image_4}`} src={`/assets/images/image-4.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className={`${styles.image_box} ${styles.image_5}`} src={`/assets/images/image-5.jpg`} width={200} height={200} alt="gallery_images" />
                </div>
            </section>

            <section id="events" className="wrapper my-8 flex flex-col md:gap-12">
                <h2 className="h2-bold">Trusted by <br/> Thousands of Events</h2>
                <div className="flex w-full flex-col gap-5 md:flex-row">
                    Search
                    CategoryFilter
                </div>
                <Collection
                data={events?.data}
                emptyTitle="No Events Found"
                emptyStateSubtext="Check later"
                collectionType="All_Events"
                limit={6}
                page={1}
                totalPages={2}
                />
            </section>

            <section className={`${styles.about_section} bg-gray-100 py-14 md:py-10"`} id="about">
                <div className={styles.grand_image}>
                    <div className={`${styles.border_image} border-y-4 border-y-gray-400`}></div>
                    <Image
                    src={"/assets/images/image-2.jpg"}
                    className={styles.center_image}
                    alt="center image"
                    width={300}
                    height={300}
                    />
                </div>
                <div className={styles.about_container}>
                    <div className={`${styles.about_box} ${styles.about_box_1} bg-gray-200`}></div>
                    <div className={`${styles.about_box} ${styles.about_box_2} bg-gray-200`}></div>
                    <div className={`${styles.about_box} ${styles.about_box_3} bg-gray-200`}></div>
                    <div className={`${styles.about_box} ${styles.about_box_4} bg-gray-200`}></div>
                    <div className={`${styles.about_box} ${styles.about_box_5} bg-gray-200`}></div>
                    <div className={`${styles.about_box} ${styles.about_box_6} bg-gray-200`}></div>
                </div>
            </section>

            <section className={`${styles.greeting_container} bg-gray-200`}>
                <div className={styles.greeting_box}>
                    <div className={styles.circle_box}>
                        <div className={styles.title}>
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
                    <div className={`${styles.square_box} bg-gray-300`}></div>
                </div>
            </section>
        </>
    );
}
