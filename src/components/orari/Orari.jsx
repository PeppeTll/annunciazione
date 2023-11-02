const Orari = () => {
	return (
		<div className="lg:container bg-cyan-900 text-gray-400 w-full p-5 flex flex-wrap justify-center items-center">
			<div className="w-1/2 text-center">
				<h2>Orari Santa Messa e Adorazione</h2>
			</div>
			<div className="w-1/2 flex flex-col justify-center items-center gap-5 text-center">
				<div className="border rounded-lg p-3">
					<p>Messa</p>
					<p>16:00 - 18:00</p>
				</div>
				<div className="border rounded-lg p-3">
					<p>Adorazione</p>
					<p>21:00 - 23:00</p>
				</div>
			</div>
		</div>
	);
};

export default Orari;
