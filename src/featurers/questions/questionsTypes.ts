

export type QuestionsType = {
  data: {[index: number]: QuestionsDataType};
  currentStep: number;
}

export type QuestionsDataType = {
  question: string;
  options: QuestionsDataOptionsType[];
  isMultyple?: true,
}

export type QuestionsDataOptionsType = {
  id: number;
  title: string;
  checked: boolean;
}