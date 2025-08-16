import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Anton","Bebas Neue","Inter","system-ui"],
        sans: ["Inter","system-ui","sans-serif"]
      },
      colors: {
        brand: { DEFAULT:"#FF4F7D",50:"#FFF0F4",100:"#FFE1E9",200:"#FFB3C7",300:"#FF85A5",400:"#FF5783",500:"#FF4F7D",600:"#CC3F64",700:"#992F4B",800:"#661F32",900:"#330F19" },
        accent: { DEFAULT:"#00B4D8", 600:"#008EAD" },
        ink: "#0F0F12"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")]
};
export default config;
