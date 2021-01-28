import React from 'react';
import { List } from './List';
import { SEARCH_API } from '../Constants';
export const Search = (search_value) => {
	const id = search_value.match.params.id;
	console.log(search_value.match.params.id);

	return (
		<div>
			<div className='container'>
				<div className='row mt-3'>
					<List fetchUrl={SEARCH_API + id} />
				</div>
			</div>
		</div>
	);
};
