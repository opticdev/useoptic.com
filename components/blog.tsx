import { PropsWithChildren } from "react";
import Head from "next/head";

export function Blog(
  props: PropsWithChildren<{
    title: string;
    image: string;
    author: string;
    date: string;
  }>
) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        {props.image && (
          <meta
            name="og:image"
            content={"https://useoptic.com" + props.image}
          />
        )}
        {props.image && (
          <meta
            name="twitter:image"
            content={"https://useoptic.com" + props.image}
          />
        )}

        {props.image && <meta name="twitter:title" content={props.title} />}
      </Head>
      <h1
        style={{
          textAlign: "left",
          lineHeight: 1.2,
          fontWeight: "600",
          marginBottom: 15,
        }}
      >
        {props.title}
      </h1>
      <div className="flex flex-row items-center ">
        <img
          className="w-10 h-10 rounded mr-2"
          src={authorImage[props.author]}
          style={{ border: "1px solid #e2e2e2" }}
        />
        <h3 style={{ fontWeight: 600 }}>
          {" "}
          {authorName[props.author]} {props.date}
        </h3>
      </div>
      {props.image && (
        <img src={props.image} className="max-w-2xl mt-5 shadow" />
      )}

      <div>{props.children}</div>
    </>
  );
}

const authorName = {
  aidan: "Aidan Cunniffe",
  stephen: "Stephen Mizell",
};
const authorImage = {
  aidan: "/img/team/aidan.jpg",
  stephen: "/img/team/smizell.jpg",
};
