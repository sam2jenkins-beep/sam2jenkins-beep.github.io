import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id }) => {
  return (
    <section 
      id={id}
      className={`h-screen w-full snap-start snap-always flex flex-col items-center justify-center relative overflow-hidden p-6 md:p-12 ${className}`}
    >
      {children}
    </section>
  );
};