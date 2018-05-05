import {createStore,combineReducers,applyMiddleware,compose } from "redux" // 

import titleReducer from "../Reducers/titleReducer";

import reduxthunk from "redux-thunk";
import reduxpromise from "redux-promise";
//reducer 切割， (先将reducer 切割，写多个，合并成一个 reducer ,合并成一个状态 )

var reducer =combineReducers({
	titleReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxthunk,reduxpromise)
  ));

// const  store= createStore(reducer,applyMiddleware(reduxthunk)); //store 不能直接修改 ,必须通过reducer修改


export default store;