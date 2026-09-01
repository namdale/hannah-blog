import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C8352E",
        ink: "#1A1A1A",
        muted: "#6B6B6B",
        surface: "#EDEDED",
        background: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.15em",
        widest2: "0.25em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        hannah: {
          css: {
            "--tw-prose-body": theme("colors.ink"),
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-quotes": theme("colors.muted"),
            "--tw-prose-hr": "rgba(26,26,26,0.2)",
            maxWidth: "none",
            h2: {
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: "700",
            },
            h3: {
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "600",
            },
            a: { textUnderlineOffset: "4px" },
            // 본문 이미지는 글 폭을 꽉 채우지 않고 가운데로 좁게 둔다.
            // 같은 픽셀을 좁은 영역에 담으면 화면 밀도가 올라가 더 선명해 보이고,
            // 사진이 본문 흐름을 끊지 않는다.
            img: {
              maxWidth: "420px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
              marginBottom: "0",
              borderRadius: "2px",
            },
            figure: { marginTop: "2rem", marginBottom: "2rem" },
            figcaption: {
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.7rem",
              marginTop: "0.9rem",
              color: theme("colors.muted"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
