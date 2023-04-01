import React from 'react';

import Container from '@/component/atom/Container';
import Navbar from '@/component/organism/Navbar';

function Index() {
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-br from-slate-700 to-slate-900">
      <Container>
        <Navbar></Navbar>
      </Container>
    </div>
  );
}

export default Index;
