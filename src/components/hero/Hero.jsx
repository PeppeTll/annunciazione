// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import image
import Image from "next/image";
import chiesa_1 from "@/assets/chiesa_1.jpg";
import chiesa_2 from "@/assets/chiesa_2.jpg";
import chiesa_3 from "@/assets/chiesa_3.jpg";
import chiesa_4 from "@/assets/chiesa_4.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
	return (
		<div className="w-screen lg:container h-screen md:h-[600px]">
			<Swiper
				className="relative"
				spaceBetween={30}
				effect={"fade"}
				// centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, EffectFade]}
			>
				<div className="absolute z-20 text-slate-400 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col justify-center items-center">
					<h1 className="after:content-[''] after:absolute after:bottom-0 after:border after:border-slate-400 after:w-full after:left-0 relative">
						Chiesa Annunciazione del Signore
					</h1>
					<Image
						src={logo}
						alt="logo"
						width={300}
						className="backdrop-blur-sm rounded-full overflow-hidden"
					/>
				</div>
				<SwiperSlide className="brightness-50">
					<Image
						src={chiesa_1}
						alt="Foto chiesa"
						className="w-full object-cover object-center h-[600px]"
					/>
				</SwiperSlide>
				<SwiperSlide className="brightness-50">
					<Image
						src={chiesa_2}
						alt="Foto chiesa"
						className="w-full object-cover object-center h-[600px]"
					/>
				</SwiperSlide>
				<SwiperSlide className="brightness-50">
					<Image
						src={chiesa_3}
						alt="Foto chiesa"
						className="w-full object-cover object-center h-[600px]"
					/>
				</SwiperSlide>
				<SwiperSlide className="brightness-50">
					<Image
						src={chiesa_4}
						alt="Foto chiesa"
						className="w-full object-cover object-center h-[600px]"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
