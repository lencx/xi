import React, { useEffect } from 'react';
import init, { greet } from '@rsw/xi';

export default function HomeView() {
  useEffect(() => {
    init();
  }, [])

  return (
    <div onClick={greet}>XI</div>
  );
}
