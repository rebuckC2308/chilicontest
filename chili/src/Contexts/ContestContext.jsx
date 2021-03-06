import React, { createContext, useState } from 'react';

export const ContestContext = createContext();

export function ContestStateProvider({ children }) {
  const [currentContestID, setCurrentContestID] = useState('');
  const [showCreateEntryForm, setShowCreateEntryForm] = useState(false);
  const [entries, setEntries] = useState([]);

  const contestState = React.useMemo(() => ({
    currentContestID,
    setCurrentContestID,
    showCreateEntryForm,
    setShowCreateEntryForm,
    entries,
    setEntries,
  }), [currentContestID, setCurrentContestID,
    showCreateEntryForm, setShowCreateEntryForm,
    entries, setEntries]);

  return (
    <ContestContext.Provider value={contestState}>
      {children}
    </ContestContext.Provider>
  );
}
