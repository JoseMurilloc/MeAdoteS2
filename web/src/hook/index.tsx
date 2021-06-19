import React from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './ModalContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <ModalProvider>
          { children  }
        </ModalProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

export default AppProvider;