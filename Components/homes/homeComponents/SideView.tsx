import { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap/";

import Block from "./Block/Block";
import Link from "next/link";
import { AppContext } from "@/Components/AppContext";
import { brandData } from "@/Typess/Typess";



const SideView = () => {
  const [data, setData] = useState<brandData[]>([]);
  const [filteredData, setFilteredData] = useState<brandData[]>([]);
  const [filterdBrand, setFilteredBrand] = useState<string>("");
  const { brand, ram , navSearch } = useContext(AppContext);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Alucard17/PhoneAPI/master/phones.json"
    )
      .then((response) => response.json())
      .then((dJason) => {
        setData(dJason.mobile.slice(0,1000));
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    const dataFilter = filterRam(data);
    setFilteredData(dataFilter);
  }, [ram]);

  useEffect(() => {
    const dataFilter = filterData(data);
    setFilteredData(dataFilter);
  }, [brand]);

  useEffect(() => {
    const dataFilter = filterNav(data);
    setFilteredData(dataFilter);
  }, [navSearch]);

  let v: string = "";

  function filterData(data: brandData[]): brandData[] {
    if (brand.checked == false) {
      return data.filter((res) => {
        if (res.brand.includes("")) {
          v = "brand";
          console.log("filtered", "");
          return res;
        }
      });
    } else {
      return data.filter((res) => {
        if (res.brand.includes(brand.name)) {
          v = "brand";
          console.log("filtered", brand.name);
          return res;
        }
      });
    }
  }

  console.log("length of array ");

  function filterRam(data: brandData[]): brandData[] {
    if (ram.checked == false) {
      return data.filter((res) => {
        if (res.RAM.includes("")) {
          v = "ram";
          console.log("filtered", "");
          return res;
        }
      });
    } else {
      return data.filter((res) => {
        if (res.RAM.includes(ram.name)) {
          v = "ram";
          console.log("filtered", ram.name);
          return res;
        }
      });
    }
  }


  function filterNav(data: brandData[]): brandData[] {
    // if (ram.checked == false) {
      return data.filter((res) => {
        if (res.brand.includes(navSearch.name)) {
          v = "ram";
          console.log("filtered", navSearch.name);
          return res;
        }
      });
    // } else {
    //   return data.filter((res) => {
    //     if (res.RAM.includes(ram.name)) {
    //       v = "ram";
    //       console.log("filtered", ram.name);
    //       return res;
    //     }
    //   });
    // }
  }


  function show() {
    data.map((res: brandData) => {
      console.log(res);
    });
  }

  // show();

  // price:-

  function getRandomInt(): any {
    return Math.floor(Math.random() * 100000);
  }
  let price = getRandomInt();

  console.log("brand : is :", brand.name);
  // style={{color: "inherit", text-decoration: "inherit"}}

  function nCard(val: brandData) {
    return (
      <>
        <Link
          href={`/${val.id}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div >
            <Block
              ImageSrc={val.img_url}
              model={val.model}
              brand={val.brand}
              ram={val.RAM}
              cpu={val.CPU}
              tech={val.network_technology}
              price={getRandomInt()}
            />
          </div>
        </Link>
      </>
    );
  }

  // if (filteredData != null) {
  //   return (
  //     <>
  //       <div className=" p-3">
  //         <div className="p-3 mx-5 d-flex align-content-md-around align-content-sm-around flex-wrap flex-md-wrap flex-sm-wrap">
  //           {filteredData.map(nCard)}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  // else {
  return (
    <>
      <div className=" p-3" style={{height:"100%"}}>
        <div className="p-3 mx-5 d-flex align-content-md-evenly align-content-sm-evenly align-content-xl-evenly flex-wrap flex-md-wrap flex-xl-wrap flex-sm-wrap">
          {filteredData.length == 0 ? data.map(nCard) : filteredData.map(nCard)}
        </div>
      </div>
    </>
  );
  // }
};

export default SideView;
