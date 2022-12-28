import React, { useState } from "react";
import PlayButton from "../button/PlayButton";
import PauseButton from "../button/PauseButton";
import { Heading, Paragraph } from "../typography/Typography";

const Card = (props: {
  image: any;
  header_text: string;
  paragrapgh_text: string;
  eclipse?: boolean;
  isPlaying: boolean;
  play: any;
  pause: any;
}) => {
  const [show_play_button, set_show_play_button] = useState(false);
  return (
    <div
      className="w-[48%] md:w-[23.5%] lg:w-[24%] flex-wrap relative ipad_max:h-[230px] ipad_min:h-[260px] lg:h-[260px] xl:h-[240px] p-3 bg-light_dark hover:bg-lighter_dark rounded"
      onMouseEnter={() => set_show_play_button(true)}
      onMouseLeave={() => set_show_play_button(false)}
    >
      <img
        src={props.image}
        alt={props.header_text}
        className="rounded h-32 w-full object-cover"
      />
      <div className="mt-3">
        <Heading
          text={`${
            props.eclipse
              ? `${props.header_text.substring(0, 15)}...`
              : props.header_text
          }`}
        />
        <Paragraph
          text={`${props.paragrapgh_text.substring(0, 48)}...`}
          size="text-xs"
          classNames="mt-3 font-bold"
        />
      </div>
      <div className="absolute top-24 right-8">
        {props.isPlaying ? (
          <PauseButton
            backgroundColor="bg-lime_green"
            color="text-black"
            show={show_play_button}
            pause={props.pause}
          />
        ) : (
          <PlayButton
            backgroundColor="bg-lime_green"
            color="text-black"
            show={show_play_button}
            play={props.play}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
