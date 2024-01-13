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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          officia a commodi amet accusamus qui. Perspiciatis, sed ducimus.
          Suscipit ut, iste aperiam labore perferendis iusto eum aut? Aperiam,
          nemo beatae.
        </p>
        <button>Explore More..</button>
      </section>
      <img src={hero} alt="hero" width={400} height={400} />
    </main>
  );
};

export default Hero;
