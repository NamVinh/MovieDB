import React from 'react';
import { List } from './List';
export const Genre = (genre_id) => {
	const MOVIES_BYGENRE_API =
		'https://api.themoviedb.org/3/discover/movie?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
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
