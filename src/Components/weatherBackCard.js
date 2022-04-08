import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import "../Styles/weatherBackCard.css";

const weatherBackCard = ({ weather, cityInfo }) => {
  const sunrise = new Date(cityInfo.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(cityInfo.sunset * 1000).toLocaleTimeString();

  return (
    <div className="BackCard">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item >
                <Typography>Sunrise: {sunrise}</Typography>
                <Typography>Sunset: {sunset}</Typography>
              </Grid>
            </Grid>
          </Box>

          <Typography>Humidity: {weather.main.humidity}%</Typography>
          <Link to="/">Back</Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default weatherBackCard;
