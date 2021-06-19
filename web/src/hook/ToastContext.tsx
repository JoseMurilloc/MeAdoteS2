import React, { useContext } from 'react';
import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ToastContextData } from './types/toast';

const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
)

const ToastProvider: React.FC = ({children}) => {
  const success = (message: string) => toast
    .success(message);

  const error = (message: string) => toast
    .error(message);


  return (
    <ToastContext.Provider value={{ success, error }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {  
    throw new Error('useToast must be used within a Authentication')
  }

  return context
}

export { useToast, ToastProvider }