import { HomeBanner } from "@/components"

export const metadata = {
	title: 'Doc Connect | Home',
	description: 'Doc Connect community',
}

export default function Home() {
	return (
		<section id="home">
			<HomeBanner />
		</section>	
	)
}
