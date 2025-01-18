import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageIconImg from '../assets/icons/pageicon.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const TestimonialCarousel = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       text: "This service is amazing! Highly recommend it to everyone.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Jane Smith",
//       text: "The team was incredibly helpful and professional throughout.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Emily Johnson",
//       text: "A wonderful experience from start to finish.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Michael Brown",
//       text: "Top-notch service and great results!",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Sarah Wilson",
//       text: "Couldn't be happier with the outcome. Thank you!",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   const PrevArrow = ({ onClick }) => (
{/* <div
  className="absolute -top-16 right-[70px] z-10 w-8 h-8  border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-blue-500 hover:text-white"
  onClick={onClick}
>
  <FaChevronLeft fill="white" className="text-blue-500 hover:text-white" size={16} />
</div> */}
//   );

//   const NextArrow = ({ onClick }) => (
// <div
//   className="absolute -top-16 right-8 z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-blue-500 hover:text-white"
//   onClick={onClick}
// >
//   <FaChevronRight fill="blue" className="text-blue-500 hover:text-white" size={16} />
// </div>
//   );

//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     infinite: true,
//     speed: 500,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="relative px-4 py-8">
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="px-4 bg-customLightBlue">
//             <div className="testimonial-card grid items-center grid-cols-2 bg-white max-w-5xl w-full h-[300px] rounded-xl transition-transform duration-300">
//               <div>

//               </div>
//               <div className="relative">

//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-40 h-48 rounded-xl mx-auto object-cover border border-gray-300"
//                 />
//               </div>
//             </div>
//             {/* <div
//               className={`testimonial-card bg-white rounded-xl w-[400px] mx-10 h-[300px] w-full transition-transform duration-300`}
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-24 h-24 rounded-full mx-auto object-cover border border-gray-300 mt-4"
//               />
//               <p className="text-lg text-gray-700 italic mt-4 px-4">
//                 "{testimonial.text}"
//               </p>
//               <h3 className="text-md font-semibold text-gray-800 mt-4">
//                 - {testimonial.name}
//               </h3>
//             </div> */}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };



const testimonials = [
  {
    name: "John Doe",
    text: "This service is amazing! Highly recommend it to everyone.",
    image: "/img.png",
  },
  {
    name: "Jane Smith",
    text: "The team was incredibly helpful and professional throughout.",
    image: "/img.png",
  },
  {
    name: "Emily Johnson",
    text: "A wonderful experience from start to finish.",
    image: "/img.png",
  },
  {
    name: "Michael Brown",
    text: "Top-notch service and great results!",
    image: "/img.png",
  },
  {
    name: "Sarah Wilson",
    text: "Couldn't be happier with the outcome. Thank you!",
    image: "/img.png",
  },
];

