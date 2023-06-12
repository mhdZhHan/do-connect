"use client"
import { useState } from 'react'
import '../styles/global.scss'
import { Header, Sidebar, Footer } from "@/components"

export default function RootLayout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	const toggleSidebar = () => {
	  setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<html lang="en">
			<body className='layout'>
				<div className="layout__container" >
					<Header toggleSidebar={toggleSidebar} />
					<Sidebar isSidebarOpen={isSidebarOpen} />
					<main className='layout__main'>{ children }</main>
				</div>
				<Footer />
			</body>
		</html>
	)
}
