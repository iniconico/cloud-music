import React from "react";
import { NavLink } from "react-router-dom";
import { Tab, TabItem, Top } from "./style";
import { Outlet } from 'react-router';

function Home() {

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Cloud Music</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to={"/recommend"} className={({ isActive }) => (isActive ? "selected" : "")}>
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to={"/singers"} className={({ isActive }) => (isActive ? "selected" : "")}>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to={"/rank"} className={({ isActive }) => (isActive ? "selected" : "")}>
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <Outlet/>
    </div>
  );
}

export default React.memo(Home);
