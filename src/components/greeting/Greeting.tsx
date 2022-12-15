import React from "react";
import { Heading } from "../typography/Typography";

const Greeting = () => {
  const hour_of_the_day: number = new Date().getHours();
  const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
  const greet_user = () => {
    if (hour_of_the_day < 12) return greetings[0];
    else if (hour_of_the_day < 18) return greetings[1];
    else return greetings[2];
  };
  return <Heading text={greet_user()} size="text-[24px]" />;
};

export default Greeting;
