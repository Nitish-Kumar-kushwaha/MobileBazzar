import Filter from "./homeComponents/Filter";
import SideView from "./homeComponents/SideView";

const MainHome = () => {
  return (
    <>
      <div className="  container-fluid " >
        <div className="row row-sm row-md row-lg">
          <div className="col col-md-4 col-sm-6 col-lg-2 " >
            {" "}
            <Filter />
          </div>
          <div className="col col-md-8 col-sm-6 col-lg-10">
            {" "}
            <SideView />
          </div>
        </div>
      </div>
    </>
  );
};


export default MainHome;
