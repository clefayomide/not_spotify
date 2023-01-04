import React from "react";
import { Paragraph } from "../typography/Typography";
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
  audio: object;
  progress?: number;
  current_song: any;
  all_song: Songs[];
  set_current_song: React.Dispatch<React.SetStateAction<Songs>>;
}) => {
  return (
    <section className="flex items-center w-full h-24 bg-[#181818]  absolute bottom-0">
      <div className=" pl-5 pr-5 flex justify-between items-center w-full">
        <section className="w-[28%] flex gap-5 items-center">
          <img src={props.image} alt="song cover" className="h-16 w-20 object-cover" />
          <div>
            <Paragraph text={props.title} size="text-md" color="text-white" />
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

        <section className="w-[28%]"></section>
      </div>
    </section>
  );
};

export default Control;
