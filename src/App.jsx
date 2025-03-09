import  { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Navbar from './components/Navbar';
import Footer from './components/footer';

const App = () => {
  const routing = useRoutes(routes);
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If the user's OS is in dark mode, force light mode
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
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
