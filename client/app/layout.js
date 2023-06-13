"use client"
import { useEffect, useState } from 'react'
import '../styles/global.scss'
import { Header, Sidebar, Footer, CreateButton } from "@/components"

export default function RootLayout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [windowWidth] = useState(window.innerWidth)

	useEffect(() => {
		console.log(windowWidth);
		if(windowWidth < 763){
			setIsSidebarOpen(true)
		}
	}, [])

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
				{!isSidebarOpen && <div 
					className="layout__sidebar-overlay"
					onClick={() => setIsSidebarOpen(true)}
					>
				</div>}
				<Footer />
				<CreateButton />
			</body>
		</html>
	)
}
