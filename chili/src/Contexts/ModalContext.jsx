import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalStateProvider({ children }) {
  const [shouldDisplayErrorModal, setShouldDisplayErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const modalState = React.useMemo(() => ({
    shouldDisplayErrorModal,
    setShouldDisplayErrorModal,
    errorModalText,
    setErrorModalText,
    isLoading,
    setIsLoading,
  }), [shouldDisplayErrorModal, errorModalText,
    isLoading]);

  return (
    <ModalContext.Provider value={modalState}>
      {children}
    </ModalContext.Provider>
  );
}
