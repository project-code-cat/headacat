// react
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const BasePage = ({ children }: Props) => {
  return <>{children}</>;
};
export default BasePage;
