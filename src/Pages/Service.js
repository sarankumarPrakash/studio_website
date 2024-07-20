import React from "react";
import "./Services.css";
import { Button, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image1a from "../Images/header-image.jpg";
import Image1b from "../Images/background.jpg";
import Image2a from "../Images/header-image.jpg";
import Image2b from "../Images/background.jpg";

import { ImageCard } from "../Components/ImageCard";

const servicesData = [
  {
    title: "Marriage Events",
    subTitle: "",
    description:
      "Embarking on your wedding journey is a joyous occasion. At Mithun Studio's, we provide professional consultation services to guide you through every stage of your marriage event. Whether you're planning an intimate ceremony or a grand celebration, our experts offer personalized advice on capturing the essence of your special day with precision and artistry.",
    image: Image1a,
    type: "left",
  },
  {
    title: "Corporate Events",
    subTitle: "",
    description:
      "Navigating corporate events requires a keen eye for detail and professionalism. Our skilled photographers specialize in transforming corporate gatherings into memorable experiences. From conferences to gala dinners, we provide comprehensive photography services tailored to showcase your corporate identity and event highlights.",
    image: Image2a,
    type: "right",
  },
  {
    title: "Puberty Events",
    subTitle: "",
    description:
      "Celebrating milestones like puberty ceremonies deserves thoughtful documentation. At Mithun Studio , we bring expertise in capturing the essence and significance of these cultural events. With a blend of cultural sensitivity and artistic flair, our photographers ensure your puberty event is beautifully preserved for generations to come.",
    image: Image1a,
    type: "left",
  },
  {
    title: "Baby Shower Events",
    subTitle: "",
    description:
      "Welcoming a new life into the world is a precious moment. Our photographers specialize in capturing the joy and anticipation of baby shower events. Whether it's a cozy gathering or a themed celebration, we focus on creating timeless images that reflect the love and excitement surrounding the arrival of your little one.",
    image: Image1a,
    type: "right",
  },

  {
    title: "Outdoor Shoots",
    subTitle: "",
    description:
      "Embrace the beauty of nature with our outdoor photography services at [Your Photography Studio]. Whether you're planning a romantic engagement session, family portraits in the park, or capturing adventurous moments in scenic locations, our photographers excel in harnessing natural light and surroundings to create stunning images that reflect your unique story.",
    image: Image1a,
    type: "left",
  },
];

const Service = () => {
  return (
    <div className="main-service">
      <div className="head-services">
        <h3>Capturing Creativity with Precision</h3>
        <p>
          At Mithun Studio, we excel in transforming visions into captivating
          images. With a passion for photography and a commitment to excellence,
          our dedicated team is here to support your creative journey from
          concept to final shot. Whether you're planning a portrait session,
          commercial project, or special event, trust us to deliver professional
          expertise and personalized service every step of the way.
        </p>
        <div>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            style={{
              textTransform: "capitalize",
              backgroundColor: "#FA5A15",
              fontWeight: "bold",
            }}
          >
            Schedule a consultation
          </Button>
        </div>
      </div>
      <div className="content-services">
        {servicesData?.map((item, idx) => (
          <ImageCard data={item} key={idx} />
        ))}
      </div>

      <div>
        <div className="head-services">
          <h2> By the Numbers</h2>
          <p style={{ width: "50%" }}>
            At Mithun Studio, our commitment to quality and reliability is
            evident in every project we undertake. We are dedicated to
            delivering industry-leading photography services that capture your
            most cherished moments with precision and artistry.
          </p>
          <div className="rate">
            <div>
              <h1>96%</h1>
              <p>
                of our clients rate their experience with mithun studio as
                exceptional
              </p>
            </div>
            <div>
              <Divider />
            </div>
            <div>
              <h1>99.8%</h1>
              <p>project completion rate</p>
            </div>
            <div>
              <h1>5,000+</h1>
              <p>successful Events Completed</p>
            </div>
            <div>
              <h1>85%</h1>
              <p>client growth year-over-year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
