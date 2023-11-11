function CarDetails({ data }) {
	// console.log('car from CarDetails', data);

	const renderedCars = data.map((car) => {
		// console.log('car._id', car._id);
		return (
			<div
				key={car._id}
				className='m-3 p-2'
			>
				<h3 className='text-2xl'>{car.carMakerName}</h3>
				{car.models.map((model) => {
					// console.log('model._id', model._id);
					return (
						<div key={model._id}>
							<h5>Model Name: {model.modelName}</h5>
							<p>Model Year: {model.modelYear}</p>
							{model.safeties.map((safety) => {
								// console.log('safety._id', safety._id);
								return (
									<div key={safety._id}>
										<p>Safety Award: {safety.award}</p>
										<p>Safety Rank: {safety.rank}</p>
										<p>Safety Score: {safety.score}</p>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	});

	return <div className='m-3 border rounded'>{renderedCars}</div>;
}
export default CarDetails;
