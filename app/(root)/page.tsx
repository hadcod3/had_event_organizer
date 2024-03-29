import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from '@/types';
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css"
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const events = await getAllEvents({
        query: searchText,
        category,
        page,
        limit: 3
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

            <section className="flex items-center justify-center -z-[1] pb-0">
                <div className="flex items-end justify-center py-10">
                    <Image className="overflow-hidden border-8 border-white object-cover w-[250px] h-[250px] rounded-tl-[250px] translate-x-[100px] z-[1]" src={`/assets/images/image-1.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className="overflow-hidden border-8 border-white object-cover w-[200px] h-[300px] rounded-tl-[250px] translate-x-[30px] z-[2]" src={`/assets/images/image-2.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className="overflow-hidden border-8 border-white object-cover w-[250px] h-[350px] rounded-t-[250px] z-[3]" src={`/assets/images/image-3.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className="overflow-hidden border-8 border-white object-cover w-[200px] h-[300px] rounded-tr-[250px] -translate-x-[30px] z-[2]" src={`/assets/images/image-4.jpg`} width={200} height={200} alt="gallery_images" />
                    <Image className="overflow-hidden border-8 border-white object-cover w-[250px] h-[250px] rounded-tr-[250px] -translate-x-[100px] z-[1]" src={`/assets/images/image-5.jpg`} width={200} height={200} alt="gallery_images" />
                </div>
            </section>

            <section id="events" className="wrapper my-8 flex flex-col md:gap-12">
                <h2 className="h2-bold">Trusted by <br/> Thousands of Events</h2>
                <div className="flex w-full flex-col gap-5 md:flex-row">
                    <Search />
                    <CategoryFilter/>
                </div>
                <Collection
                data={events?.data}
                emptyTitle="No Events Found"
                emptyStateSubtext="Check later"
                collectionType="All_Events"
                limit={3}
                page={page}
                totalPages={events?.totalPages}
                />
            </section>

            <section className="relative flex items-center justify-center flex-col gap-y-7 bg-gray-100 py-14 md:py-10" id="about">
                <div className="relative sm:absolute">
                    {/* Border Center Image */}
                    <div className="absolute -inset-[25px] w-[300px] h-[400px] rounded-[200px] opacity-70 border-y-4 border-y-gray-400 md:w-[400px] md:h-[550px]"></div>
                    {/* Center Image */}
                    <Image
                    src={"/assets/images/image-2.jpg"}
                    className="w-[250px] h-[350px] rounded-[200px] overflow-hidden md:w-[350px] md:h-[500px]"
                    alt="center image"
                    width={300}
                    height={300}
                    />
                </div>
                <div className="grid items-center justify-center grid-cols-2 grid-rows-4 gap-x-[0px] gap-y-[0px] md:gap-x-[450px] md:gap-y-[20px] sm:gap-y-[0px] sm:gap-x-[300px]">
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            20<span className="text-sm absolute -right-4">th</span>
                        </div>
                        <div className="text-base md:text-clip leading-5 text-center">years of existence</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            4000<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">supported events</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            35<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">wedding package</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            25<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">vendors</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            10<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">event themes</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            150<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">event tool types</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            100<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">venues</div>
                    </div>
                    <div className="w-[150px] h-[110px] p-4 flex flex-col items-center justify-start">
                        <div className="text-4xl font-bold flex relative">
                            1000<span className="text-base absolute -right-3">+</span>
                        </div>
                        <div className="text-base leading-5 text-center">tips & tricks</div>
                    </div>
                </div>
            </section>

            <section className="flex items-end justify-center bg-gray-200">
                <div className="py-3 md:pt-6 md:pb-12 relative flex justify-center">
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center rounded-full bg-white z-[2]">
                        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full border-t-4 border-b-4 border-amber-500 flex items-center justify-center flex-col">
                            <h5 className="text-xs sm:text-base md:text-lg">wedding agency</h5>
                            <Image
                                src={"/assets/images/text_logo.png"}
                                className="object-contain scale-[0.7] sm:scale-75 md:scale-100"
                                alt="text logo"
                                width={300}
                                height={50}
                                />
                            </div>
                            <div className="absolute flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
                                <Image
                                src={"/assets/images/clover.png"}
                                className="absolute object-contain -top-16 -right-14 sm:-top-6  sm:-right-6 rotate-[150deg] scale-[0.35] sm:scale-50 md:scale-100"
                                alt="clover"
                                width={180}
                                height={300}
                                />
                                <Image
                                src={"/assets/images/clover.png"}
                                className="absolute object-contain -bottom-16 -left-14 sm:-bottom-6  sm:-left-6 -rotate-[30deg] scale-[0.35] sm:scale-50 md:scale-100"
                                alt="clover"
                                width={180}
                                height={300}
                                />
                        </div>
                    </div>
                    <div className="absolute bottom-0 hidden md:block w-[500px] h-[300px] z-[1] bg-gray-300"></div>
                </div>
            </section>
        </>
    );
}
