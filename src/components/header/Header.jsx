import Image from "next/image";
import logo from "@/assets/logo.png";

const Header = () => {
	return (
		<div className="container absolute top-0 flex grow justify-center items-center p-2 gap-2">
			<nav className="flex justify-center items-center p-2 gap-5 text-slate-500">
				<h3>
					<a href="#" className="hover:text-white transition-all ease-in-out">
						Home
					</a>
				</h3>
				<h3>
					<a href="#" className="hover:text-white transition-all ease-in-out">
						iniziative
					</a>
				</h3>
			</nav>
			<Image
				src={logo}
				alt="logo"
				width={100}
				className="border-2 rounded-full overflow-hidden object-cover object-center"
			/>
			<nav className="flex justify-center items-center p-2 gap-5 text-slate-500">
				<h3>
					<a href="#" className="hover:text-white transition-all ease-in-out">
						Chi siamo
					</a>
				</h3>
				<h3>
					<a href="#" className="hover:text-white transition-all ease-in-out">
						Contatti
					</a>
				</h3>
			</nav>
		</div>
	);
};

export default Header;
