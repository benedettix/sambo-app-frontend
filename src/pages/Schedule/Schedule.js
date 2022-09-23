import React from "react";
import "./Schedule.scss";

import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import Directions from "../../components/Directions/Directions";

let date = new Date();
date =
  date.getFullYear() + "-" + 0 + (date.getMonth() + 1) + "-" + date.getDate();

const schedulerData = [
  {
    startDate: date + "T19:30",
    endDate: date + "T21:00",
    title: "Za stariju ekipu svaki radni dan",
  },
  {
    startDate: date + "T18:00",
    endDate: date + "T19:30",
    title: "Za Pocetnike: ponedeljak, sreda, petak",
  },
];

function Schedule() {
  return (
    <>
      <Directions direction={"Raspored"} />
      <div className="container">
        <h3 className="mt-3 mb-3">Raspored Plana Obuke</h3>
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={date} />
            <DayView startDayHour={18} endDayHour={22} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    </>
  );
}

export default Schedule;
