import React from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './ModalContext';
import { ToastProvider } from './ToastContext';
import { FavoritesProvider } from './FavoritesContext';
import { theme } from '../styles'
import { ThemeProvider } from 'styled-components';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <FavoritesProvider>
            <ModalProvider>
                { children  }
            </ModalProvider>
          </FavoritesProvider>
        </ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppProvider;