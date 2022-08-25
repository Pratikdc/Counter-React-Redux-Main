import { composeWithDevTools } from "redux-devtools-extension";
import {
  legacy_createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { reducer } from "../count/reducer";
// import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

function createStore() {
  return reduxCreateStore(
    combineReducers({
      counter: reducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default createStore