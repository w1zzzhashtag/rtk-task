import { combineReducers } from "@reduxjs/toolkit";
import questionsSlice from './../featurers/questions/questionsSlice'


const rootReducer = combineReducers({
  questions: questionsSlice
})

export default rootReducer