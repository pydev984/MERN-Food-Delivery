import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
// import businessReducer from "reducers/businesses_reducer";
// import hourReducer from "reducers/hours_reducer";
// import categoryReducer from "reducers/categories_reducer";
import groupsReducer from "./groups_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  //   businesses: businessReducer,
  //   hours: hourReducer,
  //   categories: categoryReducer,
  groups: groupsReducer
});

export default entitiesReducer;
