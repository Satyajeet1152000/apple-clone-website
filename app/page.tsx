import Hero from "@/components/Hero/Hero";
import Introducing from "@/components/Hero/Introducing";
import Ios18 from "@/components/Hero/Ios18";
import IpadOS from "@/components/Hero/IpadOS";
import MacOS from "@/components/Hero/MacOS";
import VisionOS from "@/components/Hero/VisionOS";
import WatchOS11 from "@/components/Hero/WatchOS11"

export default function Home() {
	return (
		<main>
			<Hero/>
			<Introducing />
			<Ios18 />
			<IpadOS />
			<MacOS />
			<WatchOS11 />
			<VisionOS />
		</main>
	);
}
