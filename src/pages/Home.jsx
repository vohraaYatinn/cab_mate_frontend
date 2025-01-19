import React from 'react'
import Header from '../components/Header'
import HomeBanner from '../assets/homebanner.png'
import SideImage from '../assets/sideimage.png'
import CabMateImg from '../assets/cabmateimg.png'
import ServicesCarousel from '../components/ServicesCarousel'
import EllipseImg from '../assets/ellipse.png'
import BenefitsImg from '../assets/benefits.png'
import TopRightImg from '../assets/topright.png'
import GoogleDownload from '../assets/googledownload.png'
import Footer from '../components/Footer'
import Phones from '../assets/phones.png'
import Buildings from '../assets/buildings.png'
import EqualImg from '../assets/icons/equal.png'
import WhatSet1Img from '../assets/icons/whatset1.png'
import WhatSet2Img from '../assets/icons/whatset2.png'
import WhatSet3Img from '../assets/icons/whatset3.png'
import WhatSet4Img from '../assets/icons/whatset4.png'
import PageIconImg from '../assets/icons/pageicon.png'
import Vector1 from '../assets/vector1.png'
import Vector2 from '../assets/vector2.png'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { countrydata } from "../components/countrydata";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <main className='w-screen overflow-x-hidden'>
      {/* <Header /> */}

      {/* Banner  */}
      <div className='relative w-full sm:h-[700px] min-h-[700px] grid sm:mb-0 mb-52'>
        <div className="w-full  lg:h-full sm:h-[600px] h-[400px] ">
          <img className='w-full h-full object-cover' src={HomeBanner} alt="" />
        </div>

        <div className="sm:w-[40%] w-[94%] rounded-md shadow-lg absolute sm:top-0 top-32 sm:left-32 justify-self-center transform flex-col  h-full flex items-center justify-center">
          <div className="flex sm:h-14 justify-between items-center ">
            <div className="h-full sm:py-0 py-2 sm:px-0 px-3 mr-1 rounded-tl-2xl bg-customLightBlue text-sm font-semibold sm:w-[130px] uppercase flex items-center justify-center ">one way</div>
            <div className="h-full sm:py-0 py-2 sm:px-0 px-3 text-gray-900 mr-1  bg-white text-sm font-semibold sm:w-[130px] uppercase flex items-center justify-center ">round trip</div>
            <div className="h-full sm:py-0 py-2 sm:px-0 px-3 text-gray-900 mr-1  bg-white text-sm font-semibold sm:w-[130px] uppercase flex items-center justify-center ">local</div>
            <div className="h-full sm:py-0 py-2 sm:px-0 px-3 text-gray-900 rounded-tr-2xl bg-white text-sm font-semibold sm:w-[130px] uppercase flex items-center justify-center ">airport</div>
          </div>

          <div className="w-full  p-5 bg-white rounded-md   px-10 py-10 shadow-md">
            {/* Row 1: From (left) and To (right) */}
            <div className="flex sm:flex-row flex-col justify-center items-center gap-5 mb-4">
              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 text-xs bg-white absolute top-[-9px] left-4" htmlFor="from">From</label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>
              <div className=" sm:flex hidden absolute bg-white h-9 w-9 p-2 rounded-full shadow-xl z-20">
                <img className="h-full w-full object-cover" src={EqualImg} alt="" />
              </div>
              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 text-xs bg-white absolute top-[-9px] left-4" htmlFor="from">To</label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>
            </div>

            {/* Row 2: Pickup Time (left) and Bidding (right) */}
            <div className="flex sm:flex-row flex-col justify-between gap-4 mb-4 relative">

              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 text-xs bg-white absolute top-[-9px] left-4" htmlFor="from">Pickup Time</label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>



              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 text-xs bg-white absolute top-[-9px] left-4" htmlFor="from">Bidding</label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>


            </div>

            {/* Row 3: Pickup (left) and Pickup At (right) */}
            <div className="flex  sm:flex-row flex-col  justify-between gap-4 mb-4">
              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 px-1 text-xs bg-white absolute top-[-9px] left-4" htmlFor="from">Pick Up</label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>
              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 px-1 text-xs bg-white absolute top-[-9px] left-4" htmlFor="from">Pick Up At</label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>
            </div>

            {/* Row 4: Phone Number (left) and Explore Cabs Button (right) */}
            <div className="flex  sm:flex-row flex-col  justify-between gap-4 mb-4">
              <div className="sm:w-1/2 w-full">
                <div className="mt-1 p-3 w-full border border-gray-700 rounded-lg relative">
                  <label className="text-gray-800 text-xs bg-white absolute top-[-9px] left-4 px-1" htmlFor="from">Phone Number </label>
                  <input type="text" id="from" className="" placeholder="Enter City" />
                </div>
              </div>
              <div className="sm:w-1/2 w-full flex items-center justify-end">
                <button className="px-4 py-3 w-full bg-customLightBlue text-white rounded-md hover:bg-blue-600" 
                onClick={()=>{
                  navigate("/booking");
                }}
                >Explore Cabs</button>
              </div>
            </div>
          </div>
        </div>


      </div>


      {/* Above Services  */}
      <div className="w-full flex sm:flex-row sm:gap-0 gap-5 flex-col justify-between items-center px-20 min-h-20 sm:my-14">


        <div className="w-[400px] h-[240px] flex items-center bg-[#f2fcfd] shadow  shadow-customLightBlue  rounded-3xl overflow-hidden">
          <div className="w-1/2 h-full flex flex-col p-3">
            <div>
              <img src={CabMateImg} alt="" />
            </div>
            <div className="flex flex-col mt-6 ml-2">
              <p className="text-gray-800 text-3xl nowy font-semibold">Bring back</p>
              <p className="text-gray-800 text-3xl nowy font-semibold">Memories</p>
            </div>
            <div className="flex uppercase poppins w-[150px] text-sm py-1 items-center justify-center flex-col mt-6 ml-2 bg-[#02A61B] ">
              #makeitroadtrip
            </div>
          </div>
          <div className="w-1/2 h-full overflow-hidden">
            <img className="w-full h-full " src={SideImage} alt="" />
          </div>
        </div>

        <div className="w-[400px] h-[240px] flex items-center bg-[#f2fcfd] shadow  shadow-customLightBlue  rounded-3xl overflow-hidden">
          <div className="w-1/2 h-full flex flex-col p-3">
            <div>
              <img src={CabMateImg} alt="" />
            </div>
            <div className="flex flex-col mt-6 ml-2">
              <p className="text-gray-800 text-3xl nowy font-semibold">Our Driver</p>
              <p className="text-gray-800 text-3xl nowy font-semibold">Partners</p>
            </div>
            <div className="flex  poppins w-[150px]  py-1 items-center justify-center flex-col text-xs ml-3  text-gray-700 ">
              Lorem, ipsum dolor sit consect eturcons equuntur.
            </div>
          </div>
          <div className="w-1/2 h-full overflow-hidden">
            <img className="w-full h-full " src={SideImage} alt="" />
          </div>
        </div>

        <div className="w-[400px] h-[240px] flex items-center bg-[#f2fcfd] shadow  shadow-customLightBlue  rounded-3xl overflow-hidden">
          <div className="w-1/2 h-full flex flex-col p-3">
            <div>
              <img src={CabMateImg} alt="" />
            </div>
            <div className="flex flex-col mt-6 ml-2">
              <p className="text-gray-800 text-3xl nowy font-semibold">Cab Mate</p>
              <p className="text-gray-800 text-3xl nowy font-semibold">Travellers</p>
              <p className="text-gray-800 text-3xl nowy font-semibold">and Car</p>
            </div>
            <div className="flex  poppins w-[150px]  py-1 items-center justify-center flex-col text-xs ml-3  text-gray-700 ">
              Lorem, ipsum dolor sit consecteturconsequuntur.
            </div>
          </div>
          <div className="w-1/2 h-full overflow-hidden">
            <img className="w-full h-full " src={SideImage} alt="" />
          </div>
        </div>

      </div>

      {/* Our Services  */}

      <section className="w-full flex items-center flex-col">
        <p className="text-3xl font-semibold text-customLightBlue text-center mb-3 poppins">Our Services</p>
        <p className="text-center text-gray-600 text-sm sm:w-[500px] mb-5">sit amet, consectetur adipisicing elit. Dolorem natus aperiam ducimus illum ullam dolor magnam pariatur quisquam blanditiis consequatur?</p>

        <div className="w-full sm:px-20 px-12 flex items-center justify-center">
          <ServicesCarousel />
        </div>
      </section>

      {/* What Set Cab mate apart  */}
      <section className="relative w-full py-10  flex flex-col items-center" style={{ background: 'linear-gradient(90deg, #F4FAFF 100%, #EDF6FF00 0%)' }}>
        <p className="text-3xl text-customLightBlue mb-2 font-semibold text-center poppins">What Sets Cab Mate Apart?</p>
        <p className="text-gray-600 text-center sm:w-[500px] text-sm mt-2 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit fugit nemo vitae sint totam. Aperiam fugit error eligendi animi.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4  gap-8 my-4 ">

          <div className="bg-white w-full sm:w-[235px] px-2 shadow-2xl rounded-lg h-[100px] flex flex-row items-center justify-between sm:justify-start">
            <div className="relative sm:w-20 sm:h-20  flex items-center justify-center rounded-full p-1 overflow-hidden mr-4 border border-customLightBlue">
              <img className="w-full h-full object-cover" src={EllipseImg} alt="" />
              <img className="absolute" src={WhatSet1Img} alt="" />
            </div>
            <p className="text-black font-semibold">Expert Chauffeurs</p>
          </div>

          <div className="bg-white sm:w-[235px]   px-2 shadow-2xl rounded-lg h-[100px] flex flex-row items-center justify-between">
            <div className="relative  sm:w-20 sm:h-20  flex items-center justify-center rounded-full p-1 overflow-hidden mr-4 border border-customLightBlue">
              <img className="w-full h-full object-cover" src={EllipseImg} alt="" />
              <img className="absolute" src={WhatSet1Img} alt="" />2
            </div>
            <p className="text-black font-semibold">Expert Chauffeurs</p>
          </div>

          <div className="bg-white sm:w-[235px]    px-2 shadow-2xl rounded-lg h-[100px] flex flex-row items-center justify-between">
            <div className="relative sm:w-20 sm:h-20  flex items-center justify-center rounded-full p-1 overflow-hidden mr-4 border border-customLightBlue">
              <img className="w-full h-full object-cover" src={EllipseImg} alt="" />
              <img className="absolute" src={WhatSet3Img} alt="" />
            </div>
            <p className="text-black font-semibold">Expert Chauffeurs</p>
          </div>

          <div className="bg-white sm:w-[235px]    px-2 shadow-2xl rounded-lg h-[100px] flex flex-row items-center justify-between">
            <div className="relative sm:w-20 sm:h-20 flex items-center justify-center rounded-full p-1 overflow-hidden mr-4 border border-customLightBlue">
              <img className="w-full h-full object-cover" src={EllipseImg} alt="" />
              <img className="absolute" src={WhatSet4Img} alt="" />
            </div>
            <p className="text-black font-semibold">Expert Chauffeurs</p>
          </div>

        </div>

      </section>

      <section className="flex sm:flex-row flex-col w-full min-h-[800px] items-start relative  bg-[#02298A]">

        <div className="absolute w-full z-10">
          <img className="w-full" src={Vector1} alt="" />
        </div>

        <div className="sm:w-[55%] w-full h-full sm:px-[70px] px-4 sm:py-20 py-10 z-20">
          <p className="font-semibold text-4xl mb-3">See Some Benefits of Joining Us</p>
          <p className="text-sm ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, inventore? Neque itaque <br /> dolor eum velit, cum facere! Magnam, assumenda rerum?</p>

          <div className="w-full sm:h-40 mt-10 flex flex-col p-6 bg-white rounded-[30px]">
            <p className="bg-gray-700 text-white w-8 flex items-center justify-center rounded-full">01</p>
            <p className="text-gray-800 font-bold text-xl mt-3">Get best deals</p>
            <p className="text-gray-500  text-sm mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut unde atque molestiae eius rem maxime cumque exercitationem minus saepe quidem!</p>
          </div>

          <div className="w-full sm:h-40 mt-5 flex flex-col p-6  rounded-[30px]" style={{ background: 'linear-gradient(180deg, #5A87FB 0%, #1444BD 40%)' }}>
            <p className="bg-white text-blue-500 w-8 flex items-center justify-center rounded-full">02</p>
            <p className="text-white font-bold text-xl mt-3">100% price transparency</p>
            <p className="text-white  text-sm mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut unde atque molestiae eius rem maxime cumque exercitationem minus saepe quidem!</p>
          </div>

          <div className="w-full sm:h-40 mt-5 flex flex-col p-6 bg-white rounded-[30px]">
            <p className="bg-orange-400 text-white w-8 flex items-center justify-center rounded-full">03</p>
            <p className="text-gray-800 font-bold text-xl mt-3">Travel with more confidence</p>
            <p className="text-gray-500  text-sm mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut unde atque molestiae eius rem maxime cumque exercitationem minus saepe quidem!</p>
          </div>

        </div>
        <div className="sm:w-[45%]  w-full h-full flex justify-center items-end relative z-20">
          <div className="sm:w-[500px] relative  sm:-bottom-32 sm:mb-0 mb-10">
            <img className="w-full h-full object-cover" src={BenefitsImg} alt="" />
          </div>
        </div>
        <div className="absolute w-full z-10 bottom-0">
          <img className="w-full" src={Vector2} alt="" />
        </div>
      </section>

      {/* Flexible Hourly Rentals Section  */}
      <section className="w-full flex flex-col py-20 items-center ">
        <p className="text-gray-800 poppins text-4xl font-semibold sm:text-start text-center">Flexible Hourly Car Rentals in India</p>
        <p className="text-gray-700 text-sm sm:w-[600px] mt-2 text-center">Lorem ipsum adipisicing elit. Corporis, quis iusto natus consequatur id, dolor accusantium in explicabo pariatur, ipsa illo aliquid?</p>

        <div className="py-8 flex sm:flex-row flex-col justify-between sm:gap-10 items-center">


          <div className="relative h-[500px] w-[280px] ">
            <div className="w-full h-[350px] relative">
              <div className="absolute top-0 right-0 bg-white rounded-bl-3xl rounded-tr-md w-20 h-20 flex justify-center items-center p-3">
                <img src={PageIconImg} alt="" />
              </div>
              <img className="h-full w-full object-cover rounded-lg" src="https://picsum.photos/300/500?random=1" alt="" />
            </div>
            <div className="w-full px-6">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center relative top-[-30px]">
                <div className="flex w-full justify-start items-center px-3">
                  <div className="flex flex-col py-3 items-start justify-between w-full">
                    <p className="text-gray-800 poppins text-sm">Delhi, India</p>
                    <p className="text-gray-400 poppins text-xs">Delhi, India</p>
                  </div>
                  <div className="text-gray-800 font-semibold flex text-lg h-full items-center">
                    <span className="text-xs text-gray-400 font-normal">From</span>₹940
                  </div>
                </div>
              <button className="uppercase poppins border border-customLightBlue w-full text-customLightBlue font-semibold text-sm py-2 rounded">
            <Link to={'/car_detail'}>  
                  Book now
                </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-[280px]">
            <div className="w-full h-[350px] relative">
              <div className="absolute top-0 right-0 bg-white rounded-bl-3xl rounded-tr-md w-20 h-20 flex justify-center items-center p-3">
                <img src={PageIconImg} alt="" />
              </div>
              <img className="h-full w-full object-cover rounded-lg" src="https://picsum.photos/300/500?random=2" alt="" />
            </div>
            <div className="w-full px-6">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center relative top-[-30px]">
                <div className="flex w-full justify-start items-center px-3">
                  <div className="flex flex-col py-3 items-start justify-between w-full">
                    <p className="text-gray-800 poppins text-sm">Hyderabad</p>
                    <p className="text-gray-400 poppins text-xs">Andhra Pradesh</p>
                  </div>
                  <div className="text-gray-800 font-semibold flex text-lg h-full items-center">
                    <span className="text-xs text-gray-400 font-normal">From</span>₹940
                  </div>
                </div>
                <button className="uppercase poppins border border-customLightBlue w-full text-customLightBlue font-semibold text-sm py-2 rounded">
                <Link to={'/car_detail'}>  
                  Book now
                </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-[280px]">
            <div className="w-full h-[350px] relative">
              <div className="absolute top-0 right-0 bg-white rounded-bl-3xl rounded-tr-md w-20 h-20 flex justify-center items-center p-3">
                <img src={PageIconImg} alt="" />
              </div>
              <img className="h-full w-full object-cover rounded-lg" src="https://picsum.photos/300/500?random=3" alt="" />
            </div>
            <div className="w-full px-6">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center relative top-[-30px]">
                <div className="flex w-full justify-start items-center px-3">
                  <div className="flex flex-col py-3 items-start justify-between w-full">
                    <p className="text-gray-800 poppins text-sm">Delhi, India</p>
                    <p className="text-gray-400 poppins text-xs">Delhi, India</p>
                  </div>
                  <div className="text-gray-800 font-semibold flex text-lg h-full items-center">
                    <span className="text-xs text-gray-400 font-normal">From</span>₹940
                  </div>
                </div>
                <button className="uppercase poppins border border-customLightBlue w-full text-customLightBlue font-semibold text-sm py-2 rounded">
                <Link to={'/car_detail'}>  
                  Book now
                </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-[280px]">
            <div className="w-full h-[350px] relative">
              <div className="absolute top-0 right-0 bg-white rounded-bl-3xl rounded-tr-md w-20 h-20 flex justify-center items-center p-3">
                <img src={PageIconImg} alt="" />
              </div>
              <img className="h-full w-full object-cover rounded-lg" src="https://picsum.photos/300/500" alt="" />
            </div>
            <div className="w-full px-6">
              <div className="bg-white shadow-xl flex flex-col items-center justify-center relative top-[-30px]">
                <div className="flex w-full justify-start items-center px-3">
                  <div className="flex flex-col py-3 items-start justify-between w-full">
                    <p className="text-gray-800 poppins text-sm">Delhi, India</p>
                    <p className="text-gray-400 poppins text-xs">Delhi, India</p>
                  </div>
                  <div className="text-gray-800 font-semibold flex text-lg h-full items-center">
                    <span className="text-xs text-gray-400 font-normal">From</span>₹940
                  </div>
                </div>
                <button className="uppercase poppins border border-customLightBlue w-full text-customLightBlue font-semibold text-sm py-2 rounded">
                <Link to={'/car_detail'}>  
                  Book now
                </Link>
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Testimonail Carousel  */}

      {/* <section className="bg-customLightBlue px-12 pt-10 pb-10 flex flex-col">
        <p className="poppins  text-4xl ">What Our Customer Say About Us</p>
        <TestimonialCarousel />
      </section> do not uncomment */}
      <section className='bg-customLightBlue px-12 py-16 flex flex-col'>
        <p className="poppins  text-4xl ">What Our Customer Say About Us</p>
        <TestimonialCarousel />
      </section>

      <section className="w-full flex flex-col pb-20 relative mt-16">
        <div className="relative sm:pl-20 pl-4">
          <p className="text-gray-800 text-4xl font-semibold">India's Largest Intercity and Local Cab Services</p>
          <p className="text-gray-800 text-sm sm:w-[700px] mt-4">Lorem asdas dasd asd aqwdq dqwd asdas dq wdqsd asd ipsum dolor sit amet consectetur adipisicing elit. Veniam vel numquam rem perspiciatis atque nostrum quaerat molestiae dignissimos voluptas reiciendis ipsa eius perferendis necessitatibus ipsam porro totam commodi, repellendus in?</p>

          <div className="absolute right-0 sm:top-[-50px] top-20">
            <img className="w-40" src={TopRightImg} alt="" />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center sm:px-20 px-4 mt-14">
          <div className="sm:w-1/2 w-full sm:h-[700px] h-[500px] p-5 relative">
            <img className="absolute w-[95%] h-[95%] z-20 object-cover rounded-[30px]" src="https://picsum.photos/500/550" alt="" />
            <div className="absolute z-10 right-0 top-0 bg-customLightBlue h-[350px] w-[180px] rounded-r-[30px] rounded-l"></div>
            <div className="absolute z-10 left-0 bottom-0 bg-customLightBlue h-[350px] w-[180px] rounded-l-[30px] rounded-r"></div>
          </div>

          <div className="sm:w-1/2 h-[700px] flex flex-col sm:px-16  justify-start py-10 ">
            <p className="text-gray-800 text-2xl font-semibold">Exploring India, one road trip at a time</p>
            <p className="text-gray-800 sm:w-[450px] mt-[7px] text-sm">Lorem ipsum dolor asd asd ad qwdq wdq dasd asdas dasdas das dasd qwdq as dasd  adipisicing elit. Molestiae, eum. Consequuntur dignissimos soluta animi quaerat voluptatibus, in ut minus magni ad facere velit quam reiciendis minima. Quia optio consequatur molestias!</p>
            <p className="text-gray-800 sm:w-[450px] mt-[7px] text-sm">Lorem ipsum dolor, eum. Consequuntur dignissimos soluta animi quaerat voluptatibus, in ut minus magni ad facere velit quam reiciendis minima. Quia optio consequatur molestias!</p>
            <p className="text-gray-800 sm:w-[450px] mt-[7px] text-sm">Lorem ipsum dolor eum. Consequuntur dignissimos soluta animi quaerat voluptatibus, in ut minus magni ad facere velit quam reiciendis minima. Quia optio consequatur molestias!</p>

            <div className="h-[1px] w-full  my-8 pr-20">
              <div className="w-full h-full bg-gray-200"></div>
            </div>

            <p className="text-gray-800 text-2xl font-semibold ">No matter where you travel - we've <br /> got a crab for you</p>
            <p className="text-gray-800 sm:w-[450px] mt-[7px] text-sm">Lorem ipsum dolor asd asd ad qwdq wdq dasd asdas dasdas das dasd qwdq as dasd  adipisicing elit. Molestiae, eum. Consequuntur dignissimos soluta animi quaerat voluptatibus, in ut minus magni ad facere velit quam reiciendis minima. Quia optio consequatur molestias!</p>
            <p className="text-gray-800 sm:w-[450px] mt-[7px] text-sm">Lorem ipsum dolor, eum. Consequuntur dignissimos soluta animi quaerat voluptatibus, in ut minus magni ad facere velit quam reiciendis minima. Quia optio consequatur molestias!</p>
            <p className="text-gray-800 sm:w-[450px] mt-[7px] text-sm">Lorem ipsum dolor eum. Consequuntur dignissimos soluta animi quaerat voluptatibus, in ut minus magni ad facere velit quam reiciendis minima. Quia optio consequatur molestias!</p>
          </div>

        </div>
      </section>

      <section className="sm:mt-0 mt-40 sm:pb-0 pb-52 w-full flex sm:flex-row flex-col-reverse justify-center  sm:px-32  h-[600px] relative">
        <div className="h-full sm:w-1/2 sm:p-20 p-4 flex flex-col gap-2 sm:items-start items-center ">
          <p className="text-gray-800 sm:text-[45px] text-3xl sm:text-start text-center font-semibold">Download App Now!</p>
          <p className="text-gray-700 mt-2 text-xl sm:text-start text-center ">Use code <span className="text-customLightBlue font-semibold">MTR1</span> and get <span className="text-customLightBlue font-semibold">FLAT 10%</span> off on your <br className="sm:block hidden" /> domestic flight booking</p>

          <div className="w-full sm:pr-14 ">
            <div className="flex items-center mt-5 bg-gray-100 border-gray-300 rounded-lg border">
              <img className="w-12 h-6 px-2" src={countrydata[1].flag} alt="Country Flag" />
              <input
                type="tel"
                placeholder="Mobile Number"
                className=" rounded-md py-2 px-4 w-full "
              />
            </div>
          </div>

          <button className="bg-customLightBlue w-[200px] cursor-pointer rounded-full py-3 px-10 mt-7 text-white ">
            Get App Link
          </button>
          <div className="w-[350px] mt-10">
            <img src={GoogleDownload} alt="" />
          </div>
        </div>

        <div className="h-full sm:w-1/2  relative ">
          <img className="h-full w-full object-cover" src={Phones} alt="" />
        </div>

        <div className="absolute bottom-0">
          <img src={Buildings} alt="" />
        </div>
      </section>


      {/* <Footer /> */}



    </main>
  )
}

export default Home