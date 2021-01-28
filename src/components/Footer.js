import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
	return (
		<div>
			<div
				style={{
					background: 'radial-gradient(at 30% top, #031d33 0%, rgba(3,37,65, 1) 70%)',
					color: '#fff',
				}}>
				<div className='container'>
					<div style={{ padding: '1rem' }} className='row'>
						<div className='col-md-8 col-sm-6 '>
							<h1> ABOUT ME</h1>
							<p>
								lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliquam. Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex else
							</p>
							<p>
								lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliquam. Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex else
							</p>
							<ul className='list-inline'>
								<li className='list-inline-item'>
									<a
										href='/'
										style={{
											color: '#f4c10f',
										}}>
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
								</li>
								<li className='list-inline-item'>
									<a
										href='/'
										style={{
											color: '#f4c10f',
										}}>
										<FontAwesomeIcon icon={faYoutube} />
									</a>
								</li>
								<li className='list-inline-item'>
									<a
										href='/'
										style={{
											color: '#f4c10f',
										}}>
										<FontAwesomeIcon icon={faInstagram} />
									</a>
								</li>
							</ul>
						</div>

						<div className='col-md-4 col-sm-6 '>
							<h2> KEEP IN TOUCH</h2>
							<ul className='list-unstyled'>
								<li>
									<strong>
										<FontAwesomeIcon icon={faMapMarkerAlt} /> Address: city, state, country
									</strong>
								</li>
								<li>
									<strong>
										<FontAwesomeIcon icon={faPhoneAlt} /> Phone: +84 123456789
									</strong>
								</li>
								<li>
									<strong>
										<FontAwesomeIcon icon={faEnvelopeOpen} /> Email: info@gmail.com
									</strong>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
