import React from 'react';
import { List } from './List';
import { MOVIES_BYGENRE_API } from '../Constants';
export const Genre = (genre_id) => {
	// get id from menu
	const id = genre_id.match.params.id;
	console.log(genre_id.match.params.id);

	return (
		<>
			<div className='container'>
				<div className='row mt-3'>
					<List fetchUrl={MOVIES_BYGENRE_API + id} />
				</div>
			</div>
		</>
	);
};
