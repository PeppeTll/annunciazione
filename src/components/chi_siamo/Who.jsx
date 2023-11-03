import Image from "next/image";
import chiesa_1 from "@/assets/chiesa_1.jpg";

const Who = () => {
	return (
		<div
			id="Chi_siamo"
			className="w-full bg-gray-400 lg:container flex flex-col md:flex-row justify-center items-center  gap-5"
		>
			<Image src={chiesa_1} alt="foto chiesa" className="md:w-1/2 w-full" />
			<div className="md:w-1/2 w-full text-center">
				<h2>Chi siamo</h2>
				<p className="text-center p-3">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, iste.
					Quas ipsa saepe dolorum iusto. Veniam hic minima reiciendis quas.
					Odio, repudiandae? Fugiat qui voluptatem deleniti odit, necessitatibus
					adipisci architecto. Eaque, amet dolore neque magnam molestias nisi
					corporis nesciunt a?
				</p>
			</div>
		</div>
	);
};

export default Who;
