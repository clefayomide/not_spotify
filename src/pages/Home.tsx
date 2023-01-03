import gsap from "gsap";
import logo from "../assets/logo.svg";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/content-area/Home";
import { tracks } from "../tracks";
import Control from "../components/control/Control";

const Home = () => {
  const homePageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [current_track_index, set_current_track_index] = useState(0);
  const [all_song, set_all_song] = useState(tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current_song, set_current_song] = useState<{
    title: string;
    artist: string;
    cover_image: any;
    track_link: string;
    progress?: number;
    length?: number;
  }>(all_song[current_track_index]);
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    return () => {
      audio.current != null && audio.current.pause();
    };
  }, []);

  useEffect(() => {
    isPlaying ? audio.current?.play() : audio.current?.pause();
  }, [isPlaying]);

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const on_time_update = () => {
    if (audio.current != null) {
      const duration = audio.current?.duration;
      const current_time = audio.current?.currentTime;

      set_current_song({
        ...current_song,
        progress: (current_time / duration) * 100,
        length: duration,
      });
    }
  };

  const on_ended = () => {
    set_current_track_index(current_track_index + 1);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(logoRef.current, {
      duration: 2,
      scale: 0.5,
      delay: 2,
    });

    tl.to(logoRef.current, { scale: 0 });

    tl.to(logoRef.current, { duration: 0.1, display: "none" });
    tl.to(homePageRef.current, { display: "block" });
  }, []);
  return (
    <div className="h-full w-full flex justify-center overflow-hidden items-center">
      <div ref={logoRef} className="w-[250px]">
        <img src={logo} alt="Sportify" />
        <div className="text-white font-Gotham_Bold text-xs text-right">
          Music for Everyone
        </div>
      </div>
      <main
        className="text-white overflow-hidden hidden w-full h-full"
        ref={homePageRef}
      >
        <div className="flex justify-between h-full">
          {/* side nav */}
          <section className="hidden lg:block h-full w-[20%]">
            <Nav />
          </section>

          {/* content area */}
          <section className="overflow-y-scroll scrollbar-thumb-lighter_dark scrollbar-thin  pl-5 pr-5 pb-36 h-full w-full lg:w-[60%] bg-gradient-to-t from-black via-black to-light_dark">
            <audio
              src={current_song.track_link}
              ref={audio}
              onTimeUpdate={on_time_update}
              onEnded={on_ended}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage isPlaying={isPlaying} play={play} pause={pause} />
                }
              />
            </Routes>
          </section>

          {/* friend activity */}
          <section className="hidden lg:block h-full w-[20%]"></section>
        </div>
        <Control
          image={current_song.cover_image}
          progress={current_song.progress}
          title={current_song.title}
          artist={current_song.artist}
          play={play}
          isPlaying={isPlaying}
          pause={pause}
          set_current_track_index={set_current_track_index}
          audio={audio}
          current_song={current_song}
        />
      </main>
    </div>
  );
};

export default Home;
