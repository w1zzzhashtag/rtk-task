import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QESTIONS_DATA } from "./questionsData";
import { QuestionsDataType, QuestionsType } from "./questionsTypes";



const initialState: QuestionsType = {
  data: QESTIONS_DATA,
  currentStep: 1,
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setChangedData: (state, action:PayloadAction<QuestionsDataType>) => {
      const {data, currentStep} = state
      data[currentStep] = action.payload
    },
    setNextStep: (state) => {
      state.currentStep++
    },
    resetState: (state) => {
      state.data = QESTIONS_DATA
      state.currentStep = 1
    },
  }
})

export const {
  setNextStep, setChangedData, resetState
} = questionsSlice.actions
export default questionsSlice.reducer