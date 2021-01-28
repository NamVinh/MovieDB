import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPersonsDetail } from '../redux/actions/personDetailAction';
import { IMG_API, IMG_UNKNOWN } from '../Constants';

export const ListPerson = ({ fetchUrl }) => {
	const dispatch = useDispatch();
	const initFetch = useCallback(() => {
		dispatch(loadPersonsDetail(fetchUrl));
	}, [dispatch, fetchUrl]);
	useEffect(() => {
		initFetch();
	}, [initFetch]);

	const persons = useSelector((state) => state.personDetail.data);

	const trendingPersons = persons?.map((item, index) => {
		return (
			<div className=' col-md-6 col-lg-2 text-center my-3' key={index}>
				<div className='casts'>
					<img className='img-fluid' src={item.profile_path ? IMG_API + item.profile_path : IMG_UNKNOWN} alt={item.name} />
					<p className='font-weight-bold ' style={{ fontSize: 18 }}>
						{item.name}
					</p>
					<p className=' ' style={{ color: '#5a606b' }}>
						{item.character}
					</p>
					<p className=' ' style={{ color: '#5a606b' }}>
						Trending for {item.known_for_department}
					</p>
				</div>
			</div>
		);
	});

	return <>{trendingPersons}</>;
};
