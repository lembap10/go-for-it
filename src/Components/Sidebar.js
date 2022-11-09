import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '80vh', overflow: 'scroll initial', margin: 0 }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            GoForIt
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/createtrip/date" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">Dates</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createtrip/travelers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Travelers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createtrip/budget" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="dollar">Budget</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Activities</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Vibe</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createtrip/invite" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="share">Invite</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;