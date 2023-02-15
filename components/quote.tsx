import React from "react";
import { Feature } from "@components/features";
import { f } from "nextra/dist/types-bb4d1162";

export function QuoteNext(props: {
  cols: number;
  logo?: string;
  name: string;
  quote: string;
  image: string;
  people_image: string;
  title: string;
}) {
  const cols = `col-span-${props.cols}`;
  return (
    <Feature
      lightOnly={false}
      centered={false}
      href={false}
      large={false}
      index={0}
      className={cols}
      style={{
        flexDirection: "column",
        display: "flex",
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 4,
          }}
          className="tracking-tight m-2 font-semibold"
        >
          <div>
            <img
              className="h-7 "
              src={props.image}
              style={{ marginBottom: 10 }}
            />
          </div>

          {props.quote}
        </div>
      </div>

      <div className="font-medium mt-2 flex align-middle ">
        <img
          style={{ marginLeft: 5 }}
          className="h-8 w-8 rounded-full"
          src={props.people_image}
          alt=""
        />
        <div style={{ marginTop: 2, marginLeft: 8 }}>
          <span className="font-bold mr-1">{props.name}</span> {props.title}
        </div>
      </div>
    </Feature>
  );
}
