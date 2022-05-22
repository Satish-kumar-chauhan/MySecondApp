import React from 'react'
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {data,exhibition} from '../Database/Database';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa';
import SiteLogo from '../assets/images/painting-logo.png'
const Header = () => {
  return (
    <>
    <div class="row ">
            <div class="col-md-9 col-lg-9 col-xl-9 col-12">
                <p className='mb-0'>Welcome to MyUse@ Original Handmade Paintings & Artworks from India.</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3 col-12">
             <label >info@gmail.com |</label> 
             <FaFacebook className='facebook'/>
              <FaTwitter className='twitter'/>
              <FaInstagram className='instagram'/>
              <FaYoutube className='youtube'/>
              
            </div>
          </div>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand><img src={SiteLogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <LinkContainer to="/">
        <Nav.Link><HomeIcon /></Nav.Link>
      </LinkContainer>
          <NavDropdown title="Paintings" id="basic-nav-dropdown">
            {(data.paintingTypes).map((pType,i)=>{
              return (
              <LinkContainer key={i} to={`/painting/${pType.id}`}>
              <NavDropdown.Item ><ArrowForwardIosIcon /> {pType.name}</NavDropdown.Item>
              </LinkContainer>)
            })}
          </NavDropdown>
          <LinkContainer to='/paintingexhibition'>
          <Nav.Link>EXhibition</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about'>
          <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/artist'>
          <Nav.Link>Artist</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/contact'>
          <Nav.Link >Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/userloginlogout'>
          <Nav.Link><PersonIcon /></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/shoppingcart'>
          <Nav.Link><ShoppingCartIcon/></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/wishlist'>
          <Nav.Link ><FavoriteIcon /></Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}
export default Header;
