import Heading from "../Heading";
import AGU from "/images/AGU.png";
import SNU from "/images/SNU.png";
import VNU from "/images/VNU.png";
import KOICA from "/images/KOICA.png";
import { Grid } from "@mui/material";

const Partners = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" container mb-[5rem]">
        <Heading title="partners" />
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <img
              src={KOICA}
              alt="KOICA"
              className="w-full h-auto max-w-[200px]"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <img src={SNU} alt="SNU" className="w-full h-auto max-w-[140px]" />
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <img src={VNU} alt="VNU" className="w-full h-auto max-w-[200px]" />
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            display="flex"
            justifyContent="center"
          >
            <img src={AGU} alt="AGU" className="w-full h-auto max-w-[140px]" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Partners;
