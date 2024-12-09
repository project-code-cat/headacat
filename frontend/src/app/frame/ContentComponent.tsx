import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ContentComponent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ContentComponent;
