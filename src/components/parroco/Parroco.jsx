import Image from "next/image";
import parrocoImg from "@/assets/parroco.jpg";

const Parroco = () => {
	return (
		<div className="w-full bg-gray-400 lg:container flex flex-col-reverse md:flex-row justify-center items-center  gap-5">
			<div className="md:w-1/2 w-full text-center">
				<h2>{"Don Gioacchino D'Agostino"}</h2>
				<p className="text-center p-3">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, iste.
					Quas ipsa saepe dolorum iusto. Veniam hic minima reiciendis quas.
					Odio, repudiandae? Fugiat qui voluptatem deleniti odit, necessitatibus
					adipisci architecto. Eaque, amet dolore neque magnam molestias nisi
					corporis nesciunt a?
				</p>
			</div>
			<Image
				src={parrocoImg}
				alt="foto parroco"
				className="md:w-1/2 w-full h-[500px] object-cover object-center"
			/>
		</div>
	);
};

export default Parroco;
