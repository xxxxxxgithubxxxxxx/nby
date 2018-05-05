import React,{Component} from 'react';
import "./index.css";
import axios from "axios";
import {connect} from "react-redux"
import ReactSwipe from 'react-swipe';
class Product extends Component{
	constructor(){
		super();
		this.state={
			looplist:[],
			fcomponent:''
		}
	}
	componentWillMount(){
		 axios.get("/show/page/block?pageType=5").then(res=>{
		 	console.log(res.data.data)
		 	this.setState({
				looplist:res.data.data["501"],
		 	})
		 })
	}

	render(){
		return(
			<div id="box">
					<ReactSwipe className="carousel detail" swipeOptions={{continuous: true, auto: 3000}} key={this.state.looplist.length}>
				         {
				         	this.state.looplist.map(item=>
				         		<img className="box-img" src={"//oss.static.nubia.cn/" + item.small_image} key={item.id} />
				         	)
				         }
					</ReactSwipe>
					
					<p id="peizhi">
						Z18mini  青瓷蓝  6GB + 64GB
					</p>
					
					<p id="red">
						2400万双摄/高通骁龙660AIE 处理器/3D曲面玻璃机身
					</p>
					<p id="may">
						下轮开售时间5月10日10点
					</p>
					<p id="money">
						$1799.00元
					</p>
					
					<p id="cx">
						促销
					</p>
					
					<div id="send">
						<p>
							<i>
								赠牛斗
							</i>
							购买完成可获得与支付金额相同数目的牛斗
						</p>
						<p>
							<i>
								包邮
							</i>
							普通和青铜会员满59、白银满39、黄金以上包邮
						</p>
					</div>
					
					<div id="yanse">
						<p id="zi">
							颜色
						</p>
						<p id="left" >
							<span></span>
							耀钻黑
						</p>
						<p id="right">
							<span></span>
							青瓷蓝
						</p>
					
					</div>
					
					<div id="guige">
						<p id="zi">
							规格
						</p>
						<p id="left" >
							6GB + 64GB
						</p>
						
					
					</div>
					
					<div dangerouslySetInnerHTML={{__html: this.state.fcomponent}} />
					<footer>
						<span className="iconfont icon-service"></span>
						<i className="iconfont icon-favorite"></i>  
						
					</footer>
			</div>
			)
	}
	componentDidMount(){
		/*// console.log(this.props.location)
		// console.log(localStorage.getItem("myid"))
		axios.get("/show/page/block?pageType=5").then(res=>{
			 console.log(res.data.data);
		})*/

		axios.get(`/productdetail/${this.props.match.params.id}/m/1.phtml?1525394701348`).then(res=>{
			this.setState({
				fcomponent:res.data
			})
		})

		Promise.all([axios.get(),axios.get()]).then(res=>{
		})
		// console.log(localStorage.getItem("myid"),123)
		console.log(this.props.match.params.id);
		this.props.myTitle("商品详情")
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
	)(Product)