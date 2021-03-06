import { createStore } from "redux";
import{Provider} from "react-redux";
import "./index.css"
import reducer from "./reducer";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));