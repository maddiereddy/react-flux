import {get} from "jquery";
import ServerActions from "./actions/ServerActions"

let API ={
	fetchLinks(){
		console.log("i am from api");
		get("/data/links").done(resp=>{
			ServerActions.receiveLinks(resp);
			console.log(resp);
		});
	}
};

export default API;