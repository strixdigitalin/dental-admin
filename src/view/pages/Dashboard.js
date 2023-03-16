import { makeStyles, Typography } from "@material-ui/core";
import { Person as PersonIcon } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../API/dashboard";
import { BACKEND_URL } from "../utils/formatDate";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardCont: {
    padding: "3rem",
    display: "flex",
    rowGap: "1rem",
    columnGap: "1rem",
    background: "#EBD9D8",
  },
}));

const useCardStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    background: theme.palette.primary.main,
    padding: "1.25rem 1rem",
    display: "flex",
    flex: 1,
    columnGap: "1.2rem",
    borderRadius: 6,
    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.25)",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    rowGap: "0.5rem",
  },
}));

const Card = ({ icon: Icon, label, number }) => {
  const classes = useCardStyles();

  return (
    <div className={classes.root}>
      <Icon style={{ fontSize: "2.5rem" }} />
      <div className={classes.body}>
        <Typography variant="h5" component="span" style={{ margin: "auto 0" }}>
          {label}
        </Typography>
        <Typography variant="h2" component="span" style={{ marginTop: "auto" }}>
          {number}
        </Typography>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [LandingData, setLandingData] = useState({
    Question: 0,
    Packages: 0,
    users: 0,
  });
  useEffect(async () => {
    const { data } = await axios.get(`${BACKEND_URL}/api/v1/landing/all`);
    getDashboardData((res) => {
      setLandingData(res);
      console.log(res, "<<<newapi");
    });
    // console.log(data, "<<<landing");
    // setLandingData(data);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardCont}>
        <div
          style={{
            background: "#EBD9D8",
            width: "100%",
            padding: "15px",
            textAlign: "center",
          }}
        >
          Welcome to Admin Panel
        </div>
        {/* <Card
          icon={PersonIcon}
          label="Number of categories"
          number={LandingData?.total_category}
        />
        <Card
          icon={PersonIcon}
          label="Question in questions"
          number={LandingData?.total_question}
        />
        <Card
          icon={PersonIcon}
          label="Number of test"
          number={LandingData?.total_test}
        /> */}
        {/* <div></div> */}

        {/* <Card icon={PersonIcon} label="Active Users" number={0} /> */}
      </div>
      <div className={classes.cardCont}>
        <Card
          icon={PersonIcon}
          label="Number of Test available"
          number={LandingData?.total_packages}
        />
        <Card
          icon={PersonIcon}
          label="Number of Subjects"
          number={LandingData?.total_subject}
        />
        {/* <div></div> */}

        {/* <Card icon={PersonIcon} label="Active Users" number={0} /> */}
      </div>
    </div>
  );
}
