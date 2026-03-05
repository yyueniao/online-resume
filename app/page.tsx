import Header from "./Header";
import Body from "./Body";

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
