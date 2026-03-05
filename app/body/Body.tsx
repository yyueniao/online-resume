"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Code2, Users, GraduationCap, Award } from "lucide-react";
import Section from "./Section";
import WorkExperience from "./WorkExperience";

const containerVariants = {
	initial: {},
	whileInView: {
		transition: {
			staggerChildren: 0.2, // Items pop up one by one
		},
	},
};

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			damping: 20,
			stiffness: 100,
		},
	},
	viewport: { once: true, amount: 0.2 },
};

export default function Body(): ReactNode {
	return (
		<motion.div
			initial="initial"
			whileInView="whileInView"
			variants={containerVariants}
			viewport={{ once: true }}
			className="max-w-4xl mx-auto space-y-16 pb-20"
		>
			{/* WORK EXPERIENCE SECTION */}
			<Section
				title="Work Experience"
				icon={<Code2 className="text-blue-400" size={24} />}
			>
				<div className="space-y-12">
					{/* UTOVERSE */}
					<WorkExperience
						position={"Founder"}
						companyName={"Utoverse Solution"}
						startDate={"May 2024"}
						endDate={"Present"}
						subtitle={"Eforce System (SaaS)"}
						description={
							"Multi-tenant e-commerce platform with zero-code builder."
						}
						points={[
							"Built WYSIWYG editor & storefront engine",
							"Architected multi-tenant PostgreSQL schema & WhatsApp automation",
							"Managed full lifecycle and mentored developer intern",
						]}
						skills={[
							"Next.js",
							"React",
							"TypeScript",
							"ASP.Net",
							"C#",
							"PostgreSQL",
						]}
					/>
					<WorkExperience
						position="Web Developer"
						companyName="DocMed Technology"
						startDate="Jul 2023"
						endDate="May 2024"
						subtitle="Pharmaceutical Marketplace & AI Tooling"
						description="Revamped regional pharmaceutical marketplace and built custom AI solutions."
						points={[
							"Rebuilt the pharmaceutical marketplace platform from scratch using React and Laravel",
							"Developed HyphensGPT, an internal AI tool, using Python Django",
							"Applied Clean Architecture and Domain Driven Design to ensure scalability",
						]}
						skills={[
							"React",
							"Laravel",
							"Python",
							"Django",
							"PHP",
							"MySQL",
							"PostgreSQL",
						]}
					/>
					<WorkExperience
						position="Software Developer"
						companyName="DCConnect Global Limited"
						startDate="Aug 2022"
						endDate="Jul 2023"
						subtitle="Microservices & Algorithmic Engineering"
						description="Focused on high-performance networking services and microservice migration."
						points={[
							"Developed & Maintained a network service provider platform",
							"Implemented KSPwLO algorithm in Haskell for shortest path price/latency network optimization",
							"Migrated legacy microservices from Haskell to GoLang using gRPC protocols",
							"Refactored core React/Next.js projects to improve maintainability and readability",
						]}
						skills={[
							"Haskell",
							"GoLang",
							"Java",
							"TypeScript",
							"Next.js",
							"MySQL",
						]}
					/>
				</div>
			</Section>

			{/* COMMUNITY LEADERSHIP */}
			<Section
				title="Community Leadership"
				icon={<Users className="text-blue-400" size={24} />}
			>
				<motion.div
					variants={fadeInUp}
					whileHover={{ scale: 1.01 }}
					className="p-8 bg-gradient-to-br from-blue-600/10 via-slate-900 to-slate-900 border border-blue-500/20 rounded-2xl relative overflow-hidden group"
				>
					<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
						<Users size={80} />
					</div>
					<div className="relative z-10">
						<div className="flex justify-between items-start">
							<h3 className="text-2xl font-bold mb-2">
								Miters Founder
							</h3>
							<span className="text-blue-400 font-bold">
								2k+ Members
							</span>
						</div>
						<p className="text-slate-400 leading-relaxed mb-6">
							Invitation-only tech community for Malaysian
							developers. Hosting weekly deep-dives and large
							events (100+ concurrent pax). Connecting senior
							engineers with emerging talent.
						</p>
						<div className="flex items-center gap-4">
							<div className="h-[2px] flex-1 bg-blue-500/20" />
							<span className="text-xs font-bold text-blue-400 uppercase tracking-tighter">
								Design Patterns 101 Speaker
							</span>
							<div className="h-[2px] flex-1 bg-blue-500/20" />
						</div>
					</div>
				</motion.div>
			</Section>

			{/* EDUCATION & AWARDS */}
			<div className="grid md:grid-cols-2 gap-8">
				<motion.div variants={fadeInUp}>
					<Section
						title="Education"
						icon={
							<GraduationCap
								className="text-blue-400"
								size={24}
							/>
						}
					>
						<div className="group p-4 hover:bg-slate-900/50 rounded-xl transition-colors">
							<h3 className="font-bold text-lg">
								Fudan University
							</h3>
							<p className="text-blue-400 italic text-sm">
								Mathematics & Applied Mathematics
							</p>
							<p className="text-slate-500 text-xs mt-2">
								2018 - 2022 • Shanghai, China
							</p>
							<p className="text-slate-400 text-xs mt-3 leading-relaxed">
								Focus on Graph Theory, Deep Learning, and
								Mathematical Modeling.
							</p>
						</div>
					</Section>
				</motion.div>

				<motion.div variants={fadeInUp}>
					<Section
						title="Achievements"
						icon={<Award className="text-blue-400" size={24} />}
					>
						<div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
							<p className="font-bold text-blue-100">
								Shanghai Govt Scholarship (Class A)
							</p>
							<p className="text-slate-400 text-sm mt-1">
								Full-ride scholarship covering tuition, housing,
								and stipends.
							</p>
							<div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: "100%" }}
									transition={{
										duration: 1.5,
										ease: "easeOut",
									}}
									className="h-full bg-blue-500"
								/>
							</div>
						</div>
					</Section>
				</motion.div>
			</div>
		</motion.div>
	);
}
