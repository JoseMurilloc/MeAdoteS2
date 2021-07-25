import React from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './ModalContext';
import { ToastProvider } from './ToastContext';
import { theme } from '../styles'
import { ThemeProvider } from 'styled-components';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <ModalProvider>
              { children  }
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppProvider;