import React from 'react';
import image1 from '../assets/img/1.jpg'
import image2 from '../assets/img/2.jpg'
import image3 from '../assets/img/3.jpg'
import image4 from '../assets/img/4.jpg'
import image5 from '../assets/img/5.jpg'
import image6 from '../assets/img/6.jpg'
import image7 from '../assets/img/7.jpg'

export default function Bestseller() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-3xl font-bold tracking-tight text-baseblue-500 sm:text-6xl">
                            Our Best Seller Products
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Discover the most-loved products chosen by our customers.
                            These top picks combine quality, design, and everyday function — trusted and restocked again and again.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    alt=""
                                                    src={image5}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={image2}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={image3}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={image4}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={image1}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={image6}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    alt=""
                                                    src={image7}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-baseblue-500 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                            >
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}