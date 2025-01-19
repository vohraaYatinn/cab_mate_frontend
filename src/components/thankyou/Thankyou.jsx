import React, { useState } from 'react';
import booking_banner from '../../assets/booking-banner.jpg';
import { FormControl, InputAdornment, MenuItem, TextField, Button, Box, useMediaQuery } from '@mui/material';
import { Person, Email, LocationOn, Phone } from '@mui/icons-material';
import fulepump from '../../assets/fuel-pump.png'
import cardrive from '../../assets/car.svg'
import banknotes from '../../assets/banknotes.svg'
import moneycash from '../../assets/money.svg'
import bg_for_all from '../../assets/bg_for_all.png'

// import mailimg from '../../assets/mail.svg'

import './Thankyou.css'
import { Link } from 'react-router-dom';

const Thankyou = () => {


    const ipad = useMediaQuery('(max-width:1024px)')
    const ismobile= useMediaQuery('(max-width:600px)')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedCheckbox, setSelectedCheckbox] = useState(0)
    const buttons = ["Inclusions", "Exclusions",  "T&C"]
    

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default country code
    pickup: '',
    drop: '',
  });

  const countries = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'USA' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'Australia' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
 
  };




//   const toggleExpand = (index) => {
//     setExpandedCarIndex(index === expandedCarIndex ? null : index);
//   };
const handleCheckboxClick = (index)=>{
setSelectedCheckbox(index)
}



const checkboxData = [
    {
      price:'2375',
      discount:'0'  
    },
    {
        price:'594',
        discount:'25'  
      },
      {
        price:'1187',
        discount:'50'  
      },
      {
        price:'2375',
        discount:'100'  
      },
]
  return (
    <div>
      <div className="booking-box">
        <div
          className="booking-main-img"
          style={{
            backgroundImage: `url(${booking_banner})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            color: '#fff',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <span>Home</span>
          <span style={{ margin: '0 8px', color: '#ff0000' }}>➔</span>
         <Link to={'/car_details'}> <span>Select Car</span></Link>
          <span style={{ margin: '0 8px', color: '#ff0000' }}>➔</span>
        <Link to={'/booking'}>  <span>Booking</span></Link>
        </div>
        

        <div className="booking-main-box" style={{
            display:'flex',
            // backgroundColor:'red',
            width:'100%',
            padding:ipad ? "20px 10px":'100px 50px 0px 50px',
            gap:'30px',
            alignItems:'center',
            justifyContent:"center",
     
        }}>
     

   <div
   style={{
    //    width:'100%',
            gap:'60px',
            display:'flex',
            // backgroundColor:'red',
            padding:ipad ? '40px 0px 0px':'10px 0px 100px 0px',
            backgroundImage:`url(${bg_for_all})`,
            // width:'100%',
            backgroundPosition:'bottom',
            backgroundSize:'cover',
flexDirection:ipad ?'column':'row'

   }}
   >

{/* <div
   style={{
    //    width:'100%',
            gap:'30px',
            display:'flex',
            // backgroundColor:'red',
            // alignItems:'center',
            padding:'0px 0px 100px 0px',
            justifyContent:"space-between",
            backgroundImage:`url(${bg_for_all})`,
            width:'100%',
            backgroundPosition:'bottom',
            backgroundSize:'cover',
flexDirection:ipad ?'column':'row'

   }}
   > */}

{/* </div> */}



          <div style={{
         display:'grid',
         gap:'20px'
          }}>

           <Box sx={{
            backgroundColor:'white',
            color:'black',
            borderRadius:'20px',
            // width:'500px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',

           }}>
           <div className="booking-details-page" style={{
            backgroundColor:'#0E39A6',
            textAlign:'center',
            padding:'10px 0px',
            borderTopLeftRadius:'20px',
            borderTopRightRadius:'20px',

           }}>
                <h2 style={{
                    fontWeight:900,
                    fontSize:'18px'
                }}>Thank you for booking with us!</h2>

            </div>
            <div className='booking-details-show'>

                <div className='booking-details-show-box'>
               <h2> Total Fare :
                 </h2>
                 <span>$ 2358</span>
                </div>
            </div>
           </Box>

          
          </div> 
   </div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
