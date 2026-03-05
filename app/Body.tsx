"use client";
import { ReactNode } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import {
	Code2,
	Users,
	GraduationCap,
	Award,
	ExternalLink,
	Terminal,
} from "lucide-react";

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
					<motion.div
						variants={fadeInUp}
						className="relative pl-8 border-l-2 border-blue-500/30"
					>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
						/>
						<h3 className="text-xl font-bold flex items-center gap-2">
							Founder @ Utoverse Solution
							<span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full border border-blue-500/20">
								Full-time
							</span>
						</h3>
						<p className="text-sm text-slate-500 mb-4 font-mono">
							May 2024 – Present
						</p>

						<motion.div
							whileHover={{ y: -5 }}
							className="group bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl"
						>
							<h4 className="font-semibold text-blue-300 flex justify-between">
								Eforce System (SaaS)
								<ExternalLink
									size={14}
									className="opacity-0 group-hover:opacity-100 transition-opacity"
								/>
							</h4>
							<p className="text-slate-400 text-sm mt-1">
								Multi-tenant e-commerce platform with zero-code
								builder.
							</p>
							<ul className="list-disc list-inside text-slate-400 space-y-2 text-sm mt-4 marker:text-blue-500">
								<li>
									Built WYSIWYG editor & storefront engine
									(Next.js/C# .NET)
								</li>
								<li>
									Architected multi-tenant PostgreSQL schema &
									WhatsApp automation
								</li>
								<li>
									Managed full lifecycle and mentored
									engineering interns
								</li>
							</ul>
							<div className="mt-4 flex flex-wrap gap-2">
								{[
									"DDD",
									"Clean Architecture",
									"TDD",
									"PostgreSQL",
								].map((tag) => (
									<span
										key={tag}
										className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700"
									>
										{tag}
									</span>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* DOCMED */}
					<motion.div
						variants={fadeInUp}
						className="relative pl-8 border-l-2 border-slate-800"
					>
						<h3 className="text-xl font-bold">
							Web Developer @ DocMed Technology
						</h3>
						<p className="text-sm text-slate-500 font-mono">
							Jul 2023 – May 2024
						</p>
						<div className="mt-4 grid gap-3">
							<div className="p-4 bg-slate-900/30 rounded-lg border border-slate-800/50">
								<p className="text-slate-400 text-sm leading-relaxed">
									Revamped pharmaceutical marketplace using{" "}
									<span className="text-blue-400">
										React/Laravel
									</span>{" "}
									and developed{" "}
									<span className="text-purple-400">
										HyphensGPT
									</span>{" "}
									(AI Tool) using Python Django.
								</p>
							</div>
						</div>
					</motion.div>

					{/* DCCONNECT */}
					<motion.div
						variants={fadeInUp}
						className="relative pl-8 border-l-2 border-slate-800"
					>
						<h3 className="text-xl font-bold text-slate-300">
							Software Developer @ DCConnect Global
						</h3>
						<p className="text-sm text-slate-500 font-mono">
							Aug 2022 – Jul 2023
						</p>
						<div className="mt-2 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
							<span className="flex items-center gap-1 text-[11px] text-orange-400 bg-orange-400/10 px-2 py-1 rounded">
								<Terminal size={12} /> Haskell KSPwLO
							</span>
							<span className="flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
								<Terminal size={12} /> gRPC / Golang
							</span>
						</div>
					</motion.div>
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
