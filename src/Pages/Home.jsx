import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import "./Home.css";


import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
  return (
    <div className="home-main">
      <div className="home">
        <div className="title">
          <div className="title-text">
            <p className="text-title">Experience the Art of Photography </p>
            <p className="title-desc">
              <span className="text">with</span>
              <span className="text-mithun">Mithun's Studio</span>
            </p>
          </div>
          <div>
            <p className="text-desc">
              Top-Quality Photography and Expert Services for Every Moment
            </p>
          </div>
          <div className="text-button">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<ChevronRightIcon />} style={{textTransform:'capitalize',fontWeight:'700'}}>
                Start Exploring
              </Button>
              <Button variant="contained"  style={{textTransform:'capitalize',fontWeight:'700'}}>
               Contact Our Team
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
