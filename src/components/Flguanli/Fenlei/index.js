import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
import {connect} from "react-redux"
class Fenlei extends Component{
	constructor(){
		super();
		this.state={
			datalistred:[],
			datalistpeijian:[],
			datalistzhoubian:[],
			datalistphone:[],
			isshow:false
		}
	}
	render(){
		return(
				<div id="fenlei">
				{
				this.state.isshow?
					/*红魔手机*/
				<div className="fenlei_hongmo">
					<p>{this.state.datalistred[0].product_name}</p>
					<ul className="fenlei_hongmo_ul">
						<li onClick={this.producth.bind(this,this.state.datalistred[0].product_id,"1001")}><a href="#">
							<img src={"https://oss.static.nubia.cn/"+this.state.datalistred[0].image_id} />
							<span>6GB+64GB</span>
							</a>
						</li>
						<li onClick={this.producth.bind(this,this.state.datalistred[0].product_id)}>
							<a href="#">
							<img src={"https://oss.static.nubia.cn/"+this.state.datalistred[0].image_id}  />
							<span>8GB+128GB</span>
							</a>
						</li>
					</ul>
					<strong></strong>
					{/*手机部分*/}
					<p>手机</p>
					<div className="fenlei_phone">
						<ul className="fenlei_phone_ul">
						{ 
							this.state.datalistphone.map(item=>
							<li key={item.product_id} onClick={this.phone.bind(this,item.product_id)}>
							<a href="#">
								<img src={"https://oss.static.nubia.cn/"+item.image_id}/>
								<span>{item.product_name}</span>
							</a>
							</li>
							)
						}
						</ul>
					</div>
					<strong></strong>
				{/*配件*/}
				<p>配件</p>
				<div className="fenlei_peijian">
					<ul className="fenlei_peijian_ul">
						{
							this.state.datalistpeijian.map(item=>
								<li key={item.cate_id} onClick={this.accessory.bind(this,item.cate_id)}>
								<img src={"https://oss.static.nubia.cn/"+item.image_id} />
								<span>{item.cate_name}</span>
								</li>
								)
						}
					</ul>
				</div>
				{/*周边产品*/}
				<strong></strong>
				<p>周边产品</p>
				<div className="fenlei_zhoubian">
					<ul className="fenlei_zhoubian_ul">
						{
							this.state.datalistzhoubian.map(item=>
								<li key={item.product_id} onClick={this.producth.bind(this,item.product_id)}>
								<img src={"https://oss.static.nubia.cn/"+item.image_id} />
								<span>{item.product_name}</span>
								</li>
								)
						}
					</ul>
				</div>


				</div>
				:null
			}
			</div>
		
			)
	}

producth(id,sid){
	// console.log(id);
	// console.log(this.props.history.push);
	localStorage.setItem("myid",sid) ;
	this.props.history.push(`/flguanli/product/${id}`);
}
phone(id){
	this.props.history.push(`/flguanli/phone/${id}`);
}
accessory(id){
	this.props.history.push(`/flguanli/accessory/${id}`);
}
	componentDidMount(){
		Promise.all([axios.get("/show/page/catePhone"),axios.get("/show/page/cateAcc"),
			axios.get("/show/page/cateZb")]).then(res=>{
			// console.log(res[1].data);
		 var str=res[0].data.split("[")[2];
		 var str1 ="["+str.substring(0,str.length-2);
		 var objstr=JSON.parse(str1);
		 // 保护壳数据
		 var strpeijian = res[1].data.split("[")[2];
		 var strpeijian1 = "["+strpeijian.substring(0,strpeijian.length-2);
		 var objpeijian1= JSON.parse(strpeijian1);
		 // console.log(objpeijian1);
		 // 周边产品数据
		 var strzhoubian = res[2].data.split("[")[2];
		 var strzhoubian1 = "["+strzhoubian.substring(0,strzhoubian.length-2);
		 var objzhoubian1 = JSON.parse(strzhoubian1);
		 // console.log(objzhoubian1);
		if(typeof(res[0].data) == "string")
		{
			var datalistphone1 = [];
			//这里是取出一个12行的数组
			for(let i=1;i<objstr.length;i++){
				datalistphone1.push(objstr[i])
			}
			console.log(datalistphone1);
			this.setState({
			 datalistred:objstr,
			 datalistpeijian:objpeijian1,
			 datalistzhoubian:objzhoubian1,
			 datalistphone:datalistphone1,
			 isshow:true
		})
			console.log(this.state.datalistred);
			console.log(this.state.datalistpeijian);
			console.log(this.state.datalistzhoubian);
		}
		else{
			this.setState({
			datalistred:res.data.data.result,
			datalistzhoubian:res.data.data.result,
			 datalistpeijian:res.data.data.result,
			 isshow:true
		})
		}
	})
		this.props.myTitle("商品分类")
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
	)(Fenlei)