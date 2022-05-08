import alert from "./images/alert.png";
import calendar from "./images/calender.png";
import checklist from "./images/checklist.png";
import profile from "./images/profile.png";
import page from "./images/page.png";
import arrow from "./images/arrow.png";
import logo from "./images/logo.png";
import "./App.css";
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import clerk from "./images/clerk.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, getJson, toast } from "@mobiscroll/react";
import Events from "./components/Posts/Events";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "", background: "#000" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000" }}
      onClick={onClick}
    />
  );
}

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { type: "month" },
      agenda: { type: "month" },
    };
  }, []);
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   nextArrow: <ChevronRightOutlinedIcon />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  return (
    <>
      {/* ---------------------SideBar------------------------------------------------- */}
      <div className="container">
        <ul className="sidebar">
          <li>
            <span>
              <img id="sidebarlogo" src={logo} alt="" />
            </span>
          </li>
          <li>
            <span>
              <img id="sidebaricon" src={checklist} alt="" />
            </span>
          </li>
          <li>
            <span>
              <img id="sidebaricon" src={calendar} alt="" />
            </span>
          </li>
          <li>
            <span>
              <img id="sidebaricon" src={page} alt="" />
            </span>
          </li>
          <li>
            <span>
              <img id="sidebaricon" src={profile} alt="" />
            </span>
          </li>
          <li>
            <span>
              <img id="sidebaricon" src={alert} alt="" />
            </span>
          </li>

          <span>
            <div className="containerarrow">
              <img id="imagearrow" src={arrow} alt="" />
            </div>
          </span>
        </ul>
        {/* ---------------------Header------------------------------------------------- */}
        <div className="content">
          <div id="dashboard">
            <h2>Dashboard</h2>
          </div>
          <div className="username">
            <span>
              <h4>Hi, Clerk</h4>
            </span>
            <span>
              <img id="profileicon" src={clerk} alt="" />
            </span>
            <span>
              <SettingsOutlinedIcon></SettingsOutlinedIcon>
            </span>
          </div>
          {/* ---------------------Notice------------------------------------------------- */}
          <div className="container2"></div>
          {/* ---------------------Calendar------------------------------------------------- */}
          <div className="container3">
            {/* <h5 id="calheading">Calendar</h5> */}
            {/* <Calendar onChange={onChange} value={value} /> */}
            <Eventcalendar
              theme="material"
              themeVariant="light"
              clickToCreate={false}
              dragToCreate={false}
              dragToMove={false}
              dragToResize={false}
              data={myEvents}
              view={view}
              onEventClick={onEventClick}
            />
          </div>
          {/* ---------------------Events------------------------------------------------- */}
          <div className="container4">
            {/* <Container >
            <h2> Single Item</h2>
            <Slider id="slider" {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </Container> */}
            <Events setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
