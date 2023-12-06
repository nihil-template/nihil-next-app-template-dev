import { create } from 'zustand';

type State = {
  word: string;
}

export const exampleStore = create<State>(() => ({
  word: '',
}));

export const setWord = (value: string) => {
  exampleStore.setState({ word: value, });
};
