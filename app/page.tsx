import Header from "./header/Header";
import Body from "./body/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ng Say Peng | Online Resume: Software Developer",
	description: "Built with Next.js 16 and TypeScript",
};

export default function Portfolio() {
	return (
		<div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
			<div className="max-w-4xl mx-auto px-6 py-20">
				<Header />
				<Body />
			</div>
		</div>
	);
}
