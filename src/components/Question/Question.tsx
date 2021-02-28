import React from 'react'
import { ChecboxField, RadioField } from '..'
import { QuestionsDataType } from '../../featurers/questions/questionsTypes'
import styles from './Question.module.scss'

interface IProps {
  question: QuestionsDataType;
  setQuestion: React.Dispatch<React.SetStateAction<QuestionsDataType>>
}

const Question: React.FC<IProps> = ({ question, setQuestion }) => {
  
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, title: string) => {
    const { checked } = e.target
    setQuestion(prev => ({
      ...prev,
      options: prev.options.map(option => {
        if (option.title === title) {
          return { ...option, checked: checked }
        } return question.isMultyple
          ? option
          : { ...option, checked: false }
      })
    }))
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{question.question}</h1>

      <div className={styles.inner}>
        <p className={styles.subtitle}>
          {question.isMultyple
            ? 'Выберите один или несколько вариантов ответов:'
            : 'Выберите один вариант ответа:'
          }
        </p>
        {question.options.map(option => question.isMultyple
          ? <ChecboxField
            key={option.title}
            title={option.title}
            checked={option.checked}
            handleChecked={handleChecked} />
          : <RadioField
            key={option.title}
            name={question.question}
            title={option.title}
            checked={option.checked}
            handleChecked={handleChecked} />
        )}
      </div>
    </div>
  )
}

export default Question
