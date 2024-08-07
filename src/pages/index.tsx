import Container from "@/components/Container/container";
import Hero from "@/components/Hero/hero";
import Meta from "@/components/Meta/meta";
const heiho_capo = "/heiho_capo.jpg";
import IndexContent from "@/components/IndexContent/indexcontent.mdx";

export default function Index() {
  return (
    <>
      <Meta pageTitle="Portfolio" pageDesc="Capo's portfolio" />
      <Container>
        <Hero imageSrc={heiho_capo} />
        <IndexContent />
      </Container>
    </>
  );
}
