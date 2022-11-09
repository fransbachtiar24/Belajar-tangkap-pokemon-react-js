import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import LogoPokemon from "../../assets/img/pokeball-logo-DC23868CA1-seeklogo.com-removebg-preview.png";
import NavbarPoke from "../../components/navbar";
import Pokemon from "../card/Pokemon";

import "../../assets/css/styleku.css";
function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Go", "bulbasaur", "wartortle", "butterfree"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 150,
      showCursor: false,
      smartBackspace: true,
      loop: true,
    });
  }, [el]);

  return (
    <>
      <div id="bg-pokemon">
        <div className="content">
          <h1>
            Pokemon <span ref={el}></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, eum
            nesciunt! Non hic, veniam molestiae quis praesentium quos
            repellendus distinctio provident fugit facere doloribus omnis
            voluptate porro! Qui, ipsa eos.
          </p>
          <button className="btn-pokemon">
            Pokemon Go <img src={LogoPokemon} alt="gagal memuat" width="8px" />
          </button>
        </div>
      </div>
      <NavbarPoke />
      <Pokemon />
    </>
  );
}

export default Home;
