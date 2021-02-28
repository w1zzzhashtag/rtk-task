import React from 'react'
import { Button } from '..'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { resetState } from '../../featurers/questions/questionsSlice'
import styles from './Result.module.scss'

const Result: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(state => state.questions)

  const goToStart = () => dispatch(resetState())
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ваши ответы на вопросы:</h1>
      {Object.keys(data)
        .map(item => Number(item))
        .map(item => (
          <div key={item} className={styles.question}>
            <h2 className={styles.question__title}>
              {data[item].question}
            </h2>
            <div className={styles.answers}>
              {data[item].options.filter(option => option.checked).map(option => (
                <span
                  key={option.id}
                  className={styles.answers__item}
                >
                  {option.title}
                </span>
              ))}
            </div>
          </div>
        ))}

        <Button handleClick={goToStart} customClassName={styles.button}>
          Пройти еще раз
        </Button>
    </div>
  )
}

export default Result
