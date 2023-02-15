import React, { useEffect, useRef } from "react";

export default function Video(props: {
  src: string;
  caption: string;
  poster: string;
}) {
  const videoRef = useRef();

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                // @ts-ignore
                videoSource.src = videoSource.dataset.src;
              }
            }
            // @ts-ignore
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      lazyVideoObserver.observe(videoRef.current);
    }
  });

  return (
    <div
      className="shadow-2xl mt-5 mb-12 bg-gray-100 mb-8 "
      style={{ border: "1px solid #e2e2e2", width: "100%" }}
    >
      <div className="flex pl-5 align-items-center py-3 ">
        <h5 className="text-lg font-semibold">{props.caption}</h5>
      </div>
      <video
        poster={props.poster}
        ref={videoRef}
        style={{ display: "block" }}
        autoPlay
        playsInline
        muted
        loop
        className="lazy"
        width="100%"
        src={props.src}
      >
        <source data-src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}
export function VideoSlim(props: {
  src: string;
  poster: string;
  top?: boolean;
}) {
  const videoRef = useRef();

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                // @ts-ignore
                videoSource.src = videoSource.dataset.src;
              }
            }
            // @ts-ignore
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      lazyVideoObserver.observe(videoRef.current);
    }
  }, [typeof window]);

  return (
    <video
      poster={props.poster}
      ref={videoRef}
      autoPlay
      playsInline
      muted
      loop
      className="lazy"
      width="100%"
      height="100%"
      style={props.top ? {} : { zIndex: "-1" }}
      src={props.src}
    >
      <source data-src={props.src} type="video/mp4" />
    </video>
  );
}
