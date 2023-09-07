/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <nav className="navcontainer">
      <div className="nav-left">
        <NavLink to="/">
          <BsChevronLeft />
        </NavLink>
      </div>
      <h2>TV-show/Anime</h2>
      <div>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </div>
      <div className="nav-right">
        <FaMicrophone />
        <AiTwotoneSetting />
      </div>
    </nav>
  );
}

export default NavBar;
// import React from 'react';
// import * as Icon from 'react-bootstrap-icons';
// import {
//   Nav, NavLink, Navbar, Container,
// } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function NavBar() {
//   return (
//     <>
//       <Navbar className="bg-primary h2">
//         <Container>
//           <NavLink to="/">
//             <Icon.ChevronLeft color="white" />
//           </NavLink>
//           <NavLink to="/">
//             <span className="text-light">TV-Show/Anime</span>
//           </NavLink>
//           <NavLink to="/about">
//             <span className="text-light">About</span>
//           </NavLink>
//           <Nav>
//             <NavLink to="">
//               <Icon.MicFill color="white" />
//             </NavLink>
//             <NavLink to="">
//               <Icon.GearFill color="white" />
//             </NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;
