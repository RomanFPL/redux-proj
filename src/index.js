import { createStore } from "redux";
import "./index.css"

const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const update = document.querySelector('.update');
const mainNumber = document.querySelector('.main-number');


const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
        case "UPT":
            return state = 0
        default:
            return state;
            }
        }
                
const store = createStore(reducer);
        

mainNumber.textContent = 0;

store.subscribe(() => {
    mainNumber.textContent = store.getState();
})

const incf = () => {return {type: "INC"}}
const decf = () => {return {type: "DEC"}}
const updf = (value) => {return {type: "UPT"}}

console.log(incf())

inc.addEventListener('click', ()=>{
    store.dispatch(incf());
});

dec.addEventListener('click', ()=>{
    store.dispatch(decf());
});

update.addEventListener('click', ()=>{
    store.dispatch(updf());
});