function TestimonialCarousel() {
  const [counter, setCounter] = useState(1);

  function addCounter() {
    if (counter < testimonials.length - 1) {
      setCounter(counter + 1);
    }
  }

  function minusCounter() {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="relative md:px-4 py-16">
      <div className="flex justify-end px-8 gap-2 absolute -top-4 w-full">
        <div
          className="z-10 w-8 h-8  border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={minusCounter}
        >
          <FaChevronLeft fill="white" className="text-blue-500 hover:text-white" size={16} />
        </div>

        <div
          className="z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={addCounter}
        >
          <FaChevronRight fill="blue" className="text-blue-500 hover:text-white" size={16} />
        </div>
      </div>
      <div className="grid z-30 relative">
        {counter >= 1 && (

          <div className="absolute -left-20 -sm:left-10 md:left-0 -z-20 scale-90 opacity-70 max-w-2xl grid grid-cols-1 md:grid-cols-5 w-full justify-self-center rounded-xl bg-white p-4">
            <div className="md:col-span-3 py-4 px-2 grid items-center relative">
              <div className="absolute top-4 left-4">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8651 18.1513C11.8755 16.9208 11.3809 15.2185 11.3814 13.0441C11.3814 8.3096 14.0454 3.96145 19.3734 0L19.9182 1.01272C16.1638 3.95994 14.2869 6.90693 14.2875 9.85385C14.2875 9.88911 14.2922 9.91821 14.2922 9.9523C15.4764 8.70477 17.1091 8.26277 18.6265 8.77854C20.1441 9.29445 21.3388 10.6978 21.7985 12.5041C22.2583 14.3104 21.9197 16.2726 20.8999 17.7133C20.8446 17.8001 20.7718 17.8793 20.7118 17.9625C20.6827 17.9994 20.6561 18.0363 20.6263 18.0717C20.5183 18.2268 20.4029 18.3744 20.2808 18.5135C19.3529 19.5047 18.1318 20.0002 16.6178 20C15.1037 20 13.8528 19.3839 12.8652 18.1515L12.8651 18.1513ZM1.48327 18.1506C0.494369 16.9201 0 15.2175 0 13.0426C0 8.30961 2.66369 3.96184 7.99131 1.75784e-05L8.53688 1.01334C4.86038 3.9006 2.99699 6.78642 2.92061 9.67127C3.90165 8.78156 5.13839 8.39655 6.35731 8.60167C7.57614 8.80665 8.67639 9.58472 9.41445 10.7636C10.1525 11.9425 10.4676 13.4249 10.2898 14.8827C10.2898 14.8996 10.2921 14.9111 10.2921 14.9269C10.2921 16.327 9.82793 17.5223 8.89957 18.513C7.9712 19.5037 6.75027 19.9988 5.23658 19.9983C3.72324 19.9983 2.47198 19.3825 1.48308 18.1507L1.48327 18.1506Z" fill="url(#paint0_linear_2001_253)" />
                  <defs>
                    <linearGradient id="paint0_linear_2001_253" x1="11.0242" y1="-4.21053" x2="8.19887" y2="19.6686" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5A87FB" />
                      <stop offset="1" stop-color="#1444BD" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>

              <div className="pt-8 md:pt-0">
                <div className="py-4 px-2">
                  <p className="text-zinc-500">
                    {testimonials[counter-1].text}
                  </p>
                </div>
                <div className="px-4">
                  <h1 className="text-xl text-zinc-900 font-bold">
                    {testimonials[counter-1].name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-8 relative z-10 md:col-span-2 row-start-1 md:col-start-4">
              <img src={testimonials[counter-1].image} className="w-full aspect-square rounded-lg object-cover" />
              <div className="w-[50%] h-[50%] bg-customLightBlue top-2 right-2 md:top-6  md:right-6 rounded-lg -z-10 absolute"></div>
              <div className="w-[50%] h-[50%] bg-customLightBlue bottom-2 left-2 md:bottom-6  md:left-6 rounded-lg -z-10 absolute"></div>
            </div>
          </div>
        )}

        <div className="max-w-2xl grid grid-cols-1 md:grid-cols-5 w-full justify-self-center rounded-xl bg-white p-4">
          <div className="md:col-span-3 py-4 px-2 grid items-center relative">
            <div className="absolute top-4 left-4">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8651 18.1513C11.8755 16.9208 11.3809 15.2185 11.3814 13.0441C11.3814 8.3096 14.0454 3.96145 19.3734 0L19.9182 1.01272C16.1638 3.95994 14.2869 6.90693 14.2875 9.85385C14.2875 9.88911 14.2922 9.91821 14.2922 9.9523C15.4764 8.70477 17.1091 8.26277 18.6265 8.77854C20.1441 9.29445 21.3388 10.6978 21.7985 12.5041C22.2583 14.3104 21.9197 16.2726 20.8999 17.7133C20.8446 17.8001 20.7718 17.8793 20.7118 17.9625C20.6827 17.9994 20.6561 18.0363 20.6263 18.0717C20.5183 18.2268 20.4029 18.3744 20.2808 18.5135C19.3529 19.5047 18.1318 20.0002 16.6178 20C15.1037 20 13.8528 19.3839 12.8652 18.1515L12.8651 18.1513ZM1.48327 18.1506C0.494369 16.9201 0 15.2175 0 13.0426C0 8.30961 2.66369 3.96184 7.99131 1.75784e-05L8.53688 1.01334C4.86038 3.9006 2.99699 6.78642 2.92061 9.67127C3.90165 8.78156 5.13839 8.39655 6.35731 8.60167C7.57614 8.80665 8.67639 9.58472 9.41445 10.7636C10.1525 11.9425 10.4676 13.4249 10.2898 14.8827C10.2898 14.8996 10.2921 14.9111 10.2921 14.9269C10.2921 16.327 9.82793 17.5223 8.89957 18.513C7.9712 19.5037 6.75027 19.9988 5.23658 19.9983C3.72324 19.9983 2.47198 19.3825 1.48308 18.1507L1.48327 18.1506Z" fill="url(#paint0_linear_2001_253)" />
                <defs>
                  <linearGradient id="paint0_linear_2001_253" x1="11.0242" y1="-4.21053" x2="8.19887" y2="19.6686" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5A87FB" />
                    <stop offset="1" stop-color="#1444BD" />
                  </linearGradient>
                </defs>
              </svg>

            </div>

            <div className="pt-8 md:pt-0">
              <div className="py-4 px-2">
                <p className="text-zinc-500">
                  {testimonials[counter].text}
                </p>
              </div>
              <div className="px-4">
                <h1 className="text-xl text-zinc-900 font-bold">
                  {testimonials[counter].name}
                </h1>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 relative z-10 md:col-span-2 row-start-1 md:col-start-4">
            <img src={testimonials[counter].image} className="w-full aspect-square rounded-lg object-cover" />
            <div className="w-[50%] h-[50%] bg-customLightBlue top-2 right-2 md:top-6  md:right-6 rounded-lg -z-10 absolute"></div>
            <div className="w-[50%] h-[50%] bg-customLightBlue bottom-2 left-2 md:bottom-6  md:left-6 rounded-lg -z-10 absolute"></div>
          </div>
        </div>


        {counter < testimonials.length-1 && (

          <div className="absolute -right-20 -sm:right-10 md:right-0 -z-20 scale-90 opacity-70 max-w-2xl grid grid-cols-1 md:grid-cols-5 w-full justify-self-center rounded-xl bg-white p-4">
            <div className="md:col-span-3 py-4 px-2 grid items-center relative">
              <div className="absolute top-4 left-4">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8651 18.1513C11.8755 16.9208 11.3809 15.2185 11.3814 13.0441C11.3814 8.3096 14.0454 3.96145 19.3734 0L19.9182 1.01272C16.1638 3.95994 14.2869 6.90693 14.2875 9.85385C14.2875 9.88911 14.2922 9.91821 14.2922 9.9523C15.4764 8.70477 17.1091 8.26277 18.6265 8.77854C20.1441 9.29445 21.3388 10.6978 21.7985 12.5041C22.2583 14.3104 21.9197 16.2726 20.8999 17.7133C20.8446 17.8001 20.7718 17.8793 20.7118 17.9625C20.6827 17.9994 20.6561 18.0363 20.6263 18.0717C20.5183 18.2268 20.4029 18.3744 20.2808 18.5135C19.3529 19.5047 18.1318 20.0002 16.6178 20C15.1037 20 13.8528 19.3839 12.8652 18.1515L12.8651 18.1513ZM1.48327 18.1506C0.494369 16.9201 0 15.2175 0 13.0426C0 8.30961 2.66369 3.96184 7.99131 1.75784e-05L8.53688 1.01334C4.86038 3.9006 2.99699 6.78642 2.92061 9.67127C3.90165 8.78156 5.13839 8.39655 6.35731 8.60167C7.57614 8.80665 8.67639 9.58472 9.41445 10.7636C10.1525 11.9425 10.4676 13.4249 10.2898 14.8827C10.2898 14.8996 10.2921 14.9111 10.2921 14.9269C10.2921 16.327 9.82793 17.5223 8.89957 18.513C7.9712 19.5037 6.75027 19.9988 5.23658 19.9983C3.72324 19.9983 2.47198 19.3825 1.48308 18.1507L1.48327 18.1506Z" fill="url(#paint0_linear_2001_253)" />
                  <defs>
                    <linearGradient id="paint0_linear_2001_253" x1="11.0242" y1="-4.21053" x2="8.19887" y2="19.6686" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5A87FB" />
                      <stop offset="1" stop-color="#1444BD" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>

              <div className="pt-8 md:pt-0">
                <div className="py-4 px-2">
                  <p className="text-zinc-500">
                    {testimonials[counter+1].text}
                  </p>
                </div>
                <div className="px-4">
                  <h1 className="text-xl text-zinc-900 font-bold">
                    {testimonials[counter+1].name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-8 relative z-10 md:col-span-2 row-start-1 md:col-start-4">
              <img src={testimonials[counter+1].image} className="w-full aspect-square rounded-lg object-cover" />
              <div className="w-[50%] h-[50%] bg-customLightBlue top-2 right-2 md:top-6  md:right-6 rounded-lg -z-10 absolute"></div>
              <div className="w-[50%] h-[50%] bg-customLightBlue bottom-2 left-2 md:bottom-6  md:left-6 rounded-lg -z-10 absolute"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialCarousel;
