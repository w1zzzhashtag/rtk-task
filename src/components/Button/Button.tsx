import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface IProps {
  children: React.ReactNode
  handleClick: () => void
  customClassName?: string
}

const Button: React.FC<IProps> = ({ children, handleClick, customClassName }) => {
  return (
    <button
      className={cn(styles.button, customClassName)}
      onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
