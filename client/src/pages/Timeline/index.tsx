import Progress from "../../components/Progress";
import HighlightCard from "../../components/HighlightCard";

import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";

const TimelinePage = () => {
  return (
    <div>
      <Navbar />
      <Heading title="Thống kê" />
      <Grid container direction="column" style={{ height: "100vh" }}>
        <Grid item md={4}>
          <HighlightCard />
        </Grid>
        <Grid item md={4}>
          <HighlightCard />
        </Grid>
        <Grid item md={4}>
          <HighlightCard />
        </Grid>
        <Grid xs={12} item style={{ overflow: "auto" }}>
          <Progress />
        </Grid>
      </Grid>
    </div>
  );
};

export default TimelinePage;
