import React from "react";
import { Wrapper } from "./RouteParent.style";
import { Outlet } from "react-router-dom";
import Navbar from '../../Components/navbar/Navbar.jsx'
import Sidebar from '../../Components/sidebar/Sidebar.jsx'

function RouteParent() {
	return (
		<>
			<Sidebar />
			<>
				<Wrapper>
					<Navbar />
					<Outlet />
				</Wrapper>
			</>
		</>
	);
}

export default RouteParent;
