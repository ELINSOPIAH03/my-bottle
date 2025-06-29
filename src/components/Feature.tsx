import videoFotage from '../assets/img/feature.mp4'
export default function Feature() {
    return (
        <>
            <div className="bg-white">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-baseblue-500 capitalize sm:text-4xl">What Makes Us <br /> <span className="text-baseblue-500">Stand Out</span></h1>

                    <video
                        className="w-full h-64 md:h-[450px] object-cover rounded-xl mt-12"
                        src={videoFotage}
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>


                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
                        <div className="p-6 border rounded-xl border-r-baseblue-500 border-baseblue-500">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-baby-500 bg-baseblue-500 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-medium text-gray-700 capitalize ">Our Service</h1>

                                    <p className="mt-3 text-gray-500 ">
                                        We provide product solutions for individuals, industries, and public companies.
                                        Our services are available across all regions of Indonesia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl border-r-baseblue-500 border-baseblue-500">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-baby-500 bg-baseblue-500 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-medium text-gray-700 capitalize ">Customer Service</h1>

                                    <p className="mt-3 text-gray-500 ">
                                        Our customer support team is ready to assist you 24 hours a day, 7 days a week.
                                        We’re here to help with any questions, anytime you need us.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl border-r-baseblue-500 border-baseblue-500 ">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-baby-500 bg-baseblue-500 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-medium text-gray-700 capitalize ">Delivery</h1>

                                    <p className="mt-3 text-gray-500 ">
                                        We ensure fast and reliable delivery for every order, wherever you are.
                                        Punctuality is our priority to support your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl border-r-baseblue-500 border-baseblue-500 ">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-baby-500 bg-baseblue-500 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-medium text-gray-700 capitalize ">Flexibility</h1>

                                    <p className="mt-3 text-gray-500 ">
                                        We offer flexible terms tailored to your needs — from pricing to delivery.
                                        Adjustments on order quantity, product type, and lead time are available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}