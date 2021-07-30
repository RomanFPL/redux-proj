import { createStore, bindActionCreators } from "redux";
import{Provider} from "react-redux";
import "./index.css"
import reducer from "./reducer";
import * as actions from "./actions";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";

const store = createStore(reducer);



// const {dispatch} = store;
// const {incf, decf, updf, rndf} = bindActionCreators(actions, dispatch);


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// count={store.getState()}
// inc={incf}
// dec={decf}
// upd={updf}
// rnd={ () => {
//     const value = Math.floor(Math.random()*10);
//     rndf(value);
// }
// }