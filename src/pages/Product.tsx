import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import logo from '../assets/img/logo.png';
import heroProduct from '../assets/img/section_product.jpg';
import SwiperProduk from "../components/SwiperProduk";

export default function Product() {
    return (
        <div className="bg-white">
            <Navbar bgClass="bg-baby-500" logoSrc={logo} itemClass="text-baseblue-500" />
            <div className="w-full bg-center bg-cover h-[20rem] mt-20"
                style={{
                    backgroundImage: `url(${heroProduct})`,
                }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">Product Aluminum Bottles</h1>
                    </div>
                </div>
            </div>
            <SwiperProduk />
            <Footer />
        </div>
    );
}