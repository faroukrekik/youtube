import React from "react";
import { Accordion, Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { FiScissors } from "react-icons/fi";

const Profile = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "950px",
          justifyContent: "space-between",
        }}
      >
        <div className="subscribe">
          <img
            width="40px"
            height="40px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREkeE4WFVblOLaOGCosQHoHYu9JaS-rlvBNg&usqp=CAU"
            alt="logo"
          />
          <div className="paragraphe">
            <h5>Mosaique Fm</h5>
            <p>1.57 M abonnée</p>
          </div>
          <button id="buttsab">s'abonner</button>
        </div>
        <div id="viewer">
          <ButtonGroup style={{ margin: "5px" }} aria-label="Basic example">
            <Button variant="secondary">
              <AiOutlineLike />
              11
            </Button>
            <Button variant="secondary">
              <AiOutlineDislike />
            </Button>
          </ButtonGroup>
          <Button variant="secondary">
            <BiShare />
            Partager
          </Button>{" "}
          <Button variant="secondary">
            <FiScissors />
            Extrait
          </Button>{" "}
        </div>
      </div>
      <Accordion style={{ width: "942px" }} defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Profile;
