import React from "react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import './AppCalender.css'

export default function AppCalender() {
    let date = new Date();

    let [value, setValue] = React.useState(parseDate(date.toISOString().split('T')[0]));


    return (
        <div className="cal-cont h-80">
            <Calendar
                aria-label="Date (Controlled)"
                value={value}
                onChange={setValue}
                className="h-full text-md calender-container"
            />
        </div>
    );


}
