import Menu from "@/components/Menu"
import styled from "@emotion/styled"


export default function Competences() {
    return(
        <Container>
            <section>
                <Menu />
            </section>
            <section>

            </section>
        </Container>
    )
}

const Container = styled.div`

scroll-snap-type: y mandatory;
overflow-y: scroll;
height: 100vh;

section {
  height: 100vh;
  scroll-snap-align: start;
}


`