import React from "react";

export const Heading = (props: {
  text: string;
  size?: string;
  color?: string;
  classNames?: string;
}) => {
  return (
    <h4
      className={`${props.size ? props.size : "text-base"} ${
        props.color ? props.color : "text-white"
      } font-Gotham_Bold`}
    >
      {props.text}
    </h4>
  );
};

export const Paragraph = (props: {
  text: string;
  size?: string;
  color?: string;
  classNames?: string;
}) => {
  return (
    <p
      className={`${props.size ? props.size : "text-sm"} ${
        props.color ? props.color : "text-gray-500"
      } font-Gotham_Light font-bold ${props.classNames}`}
    >
      {props.text}
    </p>
  );
};
