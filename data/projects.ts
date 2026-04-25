import { Project } from "@/types";

export const projects: Project[] = [
	{
		slug: "moodmaps",
		title: "MoodMaps - Emotional Mapping Platform",
		description:
			"A real-time map experience where users tag emotional states by location and explore city-level sentiment patterns.",
		impact: "Built live geospatial visualization with real-time mood interactions.",
		year: "2025",
		kind: "Full-Stack",
		featured: true,
		tech: ["React", "Leaflet", "Node.js", "MongoDB"],
		highlights: [
			"Implemented live location-based emotional tagging",
			"Added map-driven mood heat visualization",
			"Designed interactive exploration UX for sentiment insights",
		],
		liveUrl: "https://moodmaps.vercel.app/",
		githubUrl: "https://github.com/Zen-X5/MoodMaps",
	},
	{
		slug: "disaster-alert-system",
		title: "Disaster Alert System",
		description:
			"A real-time disaster monitoring platform integrating web APIs and IoT signals for actionable alerts.",
		impact: "Connected web intelligence and IoT data to support real-world emergency awareness.",
		year: "2025",
		kind: "IoT",
		featured: true,
		tech: ["MERN", "External APIs", "IoT Devices"],
		highlights: [
			"Developed real-time alert aggregation and filtering",
			"Integrated multiple data sources for reliability",
			"Created alert-first workflows optimized for fast decisions",
		],
		githubUrl: "https://github.com/Zen-X5",
	},
	{
		slug: "mysarah-corporate-platform",
		title: "MySarah Corporate Platform",
		description:
			"A full-stack corporate platform with modular mini-CRM capabilities and media workflow integrations.",
		impact: "Shipped a scalable business platform with deployment-ready architecture.",
		year: "2025",
		kind: "Full-Stack",
		featured: true,
		tech: ["React (Vite)", "Node.js", "Cloudinary"],
		highlights: [
			"Implemented modular full-stack architecture",
			"Integrated secure media/file handling via Cloudinary",
			"Structured app for ongoing feature expansion",
		],
		liveUrl: "https://my-sarah-pvt-limited.vercel.app/",
		githubUrl: "https://github.com/Zen-X5/MySarah-Pvt.Limited",
	},
	{
		slug: "sahayakissan",
		title: "SahayaKISSAN - Agri + IoT Platform",
		description:
			"A farmer-to-buyer digital platform combining location-aware discovery with IoT-powered agriculture ideas.",
		impact: "Focused on practical agri-tech workflows for commerce and smart irrigation concepts.",
		year: "2025",
		kind: "IoT",
		tech: ["MERN", "Location Services", "IoT Concepts"],
		highlights: [
			"Connected producers and buyers via marketplace workflows",
			"Implemented location-based filtering for relevance",
			"Integrated smart irrigation concept modeling",
		],
		githubUrl: "https://github.com/Zen-X5/SahayaKISSAN",
	},
	{
		slug: "sewa-sakshyam",
		title: "Sewa Sakshyam - NEET Coaching Platform",
		description:
			"An education-focused frontend product centered on clarity, accessibility, and structured learning experiences.",
		impact: "Delivered a clean learning-first UI suitable for student-focused usage.",
		year: "2025",
		kind: "Web",
		tech: ["React"],
		highlights: [
			"Built structured course-oriented interface flows",
			"Improved accessibility and content readability",
			"Designed for clear progress through learning resources",
		],
		liveUrl: "https://sewa-sakshyam.vercel.app/",
		githubUrl: "https://github.com/Zen-X5/Sewa-Sakshyam",
	},
];
