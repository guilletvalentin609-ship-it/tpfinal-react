import React from "react";
import { Link } from "react-router-dom";
import style from "./Hero.module.css";
import Button from "../../ui/Button/Button";

function Hero() {
  return (
    <div className={style.hero}>
      <img
        className={style.hero__img}
        src="/images/hero/hero1.jpg"
        alt="Imagen de portada de Kamada, almbun Plaga"
      />
      <div className={style.hero__content}>
        <div className={style.hero__text}>
          <h1 className={style.hero__title}>TIENDA MIA</h1>
          <p className={style.hero__subtitle}></p>
        </div>
        <div className={style.hero__buttons}>
          <Button as={Link} to="/eventos" variant="primary">
            Eventos
          </Button>

          <Button as={Link} to="/tienda" variant="secondary">
            Tienda
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
