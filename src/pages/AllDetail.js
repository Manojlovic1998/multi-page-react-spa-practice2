import { Fragment } from "react";
import { useParams } from "react-router-dom";

const AllDetail = () => {
    const params = useParams();
    console.log(params.quoteId);
    return (
        <Fragment>
            <h1>All Detail Page</h1>
            <p>{params.quoteId}</p>
        </Fragment>
        )
};

export default AllDetail;