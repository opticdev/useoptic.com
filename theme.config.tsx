import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <span>
    <img src="/logo.svg" width={111} />
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/opticdev/useoptic.com",
  },
  docsRepositoryBase: "https://github.com/opticdev/useoptic.com/tree/main/docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Optic",
      };
    }
  },
  logo,
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: "light",
  },
  darkMode: false,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      // route === "/" || !title
      "https://useoptic.com/img/social-image-standards.png";
    // : `https://useoptic.com/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Ship amazing APIs" />
        <meta name="og:description" content="Ship amazing APIs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="@useoptic" />
        <meta name="twitter:url" content="https://useoptic.com" />
        <meta name="og:title" content={title ? title + " – Optic" : "Optic"} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Optic" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-137236875-1"
        ></script>
        <script
          type={"text/javascript"}
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || [];\n" +
              "          function gtag(){dataLayer.push(arguments);}\n" +
              "          gtag('js', new Date());\n" +
              "\n" +
              "          gtag('config', 'UA-137236875-1');",
          }}
        ></script>
      </>
    );
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div></div>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} Optic Labs Corporation
        </p>
        <p className="mt-2 text-xs">
          <a href="cloud-terms">Terms of Service</a>
          {" | "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    ),
  },
};

export default config;
