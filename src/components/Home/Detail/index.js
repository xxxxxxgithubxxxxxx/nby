import React,{ Component } from "react"
import "./index.css"
import axios from "axios"
import ReactSwipe from 'react-swipe';
class Detail extends Component {
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
		axios.get("/productdetail/993/m/1.phtml?1525394701348").then(res=>{
			console.log(res.data)
			this.setState({
				fcomponent:res.data
			})
		})
	}
	
	render(){
		return (
			<div id="box">
				
				<ReactSwipe className="carousel detail" swipeOptions={{continuous: true, auto: 3000}} key={this.state.looplist.length}>
			         {
			         	this.state.looplist.map(item=>
			         		<img src={"//oss.static.nubia.cn/" + item.small_image} key={item.id} />
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
				
				<div id="looptuijian">
					<p>
						为您推荐
					</p>
				</div>
				<div dangerouslySetInnerHTML={{__html: "<h1>爱死费崇政</h1>"}} />
				
				<div id="foot">
					// {this.state.fcomponent}
				</div>
				
				
	
				
				<footer>
					<span className="iconfont icon-service"></span>
					<i className="iconfont icon-favorite"></i>  
					
				</footer>
			</div>
		)
	}
}
export default Detail