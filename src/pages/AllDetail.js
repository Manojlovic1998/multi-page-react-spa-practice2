import { Fragment } from "react";
import { useParams, Route, Routes } from "react-router-dom";
import Comments from "../components/comments/Comments";

const AllDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  return (
    <Fragment>
      <h1>All Detail Page</h1>
      <Routes>
        <Route path={"/comments"} element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default AllDetail;
