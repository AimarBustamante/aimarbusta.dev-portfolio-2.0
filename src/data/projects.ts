export const projects: {
	title: string;
	description: string;
	link: string;
	github: string;
	image: string;
	tag: string[];
}[] = [
	{
		title: "Contador de Calorías y Ejercicios",
		description:
			"Aplicación web en la que puede llevar un registro de las calorías consumidas junto con las calorías quemadas a través de la actividad física. Además, puedes ver la diferencia, lo que te ayuda a determinar si tienes déficit o superávit calórico.",
		github: "https://github.com/AimarBustamante/Calorie-Tracker",
		link: "https://calorie-tracker-04.netlify.app/",
		image: "/images/projects/calorie-tracker-mockup.webp",
		tag: ["React", "TypeScript", "Tailwind CSS", "Vite"],
	},
	{
		title: "Buscador de Clima",
		description:
			"Aplicación web en la que se puede consultar el tiempo de varias ciudades del mundo con información dinámica obtenida de una API.",
		github: "https://github.com/AimarBustamante/Weather-App",
		link: "https://weather-app-004.netlify.app/",
		image: "/images/projects/weather-app.webp",
		tag: ["React", "TypeScript", "CSS Modules", "Vite", "Axios", "Zod"],
	},
	{
		title: "Calculadora de Propinas y Consumo",
		description:
			"Una aplicación web que incluye un menú en el que se puede hacer un pedido y añadir una propina.",
		github: "https://github.com/AimarBustamante/Tip-and-Consumption-Calculator",
		link: "https://tip-and-consumption-calculator.netlify.app/",
		image: "/images/projects/tip-calculator.webp",
		tag: ["React", "TypeScript", "Tailwind CSS", "Vite"],
	},
	{
		title: "Planificador de Gastos",
		description:
			"Aplicación web en la que puedes gestionar tu presupuesto mensual o semanal. Puedes añadir tu presupuesto, gastos, editar y eliminar tus gastos, y filtrar los gastos por categoría.",
		github: "https://github.com/AimarBustamante/Expense-Planner/tree/main",
		link: "https://budget-planner-04.netlify.app/",
		image: "/images/projects/budget-tracker-mockup.webp",
		tag: ["React", "TypeScript", "Tailwind CSS", "Vite", "Headless UI"],
	},
];
