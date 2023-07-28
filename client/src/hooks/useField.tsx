import { useState } from 'react';

export default function useField() {
  const [value, setValue] = useState({});
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return { value, handleInput };
}
