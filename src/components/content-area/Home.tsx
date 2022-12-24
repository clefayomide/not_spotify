import React from "react";
import Curated from "../curated/Curated";
import Greeting from "../greeting/Greeting";
import Card from "../card/Card";
import { recently_played } from "../recent/data";
import RecentlyPlayedCard from "../recent/RecentlyPlayed";
import wrapped from "../../assets/2022_wrapped.webp";
import nigerian_pop from "../../assets/nigerian_pop.webp";
import pop_mix from "../../assets/onerepublic.jpeg";
import rap_mix from "../../assets/rap_mix.png";
import khalid from "../../assets/this_is_khalid.jpeg";
import giveon from "../../assets/giveon.jpeg";
import show_dem_camp from "../../assets/show_dem_camp.jpeg";
import wizkid from "../../assets/wizkid.jpeg";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <div>
      <section className="mt-20">
        <Greeting />
        <div className="flex flex-wrap mt-5 gap-3">
          {recently_played.map(({ image, title }) => (
            <RecentlyPlayedCard image={image} title={title} key={uuidv4()} />
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
    </div>
  );
};

export default Home;
