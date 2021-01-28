import React, { useEffect, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { List } from '../components/List';
import { ListTopRate } from '../components/ListTopRate';
import { SlideArray } from '../components/SlideArray';
import { useDispatch, useSelector } from 'react-redux';
import { loadNowPlaying } from '../redux/actions/nowPlayingAction';
import { loadPersons } from '../redux/actions/personsAction';
import { MOVIES_BYGENRE_API, IMG_API, IMG_UNKNOWN } from '../Constants';
export const Movie = () => {
	//redux hooks
	const dispatch = useDispatch();
	const initFetch = useCallback(() => {
		dispatch(loadNowPlaying());
		dispatch(loadPersons());
	}, [dispatch]);
	useEffect(() => {
		initFetch();
	}, [initFetch]);

	const nowPlaying = useSelector((state) => state.nowPlaying.data);
	const persons = useSelector((state) => state.persons.data);

	const slideMovies = nowPlaying?.slice(0, 5).map((item, index) => {
		return (
			<Carousel.Item key={index}>
				<div style={{ width: '100%' }}>
					<div className='carousel-center'>
						<img src={item.backdrop_path ? IMG_API + item.backdrop_path : IMG_UNKNOWN} alt={item.title} />
						<Carousel.Caption>
							<div className='carousel-captain' style={{ textAlign: 'center', fontSize: 24 }}>
								{' '}
								{item.title}{' '}
							</div>
						</Carousel.Caption>
					</div>
				</div>
			</Carousel.Item>
		);
	});

	const trendingPersons = persons?.slice(0, 4).map((item, index) => {
		return (
			<div className='col-md-6 col-xl-3 text-center ' key={index}>
				<img
					className=' rounded-circle '
					height='250'
					width='250'
					style={{ objectFit: 'cover' }}
					src={IMG_API + item.profile_path}
					alt={item.name}
				/>
				<p className='font-weight-bold text-center'>{item.name}</p>
				<p className='font-weight-light text-center' style={{ color: '#5a606b' }}>
					Trending for {item.known_for_department}
				</p>
			</div>
		);
	});

	return (
		<div>
			<div className='bgGrey d-flex'>
				<div className='col-2 '></div>
				<div className='col-8 '>
					<Carousel interval={1000}>{slideMovies}</Carousel>
				</div>
			</div>

			<div className='container'>
				<div className='row mt-3'>
					{' '}
					<h3> What's Popular</h3>{' '}
				</div>
				<div className='row mt-3'>
					<div className='movie-container'>
						<List fetchUrl={MOVIES_BYGENRE_API} />{' '}
					</div>
				</div>
			</div>

			<div className='bgGrey'>
				<SlideArray />{' '}
			</div>

			<div className='container'>
				<div className='row mt-3'>
					{' '}
					<h3>Top Rated Movies</h3>{' '}
				</div>
				<div className='row mt-3'>
					<div className='movie-container'>
						<ListTopRate />
					</div>
				</div>
			</div>

			<div className='bgGrey'>
				<div className='container'>
					<div className='row mt-3'>
						<div className=' font-weight-bolder'>
							<h3>Treding Persons On This Week</h3>
						</div>
					</div>
					<div className='row mt-3 '> {trendingPersons} </div>
				</div>
			</div>
		</div>
	);
};
