import { useRouter } from 'next/router';
import Link from "next/link";
import styled from '@emotion/styled'

export default function Menu() {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  }

  return (
    <Container>
      <p style={{ margin: '2em 0em 0em 0em', fontSize: '2em', fontFamily: 'arial' }}>William Q.</p>
      <nav>
        <ul>
          <Link href="/projets">
            <li className={isActive("/projets") ? "active" : ""}>Projets</li>
          </Link>
          <Link href="/competences">
            <li className={isActive("/competences") ? "active" : ""}>Compétences</li>
          </Link>
          <Link href="/experiences">
            <li className={isActive("/experiences") ? "active" : ""}>Expériences</li>
          </Link>
        </ul>
      </nav>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  nav ul {
    display: flex;

    a {
      text-decoration: none;
    }

    li {
      list-style-type: none;
      margin: 2em 1em;
      color: rgb(10, 25, 47);
      font-family: monospace;
      font-weight: bold;
      font-size: 1.1em;

      &.active {
        color: blue;
        border-bottom : 2px solid blue;
      }
    }
  }
` 
