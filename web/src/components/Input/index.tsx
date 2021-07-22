import React, { 
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState
} from 'react';
import { Field, FieldAttributes } from 'formik'
import { Container } from './styles';
import InputMask from 'react-input-mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  containerStyle?: object;
  placeholderLabel: string;
  isError?: boolean | "";
  useMask?: boolean
}

const Input: React.FC<InputProps> = (
  { 
    name,
    placeholderLabel,
    containerStyle = {},
    icon, 
    isError = false,
    useMask = false,
    value,
    ...rest
  }
) => {
  
  const [ isFocus, setIsFocus ] =useState(false);
  const [ isFilled, setIsFilled ] =useState(false);
  
  const maskOptions: any = {
    cpf: '999.999.999-99',
    contact_whatsapp: '(99) 99999-9999',
  }
  
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
      {icon && (
        <img src={icon} alt="Input icon" />
      )}
      <Field
        name={name}
        render={({ field }: FieldAttributes<any>) => {
          if (useMask) {
            return (
              <InputMask
                {...rest}
                {...field}
                id={name}
                // value={value}
                mask={maskOptions[name]}
                onFocus={handleInputFocus}
                onBlur={handleInputBluer}
                ref={inputRef}
                placeholder={placeholderLabel}
              />
            )
          } else {
            return (
              <InputMask
                {...rest}
                {...field}
                id={name}
                value={value}
                mask={maskOptions[name]}
                onFocus={handleInputFocus}
                onBlur={handleInputBluer}
                ref={inputRef}
                placeholder={placeholderLabel}
              />
            )
          }
        }}
      />
    </Container>
  );
};

export default Input;