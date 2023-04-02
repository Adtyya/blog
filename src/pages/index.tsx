import React from 'react';

import Container from '@/component/atom/Container';
import Footer from '@/component/organism/Footer';
import Navbar from '@/component/organism/Navbar';
import Blog from '@/component/template/Blog';

function Index() {
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-slate-700 to-slate-900">
      <Container>
        <Navbar></Navbar>
        <div className="py-12">
          <Blog data={['a', ' b', 'c', 'd', 'e']}></Blog>
        </div>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default Index;
