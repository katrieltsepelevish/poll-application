import React from 'react';
import {
	BrowserRouter,
  Routes,
	Route,
} from 'react-router-dom';

import PollPage from "./pages/PollPage";
import Layout from "./template/Layout";

function App() {
  return (
      <Layout>
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<PollPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
  );
}

export default App;
