import { createStore, bindActionCreators } from "redux";
import "./index.css"
import reducer from "./reducer";
import * as actions from "./actions";

const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const update = document.querySelector('.update');
const random = document.querySelector('.random');
const mainNumber = document.querySelector('.main-number');
  
const store = createStore(reducer);


const updatef = () => {
    mainNumber.textContent = store.getState();
}


const {dispatch} = store;
const {incf, decf, updf, rndf} = bindActionCreators(actions, dispatch);


inc.addEventListener('click', incf);
dec.addEventListener('click', decf);
update.addEventListener('click', updf);
random.addEventListener('click', ()=>{
    const value = Math.floor(Math.random()*10);
    rndf(value);
});


mainNumber.textContent = 0;
store.subscribe(updatef);