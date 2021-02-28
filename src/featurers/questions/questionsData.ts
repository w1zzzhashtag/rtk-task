import { QuestionsDataType } from "./questionsTypes";


export const QESTIONS_DATA: { [index: number]: QuestionsDataType } = {
  1: {
    question: 'Сколько вам лет?',
    options: [
      { id: 1, title: '18', checked: false },
      { id: 2, title: '19', checked: false },
      { id: 3, title: '20', checked: false },
      { id: 4, title: '21', checked: false },
      { id: 5, title: '22', checked: false },
      { id: 6, title: '23', checked: false },
      { id: 7, title: 'Меньше 18', checked: false },
      { id: 8, title: 'Больше 23', checked: false },
    ],
  },
  2: {
    question: 'Из какого вы города?',
    options: [
      { id: 1, title: 'Москва', checked: false },
      { id: 2, title: 'Санкт-Петербург', checked: false },
      { id: 3, title: 'Казань', checked: false },
      { id: 4, title: 'Ульяновск', checked: false },
      { id: 5, title: 'Самара', checked: false },
      { id: 6, title: 'Сызрань', checked: false },
      { id: 7, title: 'Сочи', checked: false },
      { id: 8, title: 'Владивосток', checked: false },
    ],
  },
  3: {
    question: 'Предпочитаемый график работы?',
    options: [
      { id: 1, title: 'Полный день', checked: false },
      { id: 2, title: 'Сменный график', checked: false },
      { id: 3, title: 'Гибкий график', checked: false },
      { id: 4, title: 'Удаленная работа', checked: false },
      { id: 5, title: 'Вахтовый метод', checked: false },
    ],
    isMultyple: true,
  },
  4: {
    question: 'Какие языки программирования вы знаете?',
    options: [
      { id: 1, title: 'JavaScript', checked: false },
      { id: 2, title: 'Java', checked: false },
      { id: 3, title: 'Python', checked: false },
      { id: 4, title: 'C++', checked: false },
      { id: 5, title: 'C#', checked: false },
      { id: 6, title: 'C', checked: false },
      { id: 7, title: 'PHP', checked: false },
    ],
    isMultyple: true,
  },
  5: {
    question: 'Какой у вас опыт работы?',
    options: [
      { id: 1, title: '2 года', checked: false },
      { id: 2, title: '3 года', checked: false },
      { id: 3, title: '4 года', checked: false },
      { id: 4, title: '5 года', checked: false },
      { id: 5, title: 'Меньше 2 лет', checked: false },
      { id: 6, title: 'Больше 5 лет', checked: false },
    ],
  },
  6: {
    question: 'На какую заработную плату вы рассчитываете?',
    options: [
      { id: 1, title: '40.000 рублей', checked: false },
      { id: 2, title: '50.000 рублей', checked: false },
      { id: 3, title: '60.000 рублей', checked: false },
      { id: 4, title: '70.000 рублей', checked: false },
      { id: 5, title: 'Больше 70.000 рублей', checked: false },
    ],
  },
  7: {
    question: 'Какие языка вы знаете?',
    options: [
      { id: 1, title: 'Английский', checked: false },
      { id: 2, title: 'Французский', checked: false },
      { id: 3, title: 'Японский', checked: false },
      { id: 4, title: 'Китайский', checked: false },
      { id: 5, title: 'Не знаю ни одного языка', checked: false },
    ],
    isMultyple: true,
  },
}