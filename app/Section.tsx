import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "./utils";

interface Props {
	children: ReactNode;
	title: string;
	icon: ReactNode;
}

export default function Section({ children, title, icon }: Props) {
	return (
		<motion.section
			variants={fadeInUp}
			initial="initial"
			whileInView="whileInView"
			viewport={fadeInUp.viewport}
			transition={fadeInUp.transition}
			className="mb-16"
		>
			<div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-2">
				{icon}
				<h2 className="text-2xl font-bold tracking-tight">{title}</h2>
			</div>
			{children}
		</motion.section>
	);
}
