import { siteMeta } from "@/const/sitemeta";
import Head from "next/head";
import { useRouter } from "next/router";

// versatile OGP image
// import siteImg from "images/others/logo.png";

export default function Meta({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}: {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: string;
  pageImgW?: string;
  pageImgH?: string;
}) {
  const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
    siteMeta;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const img = pageImg ?? siteIcon.src;
  const imgW = pageImgW ?? siteIcon.width.toString();
  const imgH = pageImgH ?? siteIcon.height.toString();
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={siteIcon.src} />
      <link rel="apple-touch-icon" href={siteIcon.src} />
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <meta property="og:image" content={img} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
