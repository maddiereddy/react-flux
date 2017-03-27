import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";

let links = [];
class LinkStore extends EventEmitter{
	constructor(props){
		super(props);

		AppDispatcher.register(action =>{
			switch(action.actionType){
				case ActionTypes.RECEIVE_LINKS:
				links = action.links;
				console.log("In store");
				this.emit("change");
				break;
			 default:
			}
		});
	}

	getAll(){
		return links;
	}
}

export default new LinkStore();