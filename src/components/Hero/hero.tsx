import Head from "next/head";
import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Hero({
  imageSrc,
}: {
  imageSrc?: StaticImageData | string;
}) {
  return (
    <>
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
            alt="Hero image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </figure>
      )}
    </>
  );
}
