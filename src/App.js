import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllDetail from "./pages/AllDetail";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path={"/quotes"} element={<AllQuotes />} />
        <Route path={"/quotes/:quoteId/*"} element={<AllDetail />} />
        <Route path={"/new-quote"} element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
