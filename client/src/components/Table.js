import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Table({ data, config, keyFn }) {
	const navigate = useNavigate();
	const renderedHeaders = config.map((column) => {
		if (column.header) {
			return <Fragment key={column.label}>{column.header()}</Fragment>;
		}
		return <th key={column.label}>{column.label}</th>;
	});

	const renderedRows = data.map((rowData) => {
		const renderedCells = config.map((column) => {
			return (
				<td
					className='p-2'
					key={keyFn(column)}
				>
					{column.render(rowData)}
				</td>
			);
		});

		return (
			<tr
				className='border-b'
				key={rowData.modelName}
			>
				{renderedCells}
			</tr>
		);
	});

	return (
		<div>
			<div className='h-20 w-auto flex flex-row justify-between items-center bg-blue-400'>
				<Button
					rounded
					warning
					onClick={() => navigate('/dashboard')}
					className='ml-5'
				>
					Back To Dashboard
				</Button>
			</div>
			<h5 className='mt-5 ml-12 '>Car Model Safety Data</h5>
			<table className='table-auto border-spacing-2 mt-5 ml-12 '>
				<thead>
					<tr className='border-b-2'>{renderedHeaders}</tr>
				</thead>
				<tbody>{renderedRows}</tbody>
			</table>
		</div>
	);
}

export default Table;
