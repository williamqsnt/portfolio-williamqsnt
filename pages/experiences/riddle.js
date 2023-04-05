import styled from "@emotion/styled";
import Image from "next/image";
import riddlelogo from "./assets/riddlelogo.webp";
import riddlegif from "./assets/riddlegif.gif";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

export default function Riddle() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container>
      <div style={{ margin: "0em 2em 0em 2em" }}>
        <Image src={riddlelogo} width={300} />
        <p style={{ color: "white" }}>
          Ma mission a Riddle consistait à ajouter des <br />
          nouvelles fonctionnalités sur un logiciel SaaS, <br /> corriger des
          bugs et faire des test de qualité
        </p>
        <div style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>

        
        <a
        style={{display : 'flex', alignItems : 'center', margin : '1em'}}
          href="https://github.com/tomherbin/riddlead-front/compare/master...minor-bug"
          target="_blank"
        >
          <br />
          <GitHubIcon color="primary" sx={{ fontSize: "40px" }} />
        </a>
        <button onClick={() => setShowDetails(!showDetails)}>
          Voir plus de détails
        </button>
        </div>
        {showDetails && (
          <p style={{ color: "white" }}>
            React, Symfony
          </p>
        )}
      </div>
      <div></div>

      <div
        style={{
          border: "5px solid purple",
          margin: "0em 0em 0em 2em;",
          backgroundColor : 'lightgrey'
        }}
      >
        <Image src={riddlegif} width={400} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color : purple;
    color : white;
    padding : 0.8em 1em;
    cursor : pointer;
  }


  @media screen and (max-width: 950px) {
    flex-direction: column;
    text-align: center;
    div {
      margin: 1em;
    }
    img {
      width: 300px;
    }
  }
`;
