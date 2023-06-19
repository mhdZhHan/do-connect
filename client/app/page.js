import { Banner, CreateButton } from "@/components"
import ListControls from "@/components/common/listControls/ListControls"

export const metadata = {
	title: 'DoConnect | Home',
	description: 'DoConnect. A community for doctors',
}

export default function Home() {
	return (
		<section id="home">
			<Banner />
			<div className="separator"></div>
			<ListControls />
			<CreateButton btnText="New Topic" />
		</section>	
	)
}
