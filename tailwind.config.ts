import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				background: {
					DEFAULT: "var(--background)",
					input: "var(--input-background)",
				},
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss-react-aria-components"),
	],
} satisfies Config;
