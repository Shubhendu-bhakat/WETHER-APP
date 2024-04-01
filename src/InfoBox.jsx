import "./infoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/18/misty-plank.JPG?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF6ZSUyMHdldGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URl =
    "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=";
  const COLD_URL =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=1024x1024&w=is&k=20&c=A_D48BLCy76ux8guBDeYxk5c8i8WqWvQOcNVlFKOGk4=";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="cardCont">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URl
                : COLD_URL
            }
            title={info.title }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;&nbsp;
              {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : < AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p> Temperature = {info.temp}&deg;C </p>
              <p> Maximum Temperature = {info.tempMax}&deg;C </p>
              <p> Humidity = {info.humidity} </p>
              <p>Weather = {info.weather}</p>
              <p>
                The wether is {info.weather} and feels like{" "}
                <i> {info.feelslike} </i>{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
