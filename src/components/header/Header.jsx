const Header = () => {
	return (
		<div className="container absolute top-0 z-10 flex grow justify-center items-center p-2 gap-2">
			<nav className="flex justify-center items-center p-2 gap-5 text-slate-400">
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
