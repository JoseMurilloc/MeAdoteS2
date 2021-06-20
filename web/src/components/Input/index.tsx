import React, { 
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState
} from 'react';
import { Field } from 'formik'
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: string;
  containerStyle?: object;
  placeholderLabel: string;
  isError?: boolean | "";
}

const Input: React.FC<InputProps> = (
  { 
    name,
    placeholderLabel,
    containerStyle = {},
    icon, 
    isError = false,
    ...rest
  }
) => {
  
  const [ isFocus, setIsFocus ] =useState(false);
  const [ isFilled, setIsFilled ] =useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, [])

  const handleInputBluer = useCallback(() => {
    
    if (inputRef.current?.value) 
      setIsFilled(true)
    else 
      setIsFilled(false)

    setIsFocus(false);
  }, []);


  return (
    <Container 
      style={containerStyle}
      isFilled={isFilled}
      isFocus={isFocus}
      isError={!!isError}
    >
      <img src={icon} alt="Input icon" />
      <Field
        id={name}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBluer}
        ref={inputRef}
        placeholder={placeholderLabel}
        {...rest}
      />
    </Container>
  );
};

export default Input;