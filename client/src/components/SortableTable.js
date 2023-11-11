// import { useState } from 'react';
import { GoSortAsc, GoSortDesc } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
	const { config, data } = props;
	const { sortOrder, sortBasis, sortedData, setSortColumn } = useSort(
		data,
		config
	);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}
		return {
			...column,
			header: () => (
				<th
					key={column.label}
					className='cursor-pointer hover:bg-gray-100'
					onClick={() => setSortColumn(column.label)}
				>
					<div className='flex items-center'>
						{getIcons(column.label, sortOrder, sortBasis)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	return (
		<Table
			{...props}
			data={sortedData}
			config={updatedConfig}
		/>
	);
}

function getIcons(label, sortOrder, sortBasis) {
	if (sortBasis !== label) {
		return (
			<div>
				<GoSortAsc />
				<GoSortDesc />
			</div>
		);
	}
	if (sortOrder == null) {
		return (
			<div>
				<GoSortAsc />
				<GoSortDesc />
			</div>
		);
	} else if (sortOrder === 'asc') {
		return (
			<div>
				<GoSortAsc />
			</div>
		);
	} else if (sortOrder === 'desc') {
		return (
			<div>
				<GoSortDesc />
			</div>
		);
	}
}

export default SortableTable;
