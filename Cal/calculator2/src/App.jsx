import React from 'react';

export default function App() {
  const calculatorStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    maxWidth: '200px',
    margin: 'auto',
    marginTop: '20px',
  };

  const displayStyles = {
    gridColumn: 'span 4',
    textAlign: 'right',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  const ButtonStyles = {
    gridColumn: 'span 4',
    textAlign: 'right',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };


  

  return (
    <>
      <div className="Calculator" style={calculatorStyles}>
        <div className="Display" style={displayStyles}>
          <input type="text" placeholder="0" />
          <div className='Button'  styles = {ButtonStyles}>
          <button> C</button>
          </div>
        </div>
        {/* Add your calculator buttons here */}
      </div>
    </>
  );
}
