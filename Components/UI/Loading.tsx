import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "react-bootstrap/Spinner";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "#AFD3E2",
// };

const Loading = () => {
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#AFD3E2");

  return (
    // <ClipLoader
    //   color={color}
    //   loading={loading}
    //   cssOverride={override}
    //   size={150}
    //   aria-label="Loading Spinner"
    //   data-testid="loader"
    // />
    <>
      <div
        className=" d-flex align-items-center justify-content-center  not-found-container"
        style={{ minHeight: "100vh", minWidth:'120vh' }}
      >
        <Spinner animation="border" role="status" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Loading;
