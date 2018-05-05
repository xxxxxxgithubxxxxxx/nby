import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
import {connect} from "react-redux"
class Phone extends Component{
	constructor(){
		super();
		this.state={
			datalisPhone:[],
			isshow:false
		}
	}
	render(){
		return(
			<div id="Phone">
			{
				this.state.isshow?
				this.state.datalisPhone.map(item=>
				<ul className="Phone_ul" key={item.color_name} onClick={this.xiangqing.bind(this,item.sid)}>
				<li key={item.id}><img src={"https://oss.static.nubia.cn/"+item.image}/></li>
				<li key={item.sid}>
				<span>{item.product_name+item.color_name+item.spec_value}</span>
				<span>{item.price+"元"}</span>
				</li>
				</ul>
				)
				:null
			}
			</div>
			)
	}

	xiangqing(id){
		this.props.history.push(`/flguanli/product/${id}`);
	}
	componentDidMount(){
		/*// console.log(this.props.location)
		// console.log(localStorage.getItem("myid"))
		console.log(this.props.match.params.id);*/

		axios.get(`/show/page/searchPhone?productId=${this.props.match.params.id}`).then(res=>{
			 // console.log(res.data.split("[")[2]);
			 var str = res.data.split("[")[2];
			 var str1 =JSON.parse( "["+str.substring(0,str.length-2));
			 this.setState({
			 	datalisPhone:str1,
			 	isshow:true
			 })
			 console.log(this.state.datalisPhone);
		})
		this.props.myTitle("努比亚手机")
		// console.log(this.props.match.params.id);
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
	)(Phone)