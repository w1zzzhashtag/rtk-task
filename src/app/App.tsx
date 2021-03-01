import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

import { QuestionsDataType } from './../featurers/questions/questionsTypes'
import { setChangedData, setNextStep } from '../featurers/questions/questionsSlice';
import { Button, Question, Result } from '../components';

import './App.scss'


const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const { data, currentStep } = useAppSelector(state => state.questions)
  const [questionOnCurrentStep, setQuestionOnCurrentStep] = React.useState<QuestionsDataType>(data[currentStep])
  const [totalSteps, setTotalSteps] = React.useState(0)

  React.useEffect(() => setQuestionOnCurrentStep(data[currentStep]), [data, currentStep])
  React.useEffect(() => setTotalSteps(Object.keys(data).length), [data])

  const nextStepIsNotAvailable = () => (questionOnCurrentStep.options.every(item => !item.checked))

  const handleNextStep = () => {
    if (nextStepIsNotAvailable()) alert('Выебрите вариант овтета!')
    else {
      dispatch(setChangedData(questionOnCurrentStep))
      dispatch(setNextStep())
    }
  }

  return (
    <div className="app">
      <div className="container">
        {currentStep > totalSteps
          ? <Result />
          : questionOnCurrentStep && <>
            <Question
              question={questionOnCurrentStep}
              setQuestion={setQuestionOnCurrentStep} />
            <div className="question-button__wrappper">
              <Button handleClick={handleNextStep}>
                Далее
              </Button>
            </div>
            <div className="step-counter">
              {currentStep}/{totalSteps}
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
