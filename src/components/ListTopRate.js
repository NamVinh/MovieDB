import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../css/List.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopRatedMovies } from '../redux/actions/topRateAction';

export const ListTopRate = () => {
	const IMG_API = 'https://image.tmdb.org/t/p/w1280';
	// redux hooks
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		dispatch(loadTopRatedMovies());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);
	const data = useSelector((state) => state.topRate.data);
	console.log(data);

	// border vote
	const setVoteClass = (vote) => {
		if (vote >= 8) {
			return 'green';
		} else if (vote >= 6) {
			return 'orange';
		} else {
			return 'red';
		}
	};
	// release date
	const releaseDateSplit = (item) => {
		if (item) {
			return item.split('-').reverse().join('-');
		} else {
			return 'unknown';
		}
	};

	const movieList = data?.map((item, index) => {
		return (
			<div className='col-md-3 col-xl-2 ' style={{ marginBottom: '1rem' }} key={index}>
				<div className='movie'>
					<Link style={{ textDecoration: 'none' }} to={`/movie/${item.id}`}>
						<img
							className='img-fluid'
							src={
								item.poster_path
									? IMG_API + item.poster_path
									: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80'
							}
							alt={item.title}
						/>
					</Link>
				</div>
				<div className='movie-info'>
					<div className='background-vote'>
						<p className={`tag ${setVoteClass(item.vote_average)} d-flex justify-content-center`}> {item.vote_average} </p>
					</div>
					<Link className='title' style={{ fontSize: 16 }} to={`/movie/${item.id}`}>
						<p> {item.title} </p>{' '}
					</Link>
					<p> Release Date: {releaseDateSplit(item.release_date)}</p>
				</div>
			</div>
		);
	});

	return <>{movieList}</>;
};
