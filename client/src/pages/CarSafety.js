import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CarSafety() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		carMakerName: '',
		modelYear: 0,
		modelName: '',
		award: '',
		rank: 0,
		score: 0,
		collisionScore: 0,
		pedestrianScore: 0,
		accidentPreventionScore: 0,
		bonusScore: 0,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/safety', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.status === 200) {
				// Data successfully sent
				// You can redirect or display a success message here
				navigate('/');
			} else {
				// Handle error cases here
				const errorData = await response.json();
				console.error(errorData);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>자동차회사</label>
			<input
				type='text'
				name='carMakerName'
				value={formData.carMakerName}
				onChange={handleChange}
				placeholder='Car Maker Name'
			/>
			{/* Repeat the above input field for other form fields */}
			<label>연도</label>
			<input
				type='number'
				name='modelYear'
				value={formData.modelYear}
				onChange={handleChange}
				placeholder='Model Year'
			/>
			<label>모델명</label>
			<input
				type='text'
				name='modelName'
				value={formData.modelName}
				onChange={handleChange}
				placeholder='Model Name'
			/>
			<label>수상</label>
			<input
				type='text'
				name='award'
				value={formData.award}
				onChange={handleChange}
				placeholder='Award'
			/>
			<label>안전도 순위</label>
			<input
				type='number'
				name='rank'
				value={formData.rank}
				onChange={handleChange}
				placeholder='Rank'
			/>
			<label>종합안전도점수</label>
			<input
				type='number'
				name='score'
				value={formData.score}
				onChange={handleChange}
				placeholder='Score'
			/>
			<label>충돌안전점수</label>
			<input
				type='number'
				name='collisionScore'
				value={formData.collisionScore}
				onChange={handleChange}
				placeholder='Collison Score'
			/>
			<label>보행자안전점수</label>
			<input
				type='number'
				name='pedestrianScore'
				value={formData.pedestrianScore}
				onChange={handleChange}
				placeholder='Pedestrian Score'
			/>
			<label>사고방지점수</label>
			<input
				type='number'
				name='accidentPreventionScore'
				value={formData.accidentPreventionScore}
				onChange={handleChange}
				placeholder='Accident Prevention Score'
			/>
			<label>추가점수</label>
			<input
				type='number'
				name='bonusScore'
				value={formData.bonusScore}
				onChange={handleChange}
				placeholder='Bonus Score'
			/>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default CarSafety;
