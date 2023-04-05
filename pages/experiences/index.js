import { useState, useEffect, useRef } from "react";
import Menu from "@/components/Menu";
import styled from "@emotion/styled";
import Riddle from "./riddle";
import Axians from "./axians";
import Footer from "@/components/Footer";

export default function Experiences() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const currentScrollY = container.scrollTop;
      const sections = Array.from(container.querySelectorAll("section")).slice(
        1
      );
      const visibleSectionIndex = sections.findIndex(
        (section) =>
          currentScrollY >= section.offsetTop &&
          currentScrollY < section.offsetTop + section.offsetHeight
      );
      setActiveSectionIndex(visibleSectionIndex);
    };
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (index) => {
    const sections = Array.from(
      containerRef.current.querySelectorAll("section")
    ).slice(1);
    sections[index].scrollIntoView({ behavior: "smooth" });

    const buttons = Array.from(
      containerRef.current.querySelectorAll(".btnSlider button")
    );
    buttons.forEach((button, i) => {
      if (i === index && i > 0) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  };

  return (
    <Container ref={containerRef}>
      <section id="section0">
        <Menu />
        <div className="btnSlider">
          <button
            className={activeSectionIndex === 0 ? "active" : ""}
            onClick={() => handleButtonClick(0)}
          >
            ●
          </button>
          <button
            className={activeSectionIndex === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            ●
          </button>
        </div>
      </section>
      <section id="section1"><Riddle /></section>
      <section id="section2"><Axians /></section>
      <section>
        <Footer />
      </section>
        
    </Container>
  );
}

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  section {
    height: 100vh;
    scroll-snap-align: start;
  }

  button {
    border: none;
    background: transparent;
    color : lightgrey;
    font-size: 1em;
    margin: 0.25em 0em;
  }

  .btnSlider {
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translate(-50%, -50%) translateX(-100%);
    display: flex;
    flex-direction: column;
  }

  .active {
    color: blue;
  }
`;
