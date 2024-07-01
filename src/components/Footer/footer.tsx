import Link from "next/link";
import Container from "../Container/container";
export default function Footer() {
  return (
    <footer style={{ margin: "50px auto" }}>
      <Container>
        <hr />
        <h2>Contact me</h2>
        <ul>
          <li>
            <Link href="https://github.com/Capobmb">
              Github: @Capobmb
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/cpbm_p">Twitter: @cpbm_p</Link>
          </li>
          <li>E-mail: taip0321.h(^^)gmail.com (Replace (^^) with @)</li>
        </ul>
        <p>This site is built by Next.js with MDX on Github Pages.</p>
      </Container>
    </footer>
  );
}
