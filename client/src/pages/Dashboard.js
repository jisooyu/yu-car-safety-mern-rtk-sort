import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoogleLogoutButton from '../components/Auth/GoogleLogoutButton';
import Skeleton from '../components/Skeleton';
import CarPage from './CarPage';
import Button from '../components/Button';
import { useThunk } from '../hooks/use-thunk';
import { fetchData } from '../store';

const Dashboard = () => {
	const [doFetchData, isLoadingData, loadingDataError] = useThunk(fetchData);
	const { data } = useSelector((state) => {
		return state.safety;
	});

	useEffect(() => {
		// Check Redux store for existing data before triggering a new fetch
		if (!data.length) {
			doFetchData();
		}
	}, [doFetchData, data]);

	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/table');
	};

	let content;
	if (isLoadingData) {
		content = (
			<Skeleton
				times={6}
				className='h-10 w-full'
			/>
		);
	} else if (loadingDataError) {
		content = <div>Error fetching data:{loadingDataError.message}</div>;
	}
	return (
		<>
			<div className='h-20 w-auto flex flex-row justify-between items-center bg-blue-400'>
				<Button
					rounded
					warning
					onClick={handleClick}
					className='ml-5 '
				>
					Sort Safety Data
				</Button>

				<h1 className='m-5 text-gray-100'>Car Safety Data</h1>
				{content}
				<GoogleLogoutButton />
			</div>

			<div>
				<CarPage data={data} />
			</div>
		</>
	);
};

export default Dashboard;
