import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        maxWidth: '480px',
        margin: '0 auto',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}>
      {children}
    </div>
  );
};

export default AppLayout;
