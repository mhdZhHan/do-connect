"use client"
import { useState } from 'react'
import '../styles/global.scss'
import { Header, Sidebar, Footer, CreateButton } from "@/components"

export default function RootLayout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const toggleSidebar = () => {
	  setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<html lang="en">
			<body className='layout light'>
				<div className="layout__container" >
					<Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
					<Sidebar isSidebarOpen={isSidebarOpen} />
					<main className={`layout__main ${isSidebarOpen ? `layout__wrapper` :``}`}>{ children }</main>
				</div>
				<Footer />
				<CreateButton />
			</body>
		</html>
	)
}
