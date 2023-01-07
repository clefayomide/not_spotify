import React, { useRef } from "react";
import PauseButton from "../button/PauseButton";
import PlayButton from "../button/PlayButton";
import { Songs } from "./Control";

const Tool = (props: {
  play: Function;
  isPlaying: boolean;
  pause: Function;
  set_is_playing: React.Dispatch<React.SetStateAction<boolean>>;
  audio: any;
  progress?: number;
  current_song: any;
  all_song: Songs[];
  set_current_song: React.Dispatch<React.SetStateAction<Songs>>;
}) => {
  const seek_container = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    const current_song_index = props.all_song.findIndex(
      (song) => song.title == props.current_song?.title
    );
    if (current_song_index == 0) {
      props.set_current_song(props.all_song[props.all_song.length - 1]);
    } else {
      props.set_current_song(props.all_song[current_song_index - 1]);
    }
    props.audio.current.currentTime = 0;
  };

  const handleNext = () => {
    const current_song_index = props.all_song.findIndex(
      (song) => song.title == props.current_song.title
    );
    if (current_song_index == props.all_song.length - 1) {
      props.set_current_song(props.all_song[0]);
    } else {
      props.set_current_song(props.all_song[current_song_index + 1]);
    }
    props.audio.current.currentTime = 0;
    props.set_is_playing(true);
  };

  const handleSeek = (e: any) => {
    const width = seek_container.current?.clientWidth;
    console.log(e);
    const offset_x = e.nativeEvent.offsetX;
    if (width != null) {
      const progress = (offset_x / width) * 100;
      const seek_time = (progress / 100) * props.current_song.length;
      props.audio.current.currentTime = seek_time;
    }
  };

  return (
    <div className="w-[40%] flex gap-4 flex-col">
      <section className="flex gap-5 justify-center items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-skip-start-fill cursor-pointer"
          viewBox="0 0 16 16"
          onClick={handlePrevious}
        >
          <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" />
        </svg>

        {props.isPlaying ? (
          <PauseButton
            backgroundColor="bg-white"
            color="text-black"
            pause={props.pause}
          />
        ) : (
          <PlayButton
            backgroundColor="bg-white"
            color="text-black"
            play={props.play}
          />
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-skip-end-fill cursor-pointer"
          viewBox="0 0 16 16"
          onClick={handleNext}
        >
          <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
        </svg>
      </section>
      <div
        className="w-full h-1 bg-white relative cursor-pointer"
        onClick={handleSeek}
        ref={seek_container}
      >
        <div
          className={`h-full bg-green-500`}
          style={{
            width: `${props.progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tool;
