import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom"
import React from "react"

import App from "../components/App/App.js"
import Account from "../components/Account"
import Cart from "../components/Cart"
import Home from "../components/Home"
import Flguanli from "../components/Flguanli"
import Product from "../components/Flguanli/Product"
import Phone from "../components/Flguanli/Phone"
import Accessory from "../components/Flguanli/Accessory"
import Fenlei from "../components/Flguanli/Fenlei"
import {Provider} from "react-redux";
import store from "../Redux/Store"
import Detail from "../components/Home/Detail"
import Peijian from "../components/Flguanli/Peijian"
/*import Product from "../components/Fenlei/Product"
import Phone from "../components/Fenlei/Phone"
import Accessory from "../components/Fenlei/Accessory"*/
const router= (
	<Provider store={store}>
	<Router>
		<App>
			<Switch>
			<Route path="/home" component={Home} />
			<Route path="/account" component={Account} />
			<Route path="/cart" component={Cart} />
			<Route path="/fenlei" component={Fenlei} />
			<Route path="/detail/:id" component={Detail} />
			<Route path="/flguanli" render={()=>
				<Flguanli>
					<Switch>
						<Route path="/flguanli/product/:id" component={Product} />
						<Route path="/flguanli/phone/:id" component={Phone} />
						<Route path="/flguanli/accessory/:id" component={Accessory} />
						<Route path="/flguanli/peijian" component={Peijian} />
						<Route path="/flguanli/fenlei" component={Fenlei} />
						<Redirect from="/flguanli" to="/flguanli/fenlei" />
					</Switch>
				</Flguanli>
			}/>

			<Redirect from="*" to="/home" />
			</Switch>
		</App>
	</Router>
	</Provider>
	)

export default router;