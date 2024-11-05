'use client';

import * as React from 'react';
import { SetStateAction } from 'react';

type BaseInputProps = {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  setIsCorrect?: React.Dispatch<SetStateAction<boolean>>;
  type?: 'text' | 'number' | 'password' | 'email' | 'phone' | 'url';
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
} & React.ComponentProps<'input'>;

function Input({
  value,
  setValue,
  setIsCorrect = undefined,
  type = 'text',
  max = undefined,
  min = undefined,
  placeholder = undefined,
  disabled = false,
  ...props
}: BaseInputProps) {
  const emailRegex =
    /([\w-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const urlRegex = /https?:\/\/[\w\-\\.]+/g;
  const phoneRegex = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  const passwordRegex = /^.*(?=.{4,12})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  const handleOnClick = (event: React.FormEvent<HTMLInputElement>) => {
    switch (type) {
      case 'number':
        setValue(event.currentTarget.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
        break;
      case 'email':
        setValue(event.currentTarget.value);
        if (setIsCorrect !== undefined) {
          setIsCorrect(emailRegex.test(event.currentTarget.value));
        }
        break;
      case 'password':
        setValue(event.currentTarget.value);
        if (setIsCorrect !== undefined) {
          setIsCorrect(passwordRegex.test(event.currentTarget.value));
        }
        break;
      case 'phone':
        setValue(event.currentTarget.value);
        if (setIsCorrect !== undefined) {
          setIsCorrect(phoneRegex.test(event.currentTarget.value));
        }
        break;
      case 'url':
        setValue(event.currentTarget.value);
        if (setIsCorrect !== undefined) {
          setIsCorrect(urlRegex.test(event.currentTarget.value));
        }
        break;
      default:
        setValue(event.currentTarget.value);
    }
  };

  return (
    <input
      value={value}
      type={type === 'number' ? 'text' : type}
      disabled={disabled}
      onInput={(e) => handleOnClick(e)}
      placeholder={placeholder}
      maxLength={max}
      minLength={min}
      {...props}
    />
  );
}
export default Input;
