import React,{Component} from 'react';
import "./index.css";
import logo from "./20180428230526.png"
import axios from "axios";
import ReactSwipe from 'react-swipe';
import {NavLink} from "react-router-dom"
class Home extends Component{
	constructor(){
		super();
		this.state={
			looplist:[],
			asideimg:"",
			asideright1:"",
			asideright2:"",
			banner1:"",
			datalist:[],
			banner2:"",
			datalist2:[],
			
		}
	}
	componentWillMount(){
		axios.get("/show/page/block?pageType=5").then(res=>{
			console.log(res.data.data)
			this.setState({
				looplist:res.data.data["501"],
				asideimg:res.data.data["502"][0],
				asideright1:res.data.data["503"][0],
				asideright2:res.data.data["504"][0],
				banner1:res.data.data["504"][0],
				datalist:res.data.data["506"],
				banner2:res.data.data["508"][0],
				datalist2:res.data.data["505"],
				
			})
		})
	}
	handleClick(id){
		this.props.history.push(`/flguanli/product/${id}`)
	}
	render(){
		return(
			<div id="home">
				<nav className="home_nav">
					<div id="left">
						<img src={logo}/>
					</div>
					<div id="right">
						<NavLink to="/login" >
							<span> 
								<i className="iconfont icon-account"></i>  
								登录
							</span>
						</NavLink>
					</div>
				</nav>
				
				
           		<ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 3000}} key={this.state.looplist.length}>
			         {
			         	this.state.looplist.map(item=>
			         		<img src={"http://oss.static.nubia.cn/" + item.small_image} key={item.id} onClick={this.handleClick.bind(this,item.id)}/>
			         	)
			         }
				</ReactSwipe>
				
				
				<div id="asider">
					<div id="left" onClick={this.handleClick.bind(this,this.state.asideimg.id)}>
						<img src={"http://oss.static.nubia.cn/" + this.state.asideimg.small_image } />
					</div>
					<div id="right">
						<div onClick={this.handleClick.bind(this,this.state.asideright1.id)}>
						<img src={"http://oss.static.nubia.cn/" +this.state.asideright1.small_image } />
							
						</div>
						
						<div onClick={this.handleClick.bind(this,this.state.asideright2.id)}>
						<img src={"http://oss.static.nubia.cn/" +this.state.asideright2.small_image } />
						</div>
					</div>
				</div>
				
				<div id="first">
					<p id="hot">
						热销机型
					</p>
					<div id="banner" onClick={this.handleClick.bind(this,this.state.banner1.id)}>
						<img src={"http://oss.static.nubia.cn/" +this.state.banner1.small_image } />
					</div>
					
					<ul>
						{
				         	this.state.datalist.map(item=>
				         		<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
				         			<div id="new">
				         				{item.block_products.sale_point.block_image_icon.text}
				         			</div>
				         			<div id="dian">
				         			</div>
				         			<img src={"http://oss.static.nubia.cn/" + item.small_image } />
				         			<p id="title">
				         				{item.title}
				         			</p>
				         			<p id="price">
				         				<span>$</span>
				         				<span>{item.block_products.original_price}</span>
				         				<span>|</span>
				         				<span><del>{item.block_products.price}</del></span>
				         				
				         			</p>
				         			
				         		</li>
				         	)
				        }
					</ul>
					<NavLink to="/flguanli/fenlei">
						<p id="more">
	         				查看更多商品>
					    </p>
				    </NavLink>
				</div>
					
				<div id="second">
					<p id="hot">
						精选配件
					</p>
					
					<div id="banner" onClick={this.handleClick.bind(this,this.state.banner2.id)}>
						<img src={"http://oss.static.nubia.cn/" +this.state.banner2.small_image } />
					</div>
					
					<ul>
						{
				         	this.state.datalist2.map(item=>
				         		<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
				         			
				         			<img src={"http://oss.static.nubia.cn/" + item.small_image} />
				         			<p id="title">
				         				{item.title}
				         			</p>
				         			<p id="price">
				         				<span>$</span>
				         				<span>{item.block_products.original_price}</span>
				         				
				         				
				         			</p>
				         		</li>
				         	)
				        }
					</ul>
					<NavLink to="/flguanli/peijian">
						<p id="more">
	         				查看更多配件>
					    </p>
				    </NavLink>
				</div>
				
				
				
			
			</div>
		)
	}
}
export default Home