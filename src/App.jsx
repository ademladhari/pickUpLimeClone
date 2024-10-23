import  { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Navbar from './components/Navbar';
import Footer from './components/footer';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
    <div >
      <Suspense fallback={<div>Loading...</div>}>
        {routing}
      </Suspense>
    </div>
    </div>
  );
};

export default App;
