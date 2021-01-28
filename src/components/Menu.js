import React, { useState, useEffect, useCallback } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadGenres } from '../redux/actions/genreAction';
import '../css/Menu.css';
export const Menu = () => {
	const [searchValue, setsearchValue] = useState('');
	// redux hooks
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		dispatch(loadGenres());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

	const genre = useSelector((state) => state.genres.data);

	// route hooks
	let history = useHistory();

	const genresNav = genre?.map((item, index) => {
		return (
			<div className='item-dropdown' key={index}>
				<Link className='link-dropdown' to={`/genre/${item.id}`}>
					{item.name}
				</Link>
			</div>
		);
	});

	function handleClick() {
		history.push(`/search/movie/${searchValue}`);
	}

	const handleOnkeypress = (e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	const handleOnchange = (e) => {
		setsearchValue(e.target.value);
		console.log(e.target.value);
	};

	return (
		<header>
			<Navbar style={{ backgroundColor: '#032541' }} variant='dark' expand='lg' fixed='top'>
				<div className='container'>
					<Navbar.Brand href='/'>
						<img
							src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
							alt='The Movie Database (TMDb)'
							width='154'
							height='38'
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav ' />
					<Navbar.Collapse id='basic-navbar-nav '>
						<Nav style={{ fontSize: '1.1rem' }} className='mr-auto'>
							<Nav.Link href='/'> Home</Nav.Link>
							<NavDropdown title='Movies'>
								<div className='Dropdown'>{genresNav}</div>
							</NavDropdown>
						</Nav>

						<Form inline>
							<FormControl
								type='text'
								placeholder='Search'
								value={searchValue}
								onChange={handleOnchange}
								onKeyPress={handleOnkeypress}
								className='mr-sm-2 search'
							/>
							<Link to={`/search/movie/${searchValue}`}>
								<Button variant='outline-info'>Search</Button>
							</Link>
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</header>
	);
};
