"use client";
import { motion } from "framer-motion";
import { Mail, Code2, Users, GraduationCap, Award } from "lucide-react";
import { fadeInUp } from "./utils";
import Section from "./Section";

const BrandIcon = ({ path, title }: { path: string; title: string }) => (
	<svg
		role="img"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="w-6 h-6 transition-colors duration-300 hover:text-blue-400"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{title}</title>
		<path d={path} />
	</svg>
);

const ICONS = {
	GITHUB: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
	LINKEDIN:
		"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z",
};

export default function Portfolio() {
	return (
		<div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
			<div className="max-w-4xl mx-auto px-6 py-20">
				<header className="mb-24">
					<motion.div {...fadeInUp}>
						<h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
							Ng Say Peng
						</h1>
						<p className="text-xl text-slate-400 mb-6">
							Fullstack Developer & Founder of{" "}
							<span className="text-blue-400 underline decoration-2 underline-offset-4">
								Miters
							</span>
						</p>
						<div className="flex gap-4">
							<a
								href="mailto:yyueniao0913@gmail.com"
								className="p-2 hover:text-blue-400 transition-colors"
							>
								<Mail />
							</a>
							<a
								href="https://github.com/yyueniao"
								target="_blank"
								className="p-2 hover:text-blue-400 transition-colors"
							>
								<BrandIcon path={ICONS.GITHUB} title="GitHub" />
							</a>
							<a
								href="https://linkedin.com/in/say-peng-ng-304b00225/"
								target="_blank"
								className="p-2 hover:text-blue-400 transition-colors"
							>
								<BrandIcon
									path={ICONS.LINKEDIN}
									title="LinkedIn"
								/>
							</a>
						</div>
					</motion.div>
				</header>

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
										Built an e-commerce website builder with
										a WYSIWYG editor from scratch.
									</li>
									<li>
										Stack: Next.js, TypeScript, C#/.Net,
										PostgreSQL.
									</li>
									<li>
										Applied Domain Driven Design (DDD) and
										Clean Architecture.
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
								Malaysian developers. Hosting weekly tech
								deep-dives and large events (100+ pax).
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
						icon={
							<GraduationCap
								className="text-blue-400"
								size={24}
							/>
						}
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
							<p>
								Full tuition, accommodation, and living
								expenses.
							</p>
						</div>
					</Section>
				</div>
			</div>
		</div>
	);
}
