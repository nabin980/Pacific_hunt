import React, { useRef, useState, useEffect } from "react";
import "./crousele.css";
import image35 from "../../assets/leftarrow.svg";
import image36 from "../../assets/rightarrow.svg";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image37 from '../../assets/profile1.svg'
import image38 from '../../assets/profile2.svg'
import image39 from '../../assets/profile3.svg'

const Crousele = () => {
  const carouselRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCards, setTotalCards] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 690 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 689, min: 0 },
      items: 1,
    },
  };
  const clientData=[
    {
      id:1,
      profileImage: image37,
      profileName:"Amands Bell",
      profileJob:"Product Designer"
    },
    {
      id:2,
      profileImage:image38,
      profileName:"Robert Smith",
      profileJob:"HR Manager"
    },
    {
      id:3,
      profileImage:image39,
      profileName:"Jack Jaction",
      profileJob:"Intreprator"
    },
    {
      id:4,
      profileImage: image37,
      profileName:"Amands Bell",
      profileJob:"Product Designer"
    },
    {
      id:5,
      profileImage:image38,
      profileName:"Robert Smith",
      profileJob:"HR Manager"
    },
    {
      id:6,
      profileImage:image39,
      profileName:"Jack Jaction",
      profileJob:"Intreprator"
    },
    
  ];

  const client = clientData.map(item => (
    <Card key={item.id} image={item.profileImage} name={item.profileName} job={item.profileJob} />
  ));

  useEffect(() => {
    if (carouselRef.current) {
      const { currentSlide, slidesToShow, totalItems } = carouselRef.current.state;
      const totalPages = Math.ceil(totalItems / slidesToShow);
      setCurrentPage(Math.ceil((currentSlide + 1) / slidesToShow));
      setTotalPages(totalPages);
      setTotalCards(totalItems);
    }
  }, [clientData, currentPage]);

  const handleLeftButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleRightButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <>
      <div className="what_client">
        <div className="what_top">
          <p className="what_paragraph">
            What our client say about <span>Pacific Hunt</span>
          </p>
          <div className="what_buttons">
            <button className="what_left" onClick={handleLeftButtonClick}>
              <img src={image35} alt="" />
            </button>
            {/* <div className="page_outof">
              <span className="page">{currentPage}</span>/{totalPages}
            </div> */}
            <button className="what_right" onClick={handleRightButtonClick}>
              <img src={image36} alt="" />
            </button>
          </div>
        </div>
        
        <Carousel ref={carouselRef} 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
         
        className="card_container">
          {client}
        </Carousel>
      </div>
    </>
  );
};

export default Crousele;
