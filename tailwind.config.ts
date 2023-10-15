import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				background: "var(--background)",
				foreground: "var(--foreground)",
			}
		},
	},
	plugins: [],
} satisfies Config;
