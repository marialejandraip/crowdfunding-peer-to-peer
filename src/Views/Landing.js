import React from "react";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";

import port_BD from "../assets/images/birthday.png";

import ProgressBar from "react-bootstrap/ProgressBar";

import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container_land}>
      <div className={styles.image_port}>
        <img src={port_BD}></img>
      </div>
      <div className={styles.container_info_camp}>
        <div className={styles.container_desc_camp}>
          <div className={styles.container_ima_camp}>
            <img src={port_BD}></img>
            <img src={port_BD}></img>
          </div>
          <div className={styles.container_txt_camp}>
            <h4>Nombre Campaña</h4>
            <p>
              Es un hecho establecido hace demasiado tiempo que un lector se
              distraerá con el contenido del texto de un sitio mientras que mira
              su diseño. El punto de usar Lorem Ipsum es que tiene una
              distribución más o menos normal de las letras, al contrario de
              usar textos como por ejemplo
            </p>
          </div>
        </div>
        <div className={styles.container_progress_bar}>
          <ProgressBar variant="success" now={40} />
        </div>
      </div>
      <div className={styles.elementor_afrus}>
        <div
          id="afrus-container-form"
          data-form="Zm9ybS0xNTU0LW9yZ2FuaXphdGlvbi04Nw=="
        ></div>
        <script src="https://my.afrus.app/template/index.js"></script>
      </div>
      <div className={styles.player_video}>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=xn_HoxYZZ40&feature=emb_logo"
          controls={true}
          width="100%"
        />
      </div>
      <div className={styles.player_podcast}>
        <ReactAudioPlayer
          src="https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYWNhc3QuY29tL3RlZC1lbi1lc3Bhbm9s?sa=X&ved=2ahUKEwjelfTEj-PuAhVfioQIHVtNAGIQjs4CKAB6BAgBEAg"
          autoPlay
          controls
        />
      </div>
    </div>
  );
};

export default Landing;
