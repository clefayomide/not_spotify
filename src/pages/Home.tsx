import gsap from "gsap";
import logo from "../assets/logo.svg";
import { useRef, useLayoutEffect } from "react";
import Nav from "../components/nav/Nav";
import { recently_played } from "../components/recent/data";
import RecentlyPlayedCard from "../components/recent/RecentlyPlayed";
import { v4 as uuidv4 } from "uuid";
import Greeting from "../components/greeting/Greeting";
import Card from "../components/card/Card";
import wrapped from "../assets/2022_wrapped.webp";
import nigerian_pop from "../assets/nigerian_pop.webp";
import pop_mix from "../assets/onerepublic.jpeg";
import rap_mix from "../assets/rap_mix.png";
import Curated from "../components/curated/Curated";
import khalid from "../assets/this_is_khalid.jpeg";
import giveon from "../assets/giveon.jpeg";
import show_dem_camp from "../assets/show_dem_camp.jpeg";
import wizkid from "../assets/wizkid.jpeg";

const Home = () => {
  const homePageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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
          <section className="overflow-y-scroll scrollbar-thumb-lighter_dark scrollbar-thin  pl-5 pr-5 pb-5 h-full w-full lg:w-[60%] bg-gradient-to-t from-black via-black to-light_dark">
            <section className="mt-20">
              <Greeting />
              <div className="flex flex-wrap mt-5 gap-3">
                {recently_played.map(({ image, title }) => (
                  <RecentlyPlayedCard
                    image={image}
                    title={title}
                    key={uuidv4()}
                  />
                ))}
              </div>
            </section>

            {/* curated for you */}
            <Curated
              header_text="Your 2022 Wrapped"
              paragraph_text="Play your top artists, tracks, and genres of the year "
            >
              <Card
                header_text={"Your Top Songs 2022"}
                paragrapgh_text={
                  "Spotify Wrapped presents you the song the year brought your way"
                }
                image={wrapped}
                eclipse={true}
              />
              <Card
                header_text={"Nigerian Pop Mix"}
                paragrapgh_text={"Nigerian Pop music picked just for you"}
                image={nigerian_pop}
              />
              <Card
                header_text={"Pop Mix"}
                paragrapgh_text={"OneRepublic, Train, benny blanco and more"}
                image={pop_mix}
              />
              <Card
                header_text={"Rap Mix"}
                paragrapgh_text={"Rap music picked just for you"}
                image={rap_mix}
              />
            </Curated>

            <Curated
              header_text="Release Radar"
              paragraph_text="Explore newly release songs"
            >
              <Card
                header_text={"Your Top Songs 2022"}
                paragrapgh_text={
                  "Spotify Wrapped presents you the song the year brought your way"
                }
                image={giveon}
                eclipse={true}
              />
              <Card
                header_text={"Nigerian Pop Mix"}
                paragrapgh_text={"Nigerian Pop music picked just for you"}
                image={show_dem_camp}
              />
              <Card
                header_text={"Pop Mix"}
                paragrapgh_text={"OneRepublic, Train, benny blanco and more"}
                image={khalid}
              />
              <Card
                header_text={"Rap Mix"}
                paragrapgh_text={"Rap music picked just for you"}
                image={wizkid}
              />
            </Curated>
          </section>

          {/* friend activity */}
          <section className="hidden lg:block h-full w-[20%]"></section>
        </div>
      </main>
    </div>
  );
};

export default Home;
