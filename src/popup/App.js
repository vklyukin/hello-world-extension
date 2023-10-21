import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

function App() {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <div style={{ 
      width: '315px',
      height: '205px',
      backgroundColor: "#3C3B6E", 
      padding: "1rem",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <button
        onClick={() => setShowLabel(!showLabel)}
        style={{
          backgroundColor: "#6B66D6",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginBottom: showLabel ? "1rem" : "0",
          alignSelf: "center"
        }}
      >
        Click me
      </button>

      <Transition
        show={showLabel}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div style={{
          backgroundColor: "#6B66D6",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          alignSelf: "center"
        }}>
          Hello, world!
        </div>
      </Transition>
    </div>
  );
}

export default App;
