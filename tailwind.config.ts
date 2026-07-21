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
        primary: "#C8352E", // Hannah Beauty signature red — fine-tune with DevTools if needed
        ink: "#1A1A1A",
        muted: "#6B6B6B",
        surface: "#EDEDED",
        background: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.15em",
        widest2: "0.25em",
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
              fontWeight: "600",
            },
            h3: {
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "600",
            },
            a: { textUnderlineOffset: "4px" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
