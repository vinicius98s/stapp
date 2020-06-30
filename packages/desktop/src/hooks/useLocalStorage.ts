import { useState } from 'react';

type ValueAsFn<T> = (prevValue?: T) => T;

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ValueAsFn<T>) => void] => {
  const parseJsonItem = (item: unknown): T => {
    try {
      return JSON.parse(item as string);
    } catch (e) {
      return item as T;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window?.localStorage.getItem(key);

      if (item) return parseJsonItem(item);

      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: ValueAsFn<T> | T): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window?.localStorage.setItem(
        key,
        typeof valueToStore === 'string'
          ? valueToStore
          : JSON.stringify(valueToStore)
      );
    } catch (error) {
      console.error(`Failed to update key '${key}' at localStorage`);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
