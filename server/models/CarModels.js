const mongoose = require('mongoose');
const { Schema } = mongoose;

const carModelsSchema = new Schema({
	modelName: String,
	modelYear: Number,
	carMakerId: {
		type: Schema.Types.ObjectId,
		ref: 'CarMaker',
	},
	safeties: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Safety',
		},
	],
});

mongoose.model('carModels', carModelsSchema);

module.exports = mongoose.model('CarModels', carModelsSchema);
