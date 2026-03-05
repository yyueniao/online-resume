const fadeInUp = {
	initial: {
		opacity: 0,
		y: 60,
	},
	whileInView: {
		opacity: 1,
		y: 0,
	},
	viewport: {
		once: true,
		amount: 0.2,
		margin: "0px 0px -100px 0px",
	},
	transition: {
		type: "spring" as const,
		stiffness: 50,
		damping: 15,
		mass: 1.2,
		delay: 0.1,
	},
};
export { fadeInUp };
