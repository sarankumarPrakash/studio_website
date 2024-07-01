import React from "react";
import {
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import "./Home.css";
import Image from "../Images/camera.webp";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GroupsIcon from "@mui/icons-material/Groups";
import VerifiedIcon from "@mui/icons-material/Verified";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import CycloneIcon from "@mui/icons-material/Cyclone";

// ------------------------------ Default Value ----------------

const sections = [
  {
    heading: "Tailored Photography Solutions",
    text: "Elevate your visual storytelling with ScrewFast's tailored photography solutions. From capturing precious moments to crafting striking compositions, our services are designed to meet your unique needs and exceed your expectations.",
    image: "image1.jpg",
  },
  {
    heading: "Inspiring Portfolios",
    text: "Showcase your artistry with ScrewFast's inspiring portfolios. Display your work in elegant and captivating layouts, allowing visitors to immerse themselves in the beauty of your photographs.",
    image: "image2.jpg",
  },
  {
    heading: "Innovative Editing Tools",
    text: "Unleash your creativity with ScrewFast's innovative editing tools. Enhance your images with precision and flair, turning ordinary shots into extraordinary masterpieces that leave a lasting impression.",
    image: "image3.jpg",
  },
];

const Home = () => {

  const handleClick=(index)=>{
    console.log(index)
  }
  return (
    <div className="home-main">
      <div className="home">
        <div className="title">
          <div className="title-text">
            <h2 className="text-title">Experience the Art of Photography </h2>
            <p className="title-desc">
              <span className="text">with</span>
              <span className="text-mithun">Mithun's Studio</span>
            </p>
          </div>
          <div>
            <p className="text-desc">
              Top-Quality Photography and Expert Services for Every Moment.
            </p>
          </div>
          <div className="text-button">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<ChevronRightIcon />}
                style={{
                  textTransform: "capitalize",
                  fontWeight: "700",
                  backgroundColor: "#FA5A15",
                }}
              >
                Start Exploring
              </Button>
              <Button
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  fontWeight: "700",
                  backgroundColor: "#3F3F46",
                }}
              >
                Contact Our Team
              </Button>
            </Stack>
          </div>
        </div>
      </div>

      {/* ------------------Trusted Clients  --------- */}
      <div className="TrustedClients">
        <div>
          <p className="client-header">
            Capture Your Moments - Frame Your memories
          </p>
        </div>
      </div>

      {/* -------------------Image --------------------- */}
      <div className="image-align">
        <div>
          <img src={Image} className="image-title" />
        </div>
      </div>

      {/* -----------------------Meeting industry demands ------------- */}

      <div className="industry">
        <div className="industry-text">
          <div className="industry-text-left">
            <h2> Capturing Moments Beautifully</h2>
            <p>
              At SnapLens, we understand the unique demands of the photography
              industry. From state-of-the-art gear to expert services, we're
              committed to helping you capture unforgettable moments.
            </p>
          </div>
          <div className="industry-text-right">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div>
                  <h2>
                    <GroupsIcon
                      color="success"
                      sx={{
                        fontSize: "2rem",
                        marginRight: "0.8rem",
                        verticalAlign: "bottom",
                      }}
                    />
                    Passionate Teams
                  </h2>
                  <p>
                    Benefit from our passionate teams who make your vision their
                    priority. Rely on expert advice and stunning results
                    throughout your creative journey.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <h2>
                    <CycloneIcon
                      sx={{
                        fontSize: "2rem",
                        marginRight: "0.8rem",
                        verticalAlign: "bottom",
                      }}
                    />
                    Simplicity and Elegance
                  </h2>
                  <p>
                    Discover elegant and user-friendly solutions with SnapLens's
                    range of photography equipment. Our products simplify your
                    workflow and keep your projects elegant.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <h2>
                    {" "}
                    <DocumentScannerIcon
                      sx={{
                        fontSize: "2rem",
                        marginRight: "0.8rem",
                        verticalAlign: "bottom",
                      }}
                    />
                    Comprehensive Portfolio
                  </h2>
                  <p>
                    Explore effortlessly with SnapLens's extensive portfolio and
                    resources. Seamlessly integrate our tools into your creative
                    process with our comprehensive collection designed for your
                    success.
                  </p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <h2>
                    {" "}
                    <VerifiedIcon
                      sx={{
                        fontSize: "2rem",
                        marginRight: "0.8rem",
                        verticalAlign: "bottom",
                      }}
                    />
                    Client-Centric Approach
                  </h2>
                  <p>
                    Feel the difference with SnapLens's client-centered design —
                    where creativity meets functionality for an exceptional
                    photography experience.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      {/* -------------------------Image Card ---------------------- */}

      <div className="image-card">
        <div className="container">
          <Box sx={{ width: "60%", height: "auto", textAlign: "center" }}>
            <Card sx={{ backgroundColor: "#404040" }}>
            
              <CardContent sx={{width:'50%',margin:'15%'}}>
              <div className="card-text">
                  <h3 >
                    Elevate your visual storytelling with ScrewFast's tailored
                    photography solutions.
                  </h3>
                </div>
                <div>
                  {sections.map((section, index) => (
                    <div key={index} onClick={(index)=>handleClick(index)} className="section-text">
                      <div >
                        <h2 className="card-text">{section.heading}</h2>
                        <h3 className="card-text">{section.text}</h3>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Home;
