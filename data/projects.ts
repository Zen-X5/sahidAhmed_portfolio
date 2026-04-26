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
		image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
		images: [
			"https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
		]
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
		image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=800",
		images: [
			"https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1518281361980-b26bfd556770?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&q=80&w=800"
		]
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
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
		]
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
		image: "https://images.unsplash.com/photo-1592982537447-6f2b6e159048?auto=format&fit=crop&q=80&w=800",
		images: [
			"https://images.unsplash.com/photo-1592982537447-6f2b6e159048?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1586771107565-9856a93b4845?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1530836369250-ef71a3f5e4bf?auto=format&fit=crop&q=80&w=800"
		]
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
		image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
		images: [
			"https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
		]
	},
];
