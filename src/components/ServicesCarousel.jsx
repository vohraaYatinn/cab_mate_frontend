import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon1 from "../assets/icons/icon1.png";
import Icon2 from "../assets/icons/icon2.png";
import Icon4 from "../assets/icons/icon4.png";

const ServicesCarousel = () => {
    const services = [
        {
            image: "https://picsum.photos/200/200",
            icon: Icon1,
            title: "Roundtrip cabs",
            text: "lorem ipsum asd asd qw dasd as s sdaw dqawd ada sdasdasas dasd asdasd asda sdasdasdas dasdasd asdas dasdasdq qwdsd qwdddbgdfh fhfgh asd  asdasd",
        },
        {
            image: "https://picsum.photos/200/200",
            icon: Icon2,
            title: "Oneway drops",
            text: "lorem ipsum asd asd qw dasd as s sdaw dqawd ada sdasdasas dasd asdasd asda sdasdasdas dasdasd asdas dasdasdq qwdsd qwdddbgdfh fhfgh asd  asdasd",
        },
        {
            image: "https://picsum.photos/200/200",
            icon: Icon2,
            title: "local rentals",
            text: "lorem ipsum asd asd qw dasd as s sdaw dqawd ada sdasdasas dasd asdasd asda sdasdasdas dasdasd asdas dasdasdq qwdsd qwdddbgdfh fhfgh asd  asdasd",
        },
        {
            image: "https://picsum.photos/200/200",
            icon: Icon4,
            title: "airport transfers",
            text: "lorem ipsum asd asd qw dasd as s sdaw dqawd ada sdasdasas dasd asdasd asda sdasdasdas dasdasd asdas dasdasdq qwdsd qwdddbgdfh fhfgh asd  asdasd",
        },
        {
            image: "https://picsum.photos/200/200",
            icon: Icon1,
            title: "Service 4",
            text: "lorem ipsum asd asd qw dasd as s sdaw dqawd ada sdasdasas dasd asdasd asda sdasdasdas dasdasd asdas dasdasdq qwdsd qwdddbgdfh fhfgh asd  asdasd",
        },
    ];

    // Custom Arrow Components
    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-md flex items-center justify-center shadow-md z-10 cursor-pointer hover:bg-blue-500  hover:border-blue-500"
            onClick={onClick}
        >
            <FaArrowLeft fill="blue" className="text-blue-500 hover:text-white" size={20} />
        </div>
    );
    
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 text-blue-500 -right-12 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-md flex items-center justify-center shadow-md z-10 cursor-pointer hover:bg-blue-500  hover:border-blue-500"
            onClick={onClick}
        >
            <FaArrowRight fill="blue" className="text-blue-500 hover:text-white" size={20} />
        </div>
    );
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-8 relative w-full">
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div className="px-2 " key={index}>
                        <div className="bg-white border pb-8 border-customLightBlue rounded-lg shadow-md text-center p-4 relative">
                            {/* Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-52 object-cover rounded-lg"
                            />

                            {/* Icon */}
                            <div className="absolute top-48 p-2  left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border border-customLightBlue rounded-full flex items-center justify-center text-2xl text-blue-500 shadow-md">
                                <img src={service.icon} alt="" />
                            </div>

                            {/* Title and Text */}
                            <h3 className="text-lg uppercase font-semibold text-gray-800 mt-12">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 px-2 ">{service.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default ServicesCarousel;
