import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from '@/components/site/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import DanceDetail from '@/pages/DanceDetails';

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground">
      <h1 className="font-serif text-6xl">404</h1>
      <p className="text-xl text-foreground/60">Page not found.</p>
      <Link to="/" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
        Back to Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dance/:slug" element={<DanceDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;