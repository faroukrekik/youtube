import React from "react";

const information = [
  {
    id: Math.random(),
    prenom: "yassine",
    comment:
      "Le clip est carrément génial et la chanson de la musique est toujours excellente ",
  },
  {
    id: Math.random(),
    prenom: "chams",
    comment: "Abonnez vous à la chaîne pour les futures clips !",
  },
  {
    id: Math.random(),
    prenom: "tounsis",
    comment:
      "J'adore cette chanson bravo pour les deux chanteurs c'est magnifique bon courage pour plus de succèss",
  },
];

const Comments = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "942px",
          justifyContent: "space-evenly",
        }}
      >
        <img
          height="40px"
          width="40px"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkeE4WFVblOLaOGCosQHoHYu9JaS-rlvBNg&usqp=CAU"
        />

        <textarea
          style={{ width: "850px", height: "50px" }}
          placeholder=" Entrer your comment"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div />
        {information.map((el) => (
          <div style={{ display: "flex" }} key={el.id}>
            <img
              style={{ width: "40px", height: "40px", marginLeft: "1pxs" }}
              src="https://static.vecteezy.com/ti/vecteur-libre/t2/2002403-homme-avec-barbe-avatar-personnage-icone-isole-gratuit-vectoriel.jpg"
              alt="logo2"
            />
            <div className="fluide_com">
              <h5>{el.prenom}</h5>

              <p>{el.comment} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
