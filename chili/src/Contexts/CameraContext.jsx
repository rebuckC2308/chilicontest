import React, { createContext, useState } from 'react';

export const CameraContext = createContext();

export function CameraStateProvider({ children }) {
  const [image, setImage] = useState(null);

  const cameraState = React.useMemo(() => ({
    image, setImage,
  }), [image, setImage]);

  return (
    <CameraContext.Provider value={cameraState}>
      {children}
    </CameraContext.Provider>
  );
}
