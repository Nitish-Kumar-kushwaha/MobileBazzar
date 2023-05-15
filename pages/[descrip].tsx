import { useRouter } from "next/router";
import NavBar from "@/Components/NavBar";
import Info from "@/Components/Description/Info";
import { useState, useEffect } from "react";

import Loading from "@/Components/UI/Loading";

const Description = () => {
  const router = useRouter();
  const id: number | undefined = router.query.descrip
    ? parseInt(router.query.descrip as string)
    : undefined;

  if (id == undefined) {
    return <Loading />;
  } else {
    console.log(id);
    return (
      <>
        <NavBar />
        <div className="my-lg-5">
          <Info Data={id} />
        </div>
      </>
    );
  }
};

export default Description;
