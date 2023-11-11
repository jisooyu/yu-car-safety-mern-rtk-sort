const mongoose = require('mongoose');
const { Schema } = mongoose;

const carMakerSchema = new Schema({
	carMakerName: String,
	models: [
		{
			type: Schema.Types.ObjectId,
			ref: 'CarModels',
		},
	],
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
});

mongoose.model('carMaker', carMakerSchema);
module.exports = mongoose.model('carMaker', carMakerSchema);
