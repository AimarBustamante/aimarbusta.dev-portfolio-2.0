export const skills = (
	translations: Record<string, string>
): Record<string, { name: string; color: string }[]> => ({
	[translations["Skills.languages"]]: [
		{ name: "HTML", color: "#E34F26" },
		{ name: "CSS", color: "#1572B6" },
		{ name: "SASS", color: "#CC6699" },
		{ name: "JavaScript", color: "#ffe100" },
		{ name: "TypeScript", color: "#3178C6" },
	],
	[translations["Skills.frameworks"]]: [
		{ name: "React", color: "#61DAFB" },
		{ name: "Astro", color: "#0C1222" },
		{ name: "Bootstrap", color: "#7952B3" },
		{ name: "Tailwind CSS", color: "#38B2AC" },
	],
	[translations["Skills.no-code"]]: [
		{ name: "WordPress", color: "#21759B" },
		{ name: "Elementor", color: "#92003B" },
	],
	[translations["Skills.design"]]: [
		{ name: "Figma", color: "#F24E1E" },
		{ name: "Canva", color: "#00C4CC" },
	],
	[translations["Skills.others"]]: [
		{ name: "GitHub", color: "#181717" },
		{ name: "Git", color: "#F05032" },
		{ name: "Vite", color: "#B73BFE" },
		{ name: "Headless UI", color: "#66E3FF" },
		{ name: "Visual Studio Code", color: "#007ACC" },
		{ name: "Notion", color: "#000000" },
		{ name: "Shopify", color: "#7AB55C" },
		{ name: "ChatGPT", color: "#74aa9c" },
	],
});
