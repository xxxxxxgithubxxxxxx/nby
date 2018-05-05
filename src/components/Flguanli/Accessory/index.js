import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
import {connect} from "react-redux"
class Accessory extends Component{
	constructor(){
		super();
		this.state={
			datalisAccessory:[],
			isshow:false
		}
	}
	render(){
		return(
			<div id="Accessory">
			{
				this.state.isshow?
				this.state.datalisAccessory.map(item=>
				<ul className="accessory_dl" onClick={this.xiangqing.bind(this,item.id)}>
					<li><img src={"https://oss.static.nubia.cn/"+item.image}/></li>
					<li>{item.product_name}</li>
					<li>{item.price}</li>
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
		*/
		console.log(this.props.match.params.id);
		axios.get(`/show/page/searchAcc?productId=0&cateId=${this.props.match.params.id}`).then(res=>{
			 var str = res.data.split('[')[2];
			 var str1 = JSON.parse("["+str.substring(0,str.length-2));
			this.setState({
				datalisAccessory:str1,
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
	)(Accessory)