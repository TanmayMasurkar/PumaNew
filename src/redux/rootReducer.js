import { combineReducers } from 'redux';
import authReducer from './auth/Reducer';
import categoryReducer from './category/Reducer';
import productReducer from './product/Reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  cateStore: categoryReducer,
  proStore:productReducer,
});

export default rootReducer;