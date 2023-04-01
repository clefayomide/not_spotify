import gsap from "gsap";
import logo from "../assets/logo.svg";
import { useRef, useLayoutEffect, useState, useEffect, memo } from "react";
import Nav from "../components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/content-area/Home";
import { tracks } from "../tracks";
import Control from "../components/control/Control";
import { Heading, Paragraph } from "../components/typography/Typography";
import User from "../components/user-rounded/User";
import Skeleton from "../components/skeleton/Skeleton";
import Regular from "../components/button/Regular";

const Home = memo(() => {
  const homePageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [all_song, set_all_song] = useState(tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current_song, set_current_song] = useState<{
    title: string;
    artist: string;
    cover_image: any;
    track_link: string;
    progress?: number;
    length?: number;
  }>(all_song[0]);
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    return () => {
      audio.current != null && audio.current.pause();
    };
  }, []);

  useEffect(() => {
    isPlaying ? audio.current?.play() : audio.current?.pause();
  }, [isPlaying, current_song]);

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
        progress: Math.round((current_time / duration) * 100),
        length: duration,
      });
    }
  };

  const on_ended = () => {
    const current_song_index = all_song.findIndex(
      (song) => song.title === current_song.title
    );
    if (current_song_index === all_song.length - 1) {
      set_current_song(all_song[0]);
    } else {
      set_current_song(all_song[current_song_index + 1]);
    }
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
    <div className="h-full w-full 2xl:w-[1500px] m-auto flex justify-center overflow-hidden items-center">
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
          <section className="hidden lg:block h-full w-[20%] pl-3 pb-3 pr-3 pt-4 lg:pb-36 xl:pb-3 overflow-y-scroll scrollbar-thumb-lighter_dark scrollbar-thin">
            <section className="flex justify-between items-center">
              <Heading text="Friends Activity" color="text-gray-500" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-plus text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fillRule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </section>

            <Paragraph
              classNames="mt-10"
              text="Let friends and followers on Spotify see what you're listening to."
            />

            <section className="mt-5 flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <User />
                <Skeleton />
              </div>
              <div className="flex gap-3 items-center">
                <User />
                <Skeleton />
              </div>
              <div className="flex gap-3 items-center">
                <User />
                <Skeleton />
              </div>
            </section>

            <Paragraph
              classNames="mt-5"
              text="Go to Settings > Social and enable 'Share my listening activity of Spotify.' You can turn this off at any time."
            />
            <div className="flex justify-center mt-5">
              <Regular innerText="SETTINGS" />
            </div>
          </section>
        </div>
        <Control
          image={current_song.cover_image}
          progress={current_song.progress}
          title={current_song.title}
          artist={current_song.artist}
          play={play}
          isPlaying={isPlaying}
          set_is_playing={setIsPlaying}
          pause={pause}
          audio={audio}
          current_song={current_song}
          all_song={all_song}
          set_current_song={set_current_song}
        />
      </main>
    </div>
  );
});

export default Home;
