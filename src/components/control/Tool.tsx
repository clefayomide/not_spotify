import React from "react";
import PauseButton from "../button/PauseButton";
import PlayButton from "../button/PlayButton";
import { tracks } from "../../tracks";

const Tool = (props: {
  play: any;
  isPlaying: boolean;
  pause: any;
  set_current_track_index: any;
}) => {
  const handlePrevious = () => {
    // props.pause();
    props.set_current_track_index((prev: number) => {
      prev === 0 ? tracks.length - 1 : prev - 1;
    });
    // props.play();
  };

  const handleNext = () => {
    props.pause();
    props.set_current_track_index((prev: number) => {
      prev + 1;
      //   prev === tracks.length - 1 ? 0 : prev + 1;
    });
    // props.play();
  };

  return (
    <div className="w-[40%] flex gap-4 flex-col">
      <section className="flex gap-5 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-skip-start-fill"
          viewBox="0 0 16 16"
          //   onClick={handlePrevious}
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
          className="bi bi-skip-end-fill"
          viewBox="0 0 16 16"
          //   onClick={handleNext}
        >
          <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
        </svg>
      </section>
      <div className="w-full h-1 bg-white after:w-full after:h-2 after:bg-red-500 after:content-['']"></div>
    </div>
  );
};

export default Tool;
