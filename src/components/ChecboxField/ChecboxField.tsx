import React from 'react'

interface IProps {
  title: string;
  checked: boolean;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>, title: string) => void
}

const ChecboxField: React.FC<IProps> = ({ title, checked, handleChecked }) => {
  return (
    <div className="field__wrapper">
      <input
        type="checkbox"
        id={title}
        name={title}
        checked={checked}
        className="field"
        onChange={(e) => handleChecked(e, title)} />
      <label htmlFor={title} className="field__title">{title}</label>
    </div>
  )
}

export default ChecboxField
