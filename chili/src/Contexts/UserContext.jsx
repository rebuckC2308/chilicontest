import React, { createContext, useState } from 'react';

export const UserDetailsContext = createContext();

export function UserStateProvider({ children }) {
  const [globalUserName, setGlobalUserName] = useState('');

  const [shouldDisplayErrorModal, setShouldDisplayErrorModal] = useState(false);
  const [errorModalText, setErrorModalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [currentContestAdmin, setCurrentContestAdmin] = useState('');
  const [currentContestID, setCurrentContestID] = useState('');

  const [showCreateEntryForm, setShowCreateEntryForm] = useState(false);

  const userState = React.useMemo(() => ({
    globalUserName,
    setGlobalUserName,
    shouldDisplayErrorModal,
    setShouldDisplayErrorModal,
    errorModalText,
    setErrorModalText,
    isLoading,
    setIsLoading,
    currentContestAdmin,
    setCurrentContestAdmin,
    currentContestID,
    setCurrentContestID,
    showCreateEntryForm,
    setShowCreateEntryForm,
  }), [globalUserName, shouldDisplayErrorModal, errorModalText,
    isLoading, currentContestAdmin, showCreateEntryForm,
    setShowCreateEntryForm,
    currentContestID]);

  return (
    <UserDetailsContext.Provider value={userState}>
      {children}
    </UserDetailsContext.Provider>
  );
}
