import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export const SlideArray = () => {
	const slideArray = [
		{
			image:
				'https://www.themoviedb.org/assets/2/v4/marketing/logos/plex_pms_icon_300-ca5eafe435c01b120e3a0bbe1ee0ff27d3d87ac91f023d3cba6d09406151d692.png',
			title:
				'The TMDb product, service, attitude and support are truly top notch. We love how they support their community and the passion with which they have built an amazing asset that our users can enjoy!',
			author: 'Scott Olechowski, Chief Product Officer & Co-founder of Plex, Inc.',
		},
		{
			image:
				'https://www.themoviedb.org/assets/2/v4/marketing/logos/infuse_300-2f13210f57e1abb7dbc093fada9b0453845b9f11fbce370a2948c1b74dad68f7.png',
			title:
				"Our experience working with TMDb has been positively fantastic! The powerful API coupled with its excellent availability and uptime is simply a great combo. I can't imagine ever using anything else!",
			author: 'James Abeler, Founder & Director of Firecore, LLC',
		},
		{
			image:
				'https://www.themoviedb.org/assets/2/v4/marketing/logos/letterboxd_300-d0f099eb261b7fcd9cbc8ba9af2acac683c4863fe89bdb392142b9bfee8d1467.png',
			title:
				"We love it. From day one we've found the API to be pragmatic, reliable, well structured and well documented. In any engineering project, it's immensely satisfying when you can just plug and play, and that's been the case all the way along. I can't recall a single outage in over five years of use, and we also enjoy having a voice when it comes to the design of new approaches.",
			author: 'Matthew Buchanan, Co-founder of Letterboxd',
		},
	];

	const slide = slideArray.slice(0, 5).map((item, index) => {
		return (
			<Carousel.Item key={index}>
				<div className='row-mt-3 d-flex flex-column flex-xl-row'>
					<div className='col-md-4 my-2 space-img'>
						<img src={item.image} alt={item.title} />
					</div>
					<div className='col-md-8 col-xl-6 mg' style={{ display: 'flex', alignItems: 'center' }}>
						<div className='row'>
							<div className='carousel-captain align-content-center underline'> {item.title} </div>
							<div>{item.author}</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
		);
	});

	return (
		<>
			<div className='container'>
				<Carousel interval={null}>{slide}</Carousel>
			</div>
		</>
	);
};
