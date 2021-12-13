import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/contacts' activeStyle>
			Contacts
		</NavLink>
		<NavLink to='/projects' activeStyle>
			Projects
		</NavLink>
		<NavLink to='/services' activeStyle>
			Services
            </NavLink>
		
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
