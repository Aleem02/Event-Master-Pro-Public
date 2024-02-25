import React from "react";
import hero from "./hero.png";

const Hero = () => {
  return (
    <main className="hero">
      <section>
        <h1>
          Host, Connect,
          <br /> Celeberate: Your <br /> Events, Our Platform!
        </h1>
        <p>
          the ultimate tool for flawless events. Simplify planning, delight
          guests, and exceed expectations effortlessly. Say hello to stress-free
          success.
        </p>
        <button>
          <a
            href="#available-events"
            style={{ textDecoration: "none", color: "white" }}
          >
            Explore Events..
          </a>
        </button>
      </section>
      <img src={hero} alt="hero" width={400} height={400} />
    </main>
  );
};

export default Hero;
