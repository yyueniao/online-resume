"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Name() {
	// 1. Motion Values for global coordinates
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// 2. High-performance springs for smooth color transitions
	const smoothX = useSpring(x, { stiffness: 150, damping: 25 });
	const smoothY = useSpring(y, { stiffness: 150, damping: 25 });

	// 3. Global Mouse Listener
	useEffect(() => {
		const handleGlobalMouseMove = (e: MouseEvent) => {
			// We use pageX/pageY to track the cursor relative to the whole document
			x.set(e.clientX);
			y.set(e.clientY);
		};

		window.addEventListener("mousemove", handleGlobalMouseMove);
		return () =>
			window.removeEventListener("mousemove", handleGlobalMouseMove);
	}, [x, y]);

	// 4. Transform mouse coordinates into a large radial gradient
	// We use window.innerWidth/Height to ensure the mapping stays proportional
	const background = useTransform(
		[smoothX, smoothY],
		([latestX, latestY]) => {
			return `radial-gradient(
        1000px circle at ${latestX}px ${latestY}px, 
        #60a5fa 0%, 
        #a855f7 35%, 
        #34d399 70%,
        #3b82f6 100%
      )`;
		},
	);

	return (
		<div className="py-8">
			<motion.h1
				style={{
					backgroundImage: background,
					WebkitBackgroundClip: "text", // Ensures compatibility for text-clipping
				}}
				className="text-7xl font-black bg-clip-text text-transparent mb-4 select-none cursor-default"
			>
				Ng Say Peng
			</motion.h1>
		</div>
	);
}
