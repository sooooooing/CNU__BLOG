import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Post from './pages/Post';
import Resume from './pages/Resume';
import Write from './pages/Write';
import Header from './components/Header';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
            </Route>
            <Route path="/posts/:postId" element={<Post />} />
          </Route>
          {/*todo (5-1) Write 추가*/}
          <Route path="/write" element={<Write />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
