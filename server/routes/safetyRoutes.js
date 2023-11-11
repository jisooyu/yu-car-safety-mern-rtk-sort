const requireLogin = require('../middlewares/requireLogin');

const CarMaker = require('../models/CarMaker');
const CarModels = require('../models/CarModels');
const Safety = require('../models/Safety');

module.exports = (app) => {
	app.post('/api/safety', requireLogin, async (req, res) => {
		const {
			carMakerName,
			modelYear,
			modelName,
			award,
			rank,
			score,
			collisionScore,
			pedestrianScore,
			accidentPreventionScore,
			bonusScore,
		} = req.body;

		try {
			const safetyModel = new Safety({
				award,
				rank,
				score,
				collisionScore,
				pedestrianScore,
				accidentPreventionScore,
				bonusScore,
			});
			await safetyModel.save();

			const carModels = new CarModels({
				modelName,
				modelYear,
				safeties: [safetyModel],
			});

			// Save the CarModels document to the database
			await carModels.save();

			const carMaker = new CarMaker({
				carMakerName,
				models: [carModels],
				_user: req.user.id,
			});
			await carMaker.save();
			res
				.status(200)
				.send({ message: 'CarMaker and CarModels created successfully' });
		} catch (error) {
			res.status(422).send(error);
		}
	});

	app.get('/api/safety', async (req, res) => {
		try {
			const cars = await CarMaker.find({}).populate({
				path: 'models',
				populate: {
					path: 'safeties',
				},
			});

			res.status(200).json(cars);
		} catch (error) {
			res.status(422).send(error);
		}
	});
};
