import Navbar from "../components/Navbar"
import HighlightText from '../components/HighlightText'
import Footer from "../components/Footer"
import Banners from "../components/Banners"
import Feature from "../components/Feature"
import Bestseller from "../components/Bestseller"

import sectionHeroImg from '../assets/img/section_index.png'
import storyImage from '../assets/img/story.jpg'

export default function Index() {
    
    return (
        <div className="bg-white">
            <Navbar/>
            <div className="relative isolate px-6 pt-14 lg:px-8"
                style={{
                    backgroundImage: `url(${sectionHeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                }}>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#3075bb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <HighlightText
                            text="Wise Choices for a Better Earth"
                            className="text-5xl font-semibold tracking-tight text-balance text-baby-100 sm:text-7xl"
                        />
                        <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                            Discover the perfect balance of form and function with our premium aluminum bottles. Designed for people who care — about style, health, and the planet.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-baseblue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-baseblue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-baseblue-500"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="hidden absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#3075bb] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </div>
            </div>
            <Feature />
            <div className="bg-baby-500 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
                    <h2 className="text-center text-3xl sm:text-4xl font-semibold text-baseblue-500">
                        Our Official Branch Locations Across the Country
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            alt="Transistor"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="Reform"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="Tuple"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="SavvyCal"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        />
                        <img
                            alt="Statamic"
                            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                            width={158}
                            height={48}
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        />
                    </div>
                </div>
            </div>
            <Bestseller />
            <div className="bg-baby-500">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-xl" 
                            src={storyImage}
                            alt=""/>
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-3xl font-semibold tracking-tight text-baseblue-500 sm:text-4xl ">
                            From Humble Beginnings to Where We Stand Today
                        </h2>

                        <p className="block max-w-2xl mt-4 text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem veritatis molestiae quis possimus adipisci odio cum? Minima, voluptas excepturi voluptatibus aut dolorum dolor praesentium magni, facilis incidunt quidem saepe, optio numquam quod in. Dolorum eligendi animi iusto quod id aliquam quo laboriosam eius nulla, sequi molestias quos quisquam autem.
                            At saepe eligendi placeat corporis facilis tenetur quidem eius atque obcaecati magni consequuntur doloremque, iste accusamus modi expedita fuga sunt facere voluptas? Neque adipisci suscipit alias expedita repellat? Beatae perspiciatis consequuntur quasi explicabo natus, facilis eos neque quis, officiis labore blanditiis tempore sint? Adipisci deleniti nesciunt incidunt fugit doloremque unde? A!</p>

                    </div>
                </div>
            </div>
            <Banners />
            <Footer />
        </div>
    )
}