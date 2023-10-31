import React from "react";

const vidinfo = [
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3pD7QF3KDp0?si=_490szsblbfcG9xc",
    titles:
      "TiiwTiiw ft Cravata - Maria (دارتها بيا) (Exclusive Music Video 2018)",
  },
];

const Videolist = () => {
  return (
    <div>
      {vidinfo.map((el) => (
        <div style={{ display: "flex", margin: "15px" }}>
          <iframe width="168px" height="94px" src={el.vid} title="vid"></iframe>
          <h5 style={{ fontSize: "14px" }}>{el.titles} </h5>
        </div>
      ))}
    </div>
  );
};

export default Videolist;
