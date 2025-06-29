import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';

import product1 from '../assets/img/8.jpg';
import product2 from '../assets/img/2.jpg';
import product3 from '../assets/img/3.jpg';
import product4 from '../assets/img/4.jpg';
import product5 from '../assets/img/5.jpg';
import product6 from '../assets/img/6.jpg';
import product7 from '../assets/img/7.jpg';
import product8 from '../assets/img/1.jpg';


type Product = {
    image: string;
    name: string;
    type: string;
    sizes: string[];
    description: string;
};

const products: Product[] = [
    {
        image: product1,
        name: 'Lorem Aluminum Bottle 1',
        type: 'Matte Finish',
        sizes: ['100 ml', '200 ml', '300 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product2,
        name: 'Lorem Aluminum Bottle 2',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product3,
        name: 'Lorem Aluminum Bottle 3',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product4,
        name: 'Lorem Aluminum Bottle 4',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product5,
        name: 'Lorem Aluminum Bottle 5',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product6,
        name: 'Lorem Aluminum Bottle 6',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product7,
        name: 'Lorem Aluminum Bottle 7',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
    {
        image: product8,
        name: 'Lorem Aluminum Bottle 8',
        type: 'Glossy Finish',
        sizes: ['150 ml', '250 ml', '500 ml'],
        description:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            tincidunt nulla, vitae blandit nulla.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate id molestias nostrum facere minus ratione inventore beatae reprehenderit voluptatem! Laborum?`,
    },
];

export default function SwiperProduk() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="bg-baby-500">
            <div className="relative pt-16 pb-16 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                {/* Swiper Utama */}
                <Swiper
                    modules={[Navigation, Thumbs]}
                    spaceBetween={20}
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    className="mb-6"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col md:flex-row items-stretch mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 md:gap-[20px] bg-baby-500">
                                {/* Gambar */}
                                <div className="w-full sm:w-1/2">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full object-fit-cover object-top h-[250px] md:h-[500px] lg:h-[600px] object-cover"
                                    />
                                </div>

                                {/* Detail */}
                                <div className="w-full sm:w-1/2 bg-baby-100 p-5 flex flex-col justify-start">
                                    <ul className="space-y-4 text-gray-700 text-sm">
                                        <li>
                                            <h3 className="text-sm md:text-base font-semibold text-baseblue-500 mb-1">Nama</h3>
                                            <p className='text-sm md:text-base'>{product.name}</p>
                                        </li>
                                        <li>
                                            <h3 className="text-sm md:text-base font-semibold text-baseblue-500 mb-1">Jenis</h3>
                                            <p className='text-sm md:text-base'>{product.type}</p>
                                        </li>
                                        <li>
                                            <h3 className="text-sm md:text-base font-semibold text-baseblue-500 mb-1">Ukuran Tersedia</h3>
                                            <ul className="list-disc list-inside">
                                                {product.sizes.map((size, i) => (
                                                    <li key={i}>{size}</li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <h3 className="text-sm md:text-base font-semibold text-baseblue-500 mb-1">Deskripsi</h3>
                                            <p className='text-sm md:text-base'>{product.description}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* Thumbnails */}
                <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    breakpoints={{
                        0:{
                            slidesPerView: 3,
                        },
                        640:{
                            slidesPerView: 8,
                        }
                    }}
                    // slidesPerView={5}
                    watchSlidesProgress
                    className="thumb-swiper hidden sm:block"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={`thumb-${index}`}>
                            <div className="flex items-stretch gap-[5px] w-full cursor-pointer">
                                <img
                                    src={product.image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-40 object-cover border border-gray-300 rounded hover:border-baseblue-500 "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
