import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto h-auto w-full max-w-6xl">{children}</div>;
}
