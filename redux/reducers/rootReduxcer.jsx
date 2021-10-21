import { combineReducers } from "redux";
import { getSummary } from "../action/getSummary";
import { getByCountry } from "../action/getByCountry";

export const reducers = combineReducers({
  getByCountry,
  getSummary,
});
