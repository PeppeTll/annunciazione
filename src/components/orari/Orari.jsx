const Orari = () => {
	return (
		<div className="lg:container w-full bg-slate-500 flex flex-col justify-center items-center p-5 ">
			<h1>Orari</h1>
			<div className="flex flex-col md:flex-row justify-around w-full md:items-start items-center gap-5">
				<div className="flex flex-col justify-center items-center">
					<h2>Santa Messa</h2>
					<div className="flex justify-center items-center gap-5">
						<h2 className="border border-gray-400 rounded-lg p-3 hover:text-white transition-all hover:shadow-2xl hover:shadow-white">
							9:30
						</h2>
						<h2 className="border border-gray-400 rounded-lg p-3 hover:text-white transition-all hover:shadow-2xl hover:shadow-white">
							11:30
						</h2>
						<h2 className="border border-gray-400 rounded-lg p-3 hover:text-white transition-all hover:shadow-2xl hover:shadow-white">
							18:00
						</h2>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center ">
					<h2>Adorazione</h2>
					<h3 className="border border-gray-400 rounded-lg p-3 hover:text-white transition-all hover:shadow-2xl hover:shadow-white">
						Mercoledì alle 21:00
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Orari;
