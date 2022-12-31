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
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, _] = useState(
    new Audio(tracks[current_track_index].track_link)
  );
  const [current_track_image, set_current_track_image] = useState(
    tracks[current_track_index].cover_image
  );

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, []);

  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
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
          image={current_track_image}
          title={tracks[current_track_index].title}
          artist={tracks[current_track_index].artist}
          play={play}
          isPlaying={isPlaying}
          pause={pause}
          set_current_track_index={set_current_track_index}
        />
      </main>
    </div>
  );
};

export default Home;
