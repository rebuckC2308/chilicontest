import React, { createContext, useState } from 'react';

export const UserDetailsContext = createContext();

export function UserStateProvider({ children }) {
  const [globalUserName, setGlobalUserName] = useState('');

  const [currentContestAdmin, setCurrentContestAdmin] = useState('');

  const userState = React.useMemo(() => ({
    globalUserName,
    setGlobalUserName,
    currentContestAdmin,
    setCurrentContestAdmin,
  }), [globalUserName, currentContestAdmin]);

  return (
    <UserDetailsContext.Provider value={userState}>
      {children}
    </UserDetailsContext.Provider>
  );
}
