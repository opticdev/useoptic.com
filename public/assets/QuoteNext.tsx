import React from "react";

export function QuoteNext(props: {
  cols: number;
  logo?: string;
  name: string;
  quote: string;
  image: string;
  people_image: string;
  title: string;
}) {
  const cols = `col-span-${props.cols} relative`;
  return (
    <div className={cols} style={{ borderBottom: "1px solid #e2e2e2" }}>
      <div
        style={{
          paddingLeft: 15,
          fontSize: 15,
          paddingTop: 10,
          paddingBottom: 4,
        }}
        className="tracking-tight m-5 font-semibold"
      >
        <div>
          <img
            className="mx-auto h-10 "
            src={props.image}
            style={{ paddingLeft: 5 }}
          />
        </div>

        {props.quote}

        <div className="font-medium mt-5 flex align-middle ">
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
      </div>
    </div>
  );
}
export function QuoteNextSlim(props: {
  cols: number;
  name: string;
  quote: string;
  title: string;
}) {
  const cols = `col-span-${props.cols} relative`;
  return (
    <div className={cols}>
      <div
        style={{
          paddingLeft: 15,
          fontSize: 17,
        }}
        className="tracking-tight font-semibold"
      >
        {props.quote}

        <div className="font-medium mt-5 flex align-middle ">
          <div style={{ marginTop: 2 }}>
            <span className="font-bold mr-1">{props.name}</span> {props.title}
          </div>
        </div>
      </div>
    </div>
  );
}
