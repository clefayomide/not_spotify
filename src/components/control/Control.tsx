import React from "react";
import { Paragraph } from "../typography/Typography";
import Volume from "../volume/Volume";
import Tool from "./Tool";

export interface Songs {
  title: string;
  artist: string;
  cover_image: any;
  track_link: string;
}

const Control = (props: {
  image: any;
  title: string;
  artist: string;
  play: Function;
  isPlaying: boolean;
  set_is_playing: React.Dispatch<React.SetStateAction<boolean>>;
  pause: Function;
  audio: any;
  progress?: number;
  current_song: any;
  all_song: Songs[];
  set_current_song: React.Dispatch<React.SetStateAction<Songs>>;
}) => {
  const handle_vol = (e: any) => {
    const max = e.target.max;
    props.audio.current.volume = e.target.value / max;
  };

  return (
    <section className="flex items-center w-full 2xl:w-[1500px] h-24 bg-[#181818]  absolute bottom-0">
      <div className=" pl-5 pr-5 flex justify-between flex-wrap items-center w-full">
        <section className="w-[28%] flex gap-2 md:gap-5 items-center">
          <img
            src={props.image}
            alt="song cover"
            className="h-10 w-14 md:h-16 md:w-20 object-cover"
          />
          <div>
            <Paragraph text={props.title} size="text-xs md:text-md" color="text-white" />
            <Paragraph
              text={props.artist}
              size="text-xs"
              classNames="font-Gotham_light font-light"
            />
          </div>
        </section>

        <Tool
          play={props.play}
          isPlaying={props.isPlaying}
          pause={props.pause}
          audio={props.audio}
          progress={props.progress}
          current_song={props.current_song}
          all_song={props.all_song}
          set_current_song={props.set_current_song}
          set_is_playing={props.set_is_playing}
        />

        <Volume handle_vol={handle_vol} audio={props.audio} />
      </div>
    </section>
  );
};

export default Control;
