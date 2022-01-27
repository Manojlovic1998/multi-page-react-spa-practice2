import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path={"/quotes"} element={<AllQuotes />} />
        <Route path={"/quotes/:quoteId/*"} element={<QuoteDetail />} />
        <Route path={"/new-quote"} element={<NewQuote />} />
        <Route path={"*"} element={<NotFound/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
