import React, { createContext, useCallback, useState, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastDTO {
  addToast(): void;
  removeToast(): void;
}

const Toast = createContext<ToastDTO>({} as ToastDTO);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </Toast.Provider>
  );
};

function useToast(): ToastDTO {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
