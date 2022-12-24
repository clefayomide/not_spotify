import gsap from "gsap";
import logo from "../assets/logo.svg";
import { useRef, useLayoutEffect } from "react";
import Nav from "../components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/content-area/Home";

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
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </section>

          {/* friend activity */}
          <section className="hidden lg:block h-full w-[20%]"></section>
        </div>
      </main>
    </div>
  );
};

export default Home;
