const mongoose = require('mongoose');
const { Schema } = mongoose;

const safetySchema = new Schema({
	award: String,
	rank: Number,
	score: Number,
	collisionScore: Number,
	pedestrianScore: Number,
	accidentPreventionScore: Number,
	bonusScore: Number,
	carModelsId: {
		type: Schema.Types.ObjectId,
		ref: 'CarModels',
	},
});

mongoose.model('safety', safetySchema);

module.exports = mongoose.model('Safety', safetySchema);
