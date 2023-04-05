import styled from "@emotion/styled";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import sneakersimg from "./assets/sneakersimg.png";
import { Chip } from "@mui/material";

export default function Sneakers() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container>
      <div style={{ margin: "0em 2em 0em 2em" }}>
        <h3 style={{ fontSize: "5em" }}>SNKRS</h3>
        <Chip label="Dart" />
        <Chip label="Flutter" />
        <p style={{ marginTop : '0.5em'}}>
          Ma mission a Riddle consistait à ajouter des <br />
          nouvelles fonctionnalités sur un logiciel SaaS, <br /> corriger des
          bugs et faire des test de qualité
        </p>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            style={{ display: "flex", alignItems: "center", margin: "1em" }}
            href="https://github.com/williamqsnt/epsi-sneakers-app"
            target="_blank"
          >
            <br />
            <GitHubIcon color="error" sx={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>

      <div className="divimg">
        <Image src={sneakersimg} width={250} />
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
    background-color: purple;
    color: white;
    padding: 0.8em 1em;
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    text-align: center;
    div {
      margin: 1em;
    }
    img {
      height: 300px;
      width: 150px;
    }
  }
`;

