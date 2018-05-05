var titleReducer = (prevstate="商品分类",data={})=>{
	//prevpstate -> 前一个状态 
	//data -> 当前action
	
	let {type,payload} = data;


	switch(type){
		case "myTitle":
			return payload;
		default:
			return prevstate;
	}

	return prevstate;	// 返回是什么， 状态就被改成什么
}


export default titleReducer;