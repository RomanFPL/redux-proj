import { createStore, bindActionCreators } from "redux";
import "./index.css"
import reducer from "./reducer";
import * as actions from "./actions";
import React from "react";
import ReactDom from "react-dom";
import Counter from "./counter";

// const inc = document.querySelector('.inc');
// const dec = document.querySelector('.dec');
// const update = document.querySelector('.update');
// const random = document.querySelector('.random');
// const mainNumber = document.querySelector('.main-number');
  
const store = createStore(reducer);



const {dispatch} = store;
const {incf, decf, updf, rndf} = bindActionCreators(actions, dispatch);


const updatef = () => {
    ReactDom.render(<Counter 
        count={store.getState()}
        inc={incf}
        dec={decf}
        upd={updf}
        rnd={ () => {
            const value = Math.floor(Math.random()*10);
            rndf(value);
        }
        }
    />, document.getElementById('root'));
}

updatef();

// inc.addEventListener('click', incf);
// dec.addEventListener('click', decf);
// update.addEventListener('click', updf);
// random.addEventListener('click', ()=>{
//     const value = Math.floor(Math.random()*10);
//     rndf(value);
// });


// mainNumber.textContent = 0;
store.subscribe(updatef);

