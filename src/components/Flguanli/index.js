import React,{Component} from 'react';
import "./index.css";
import Navfenlei from "../Comone/navfenlei";
class Flguanli extends Component{
	render(){
		return(
			<div id="flguanli">
				 <Navfenlei></Navfenlei>
				 
				<section>
	           	{
	              this.props.children
	           	} 
	       		</section>
			</div>
			)
	}
}
export default Flguanli