import React,{Component} from 'react';
import "./index.css";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Navfenlei extends Component{
	constructor(){
		super();
		this.state={
			isshow:false
		}
	}
	render(){
		return(
			<div id="Navfenlei">
				<nav>
				<ul className="nav_ul">
				<li><i className="iconfont icon-back"  onClick={this.handblak.bind(this,1)}></i></li>
				<li>{this.props.mytitle}</li>
				<li><i className="iconfont icon-category" onClick={this.daohang.bind(this)}></i></li>
				</ul>
				</nav>
				{
				this.state.isshow?
				<ReactCSSTransitionGroup
			          transitionName="example"
			          transitionEnterTimeout={500}
			          transitionLeaveTimeout={300}>

				<div className="navfenlei_daohang">
				<ul className="navfenlei_daohang_ul">
					<li><NavLink to="/home">首页</NavLink></li>
					<li><NavLink to="/account">个人中心</NavLink></li>
					<li><NavLink to="/cart">购物车</NavLink></li>
				</ul>
				</div>
				</ReactCSSTransitionGroup>
				:null
				}
			</div>
			)
	}
	handblak(id){
		console.log("返回");

		// console.log(this.props.onBack);
		 // this.props.history.go(-1);
	}
	daohang(){
		this.setState({
			isshow:!this.state.isshow
		})
	}
}

export default connect(
	(state)=>{
		// console.log(state);
		return{
			mytitle:state.titleReducer
			}
	}
	)(Navfenlei)