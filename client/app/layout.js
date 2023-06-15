"use client"
import { useEffect, useState } from 'react'
import '@/styles/global.scss'
import { Header, Sidebar, Footer, CreateButton, AuthForm } from "@/components"

export default function RootLayout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isAuthFormOpen, setIsAuthFormOpen] = useState(false)
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

	const toggleAuthForm = () => {
		setIsAuthFormOpen(!isAuthFormOpen)
	}

	return (
		<html lang="en">
			<body className='layout light'>
				<div className="layout__container">
					<Header 
						isSidebarOpen={isSidebarOpen} 
						toggleSidebar={toggleSidebar} 
						toggleAuthForm={toggleAuthForm}
					/>
					<Sidebar isSidebarOpen={isSidebarOpen} />
					<main className={`layout__main ${isSidebarOpen ? `layout__wrapper` :``}`}>{ children }</main>
				</div>
				{!isSidebarOpen || isAuthFormOpen && <div 
					className="layout__sidebar-overlay"
					onClick={() => setIsSidebarOpen(true)}
					>
				</div>}
				{isAuthFormOpen && <AuthForm toggleAuthForm={toggleAuthForm} />}
				<Footer />
				<CreateButton />
			</body>
		</html>
	)
}
