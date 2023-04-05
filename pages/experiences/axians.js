import styled from "@emotion/styled";
import Image from "next/image";
import axianslogo from "./assets/axianslogo.webp";
import axiansgif from "./assets/axiansgif.gif";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

export default function Axians() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container>
      <div style={{ margin: "0em 2em 0em 2em" }}>
        <Image src={axianslogo} width={300} />
        <p style={{ color: "rgb(40,90,180)", marginTop : '1em' }}>
          Ma mission a Axians consistait à créer des<br /> maquettes 
          de leur site web en respectant leurs chartes graphiques.<br />
          Après avoir obtenu l'approbation des<br/> j'ai développé le site avec la technologie <br/> de mon choix.
        </p>
        <div style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>

        
        <a
        style={{display : 'flex', alignItems : 'center', margin : '1em'}}
          href="https://github.com/williamqsnt/stage-axians-nextjs-contentful"
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
          border: "5px solid rgb(69, 134, 248)",
          margin: "0em 0em 0em 2em;",
        }}
      >
        <Image src={axiansgif} width={400} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
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
    background-color : rgb(69, 134, 248);
    padding : 0.8em 1em;
    color : white;
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
