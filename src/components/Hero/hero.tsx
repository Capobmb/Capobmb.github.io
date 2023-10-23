import Head from "next/head";
import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Hero({
  pageTitle,
  imageSrc,
}: {
  pageTitle?: string;
  imageSrc?: StaticImageData | string;
}) {
  return (
    <>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} - Capo's Portfolio` : "Capo's Portfolio"}
        </title>
      </Head>
      {imageSrc && (
        <figure
          style={{
            position: "relative",
            width: "200px",
            height: "100px",
            margin: "0 auto 2em auto",
            borderRadius: "2em",
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </figure>
      )}
    </>
  );
}
