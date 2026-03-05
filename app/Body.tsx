"use client";
import { ReactNode } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Code2, Users, GraduationCap, Award } from "lucide-react";

export default function Body(): ReactNode {
	return (
		<>
			<Section
				title="Work Experience"
				icon={<Code2 className="text-blue-400" size={24} />}
			>
				<div className="space-y-12">
					<div className="relative pl-6 border-l-2 border-blue-500/30">
						<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
						<h3 className="text-xl font-bold">
							Founder @ Utoverse Solution
						</h3>
						<p className="text-sm text-slate-500 mb-4">
							May 2024 – Present
						</p>
						<div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-colors">
							<h4 className="font-semibold text-blue-300">
								Eforce System (SaaS)
							</h4>
							<ul className="list-disc list-inside text-slate-400 space-y-1 text-sm mt-2">
								<li>
									Built an e-commerce website builder with a
									WYSIWYG editor from scratch.
								</li>
								<li>
									Stack: Next.js, TypeScript, C#/.Net,
									PostgreSQL.
								</li>
								<li>
									Applied Domain Driven Design (DDD) and Clean
									Architecture.
								</li>
							</ul>
						</div>
					</div>

					<div className="relative pl-6 border-l-2 border-slate-800">
						<h3 className="text-xl font-bold">
							Web Developer @ DocMed Technology
						</h3>
						<p className="text-sm text-slate-500">
							Jul 2023 – May 2024
						</p>
						<p className="text-slate-400 mt-2">
							Revamped pharmaceutical marketplace using
							React/Laravel and developed HyphensGPT (AI Tool)
							using Python Django.
						</p>
					</div>
				</div>
			</Section>

			<Section
				title="Community Leadership"
				icon={<Users className="text-blue-400" size={24} />}
			>
				<div className="grid md:grid-cols-2 gap-4">
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="p-6 bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-xl"
					>
						<h3 className="text-xl font-bold mb-2">
							Miters Founder
						</h3>
						<p className="text-slate-400 text-sm">
							Growing an invitation-only community of 2k+
							Malaysian developers. Hosting weekly tech deep-dives
							and large events (100+ pax).
						</p>
						<div className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-400 uppercase tracking-widest">
							Design Patterns 101 Speaker
						</div>
					</motion.div>
				</div>
			</Section>

			{/* EDUCATION & AWARDS */}
			<div className="grid md:grid-cols-2 gap-8">
				<Section
					title="Education"
					icon={<GraduationCap className="text-blue-400" size={24} />}
				>
					<h3 className="font-bold">Fudan University</h3>
					<p className="text-slate-400 italic text-sm">
						Mathematics & Applied Mathematics
					</p>
					<p className="text-slate-500 text-xs">2018 - 2022</p>
				</Section>

				<Section
					title="Achievements"
					icon={<Award className="text-blue-400" size={24} />}
				>
					<div className="text-sm text-slate-400">
						<p className="font-bold text-slate-200">
							Shanghai Govt Scholarship (Class A)
						</p>
						<p>Full tuition, accommodation, and living expenses.</p>
					</div>
				</Section>
			</div>
		</>
	);
}
