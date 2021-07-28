import { createStore } from "redux";
import "./index.css"
import reducer from "./reducer";
import {incf, decf, updf} from "./actions";

const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const update = document.querySelector('.update');
const mainNumber = document.querySelector('.main-number');


  
const store = createStore(reducer);
        

mainNumber.textContent = 0;

store.subscribe(() => {
    mainNumber.textContent = store.getState();
})


const {dispatch} = store;
const incDispatch = () => dispatch(incf());
const decDispatch = () => dispatch(decf());
const updDispatch = () => dispatch(updf());


inc.addEventListener('click', ()=>{incDispatch()});

dec.addEventListener('click', ()=>{decDispatch()});

update.addEventListener('click', ()=>{updDispatch()});