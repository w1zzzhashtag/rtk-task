import React from 'react'

interface IProps {
  name: string;
  title: string;
  checked: boolean;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>, title: string) => void
}

const RadioField: React.FC<IProps> = ({ name, title, checked, handleChecked }) => {
  return (
    <div className="field__wrapper">
      <input
        type="radio"
        id={title}
        name={name}
        value={title}
        checked={checked}
        className="field"
        onChange={(e) => handleChecked(e, title)} />
      <label htmlFor={title} className="field__title">{title}</label>
    </div>
  )
}

export default RadioField
