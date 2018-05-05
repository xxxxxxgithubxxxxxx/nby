import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
import {connect} from "react-redux"
class Peijian extends Component{

	constructor(){
		super();
		this.state={
			datalisPeijian:[],
			isshow:false
		}
	}

	render(){
		return(
			<div id="Peijian">
			{
				this.state.isshow?
				this.state.datalisPeijian.map(item=>
				<ul className="Peijian_ul" onClick={this.pruduct.bind(this,item.id)}>
					<li><img src={"https://oss.static.nubia.cn/"+item.image}/></li>
					<li>{item.product_name}</li>
					<li>{item.price}元</li>
				</ul>
				)
				:null
			}
			</div>
			)
	}
pruduct(id){
		console.log(id);
		this.props.history.push(`/flguanli/product/${id}`);
	}
	componentDidMount(){
		axios.get("/show/page/searchAcc").then(res=>{
		 var str=res.data.split("[")[2];
		 var str1 =JSON.parse("["+str.substring(0,str.length-2));
		console.log(str1);
		this.setState({
			datalisPeijian:str1,
			isshow:true
		})
		})
		this.props.myTitle("配件")
	}
}
export default connect(
		null,
		{
			myTitle:(data)=>{
				return{
					type:"myTitle",
					payload:data
				}
			}
		}
	)(Peijian)