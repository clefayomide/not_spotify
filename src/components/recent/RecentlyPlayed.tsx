import { useState, memo } from "react";
import PlayButton from "../button/PlayButton";
import PauseButton from "../button/PauseButton";

const RecentlyPlayed = memo(
  (props: {
    image: any;
    title: string;
    play: any;
    pause: any;
    isPlaying: boolean;
  }) => {
    const [show_play_button, set_show_play_button] = useState(false);

    return (
      <div
        className="w-full md:w-[48.8%] h-[55px] bg-light_dark hover:bg-lighter_dark rounded relative"
        onMouseEnter={() => set_show_play_button(true)}
        onMouseLeave={() => set_show_play_button(false)}
      >
        <div className="flex h-full gap-5 items-center">
          <img
            src={props.image}
            alt={props.title}
            className="h-full w-[60px] object-cover"
          />
          <div className="font-Gotham_Light font-bold text-sm">
            {props.title}
          </div>
        </div>
        <div className="absolute top-[8px] right-10">
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
  }
);

export default RecentlyPlayed;
