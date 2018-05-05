import {createStore,combineReducers,applyMiddleware,compose } from "redux" // 

import titleReducer from "../Reducers/titleReducer";

import reduxthunk from "redux-thunk";
import reduxpromise from "redux-promise";
//reducer �и (�Ƚ�reducer �ид������ϲ���һ�� reducer ,�ϲ���һ��״̬ )

var reducer =combineReducers({
	titleReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxthunk,reduxpromise)
  ));

// const  store= createStore(reducer,applyMiddleware(reduxthunk)); //store ����ֱ���޸� ,����ͨ��reducer�޸�


export default store;