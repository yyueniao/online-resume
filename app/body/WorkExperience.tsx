import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import { fadeInUp } from "../utils";

interface Props {
	position: string;
	companyName: string;
	startDate: string;
	endDate: string;
	subtitle: string;
	description: string;
	points: string[];
	skills: string[];
}

export default function WorkExperience({
	position,
	companyName,
	startDate,
	endDate,
	subtitle,
	description,
	points,
	skills,
}: Props): ReactNode {
	return (
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
				{position} @ {companyName}
				<span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full border border-blue-500/20">
					Full-time
				</span>
			</h3>
			<p className="text-sm text-slate-500 mb-4 font-mono">
				{startDate} – {endDate}
			</p>

			<motion.div
				whileHover={{ y: -5 }}
				className="group bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl"
			>
				<h4 className="font-semibold text-blue-300 flex justify-between">
					{subtitle}
					<ExternalLink
						size={14}
						className="opacity-0 group-hover:opacity-100 transition-opacity"
					/>
				</h4>
				<p className="text-slate-400 text-sm mt-1">{description}</p>
				<ul className="list-disc list-inside text-slate-400 space-y-2 text-sm mt-4 marker:text-blue-500">
					{points.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
				<div className="mt-4 flex flex-wrap gap-2">
					{skills.map((tag) => (
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
	);
}
