import React, { createContext, useState } from 'react';

export const UserDetailsContext = createContext();

export function UserStateProvider({ children }) {
  const [globalUserName, setGlobalUserName] = useState('');
  const userState = React.useMemo(() => ({ globalUserName, setGlobalUserName }), [globalUserName]);

  return (
    <UserDetailsContext.Provider value={userState}>
      {children}
    </UserDetailsContext.Provider>
  );
}
