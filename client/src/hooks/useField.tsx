import { useState } from 'react';

export default function useField<T>(initialState: T) {
  const [value, setValue] = useState<T>({ ...initialState });
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return [value, changeValue] as const;
}
