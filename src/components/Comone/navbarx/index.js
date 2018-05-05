import React,{Component} from 'react';
import "./index.css";
import {NavLink} from "react-router-dom";
class Navbarx extends Component{
	render(){
		return(
			<div id="Navbarx">
				<nav>
				<ul>
				<li><NavLink to="/home" activeClassName="active"><span><i className="iconfont icon-mobilephone"></i>首页</span></NavLink></li>
				<li><NavLink to="/flguanli" activeClassName="active"><span><i className="iconfont icon-viewgallery"></i>分类</span></NavLink></li>
				<li><NavLink to="/cart" activeClassName="active"><span><i className="iconfont icon-cart"></i>购物车</span></NavLink></li>
				<li><NavLink to="/account" activeClassName="active"><span><i className="iconfont icon-account"></i>我</span></NavLink></li>
				</ul>
				</nav>
			</div>
			)
	}
}
export default Navbarx