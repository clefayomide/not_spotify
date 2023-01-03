import React from "react";
import { Paragraph } from "../typography/Typography";
import Tool from "./Tool";

const Control = (props: {
  image: any;
  title: string;
  artist: string;
  play: any;
  isPlaying: boolean;
  pause: any;
  set_current_track_index: any;
  audio: object;
  progress?: number;
  current_song: object;
}) => {
  return (
    <section className="flex items-center w-full h-24 bg-[#181818]  absolute bottom-0">
      <div className=" pl-5 pr-5 flex justify-between items-center w-full">
        <section className="w-[28%] flex gap-5 items-center">
          <img src={props.image} alt="song cover" className="h-16 w-20" />
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
          set_current_track_index={props.set_current_track_index}
          audio={props.audio}
          progress={props.progress}
          current_song={props.current_song}
        />

        <section className="w-[28%]"></section>
      </div>
    </section>
  );
};

export default Control;
