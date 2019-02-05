import { createStore, compose } from "redux";
import rootReducer from "./reducers";

import DevTools from '../containers/DevTools';

const enhancer = compose(
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

export default createStore(rootReducer, {}, enhancer);
