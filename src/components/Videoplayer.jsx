import React from "react";

const Videolink = {
  url: "https://www.youtube.com/embed/drHbXuvWfzM?si=s6oOPbpPXm03Vd-C",
  videoname:
    "It's a match l'opportunité de recrutement pour les étudiants de GOMYCODE",
  hastag: "react course",
};

const Videoplayer = () => {
  return (
    <div>
      <iframe
        height="530"
        width="942"
        title="video"
        src={Videolink.url}
      ></iframe>
      <p>{Videolink.hastag}</p>
      <h3>{Videolink.videoname}</h3>
    </div>
  );
};

export default Videoplayer;
