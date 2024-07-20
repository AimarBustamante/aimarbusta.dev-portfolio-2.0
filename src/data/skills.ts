export const skills = (
	translations: Record<string, string>
): Record<string, { name: string; color: string }[]> => ({
	[translations["Skills.languages"]]: [
		{ name: "HTML", color: "#E32E12" },
		{ name: "CSS", color: "#1572B6" },
		{ name: "SASS", color: "#CC437D" },
		{ name: "JavaScript", color: "#7A6C00" },
		{ name: "TypeScript", color: "#3178C6" },
	],
	[translations["Skills.frameworks"]]: [
		{ name: "React", color: "#217FA8" },
		{ name: "Astro", color: "#0C1222" },
		{ name: "Bootstrap", color: "#7952B3" },
		{ name: "Tailwind CSS", color: "#2B8381" },
	],
	[translations["Skills.no-code"]]: [
		{ name: "WordPress", color: "#21759B" },
		{ name: "Elementor", color: "#92003B" },
	],
	[translations["Skills.design"]]: [
		{ name: "Figma", color: "#E52A08" },
		{ name: "Canva", color: "#088391" },
	],
	[translations["Skills.others"]]: [
		{ name: "GitHub", color: "#181717" },
		{ name: "Git", color: "#EB1806" },
		{ name: "Vite", color: "#B52BF8" },
		{ name: "Headless UI", color: "#1C80A3" },
		{ name: "Visual Studio Code", color: "#007ACC" },
		{ name: "Notion", color: "#000000" },
		{ name: "Shopify", color: "#428623" },
		{ name: "ChatGPT", color: "#27856E" },
		{ name: "CSS Modules", color: "#000000" },
		{ name: "Axios", color: "#5A29E4" },
		{ name: "Zod", color: "#3E67B1" },
	],
});
