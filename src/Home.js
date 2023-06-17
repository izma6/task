import React from 'react'
import Button from '@mui/material/Button';
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SocialMedia from './images/SocialMedia.png';
import Wave from './images/Wave.png'
import Logo_images from './images/Group 5.png' 
import Profile from './images/Group 64.png'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Container style={{zIndex:'1000'}}>
        <Row className='banner'>
            <div className='content'>
            <h1>We Help You Grow Your <span>Conversions</span></h1>
            <p>Featured in leading publications around the world</p>
            <img src={Logo_images} style={{width:'400px'}}/>
            <Button variant="contained" sx={{backgroundColor:'orange', height:'50px', padding:'30px', borderRadius:'20px'}}>Contact Us</Button>
            </div>
            <div className='vector'>
            <img src={SocialMedia} style={{width:'100%'}}/>
            </div>
            
        </Row>
      </Container>
      <img src={Wave} style={{width:'100%', position:'absolute', top:'300px'}}/>
      <Container style={{marginTop:'10%'}}>
        <div className ='card'>
            <div className='card1'>
            <img src={Profile}/>
            <p style={{fontWeight:'bold'}}>Paid Search Manager</p>
            <p>Gothenburg, Sweden</p>
<p>tim@lunarstrategy.com</p>
<Button variant="contained" sx={{backgroundColor:'orange', height:'20px', width:'300px', padding:'20px',fontSize:'12px', borderRadius:'10px'}}>Book A Free Meeting ></Button>
            </div>
            <div className='card1'>
            <img src={Profile}/>
            <p style={{fontWeight:'bold'}}>Paid Search Manager</p>
            <p>Gothenburg, Sweden</p>
<p>tim@lunarstrategy.com</p>
<Button variant="contained" sx={{backgroundColor:'orange', height:'20px', width:'300px', padding:'20px',fontSize:'12px', borderRadius:'10px'}}>Book A Free Meeting ></Button>
            </div>
            <div className='card1'>
            <img src={Profile}/>
            <p style={{fontWeight:'bold'}}>Paid Search Manager</p>
            <p>Gothenburg, Sweden</p>
<p>tim@lunarstrategy.com</p>
<Button variant="contained" sx={{backgroundColor:'orange', height:'20px', width:'300px', padding:'20px',fontSize:'12px', borderRadius:'10px'}}>Book A Free Meeting ></Button>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
