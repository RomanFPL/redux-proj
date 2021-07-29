import { createStore } from "redux";
import "./index.css"
import reducer from "./reducer";
import {incf, decf, updf, rndf} from "./actions";

const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const update = document.querySelector('.update');
const random = document.querySelector('.random');
const mainNumber = document.querySelector('.main-number');


  
const store = createStore(reducer);
        

mainNumber.textContent = 0;

store.subscribe(() => {
    mainNumber.textContent = store.getState();
})

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
}


const {dispatch} = store;
// const incDispatch = () => dispatch(incf()); this function is refactored.
const incDispatch = bindActionCreator(incf, dispatch);
const decDispatch = bindActionCreator(decf, dispatch);
const updDispatch = bindActionCreator(updf, dispatch);
const rndDispatch = bindActionCreator(rndf,dispatch);


inc.addEventListener('click', ()=>{incDispatch()});

dec.addEventListener('click', ()=>{decDispatch()});

update.addEventListener('click', ()=>{updDispatch()});

random.addEventListener('click', ()=>{
    const value = Math.floor(Math.random()*10);
    console.log(value)
    rndDispatch(value)
});