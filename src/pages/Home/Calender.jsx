import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calender() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState({
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        seconds: new Date().getSeconds(),
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setTime({
                minutes: date.getMinutes(),
                hours: date.getHours(),
                seconds: date.getSeconds(),
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const convertToTwoDigit = (number) => {
        return number.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
        });
    };
    return (
        <div className="bg-slate-100 h-screen">
            <div className="text-2xl">
                <span>{convertToTwoDigit(time.hours)}:</span>
                <span>{convertToTwoDigit(time.minutes)}:</span>
                <span>{convertToTwoDigit(time.seconds)}</span>
                <span>{time.hours >= 12 ? " PM" : " AM"}</span>
            </div>
            <Calendar
                className="bg-white p-3 text-center rounded-3xl border-0 outline-0"
                value={date}
            />
        </div>
    );
}
