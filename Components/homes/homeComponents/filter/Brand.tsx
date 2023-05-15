import { InputGroup, Container } from "react-bootstrap";

import { AppContext } from "@/Components/AppContext";
import { useContext, useState } from "react";

type brandProps = {
  handleBrandChange: (value: string) => void;
};

const Brand = () => {
  const { brand, setBrand } = useContext(AppContext);
  const [chk, setChk] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand({
      name: event.target.value,
      checked: event.target.checked,
    });
    console.log(event.target.value);
    console.log(event.target.checked);
  };

  // const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked == false) {
  //     setChk(true);
  //   } else {
  //     setChk(false);
  //   }
  // };

  

  console.log();

  return (
    <Container>
      <div>
        <div className="container">
          <div>
            <label
              className="btn btn-outline-primary"
              style={{ width: "7rem" }}
            >
              <input
                type="checkbox"
                className="btn-check"
                value="alcatel"
                onChange={handleChange}
                id="alcatel"
              />
              Alcatel{" "}
            </label>
          </div>
          <br />

          <div>
            <label
              className="btn btn-outline-primary"
              style={{ width: "7rem" }}
            >
              <input
                type="checkbox"
                className="btn-check"
                value="Allview"
                onChange={handleChange}
                id="Allview"
              />
              Allview{" "}
            </label>
          </div>
          <br />

          <div>
            <label
              className="btn btn-outline-primary"
              style={{ width: "7rem" }}
            >
              <input
                type="checkbox"
                className="btn-check"
                value="Amoi"
                onChange={handleChange}
                id="Amoi"
              />
              Amoi{" "}
            </label>
          </div>
          <br />

          <div>
            <label
              className="btn btn-outline-primary"
              style={{ width: "7rem" }}
            >
              <input
                type="checkbox"
                className="btn-check"
                value="Archos"
                onChange={handleChange}
                id="Archos"
              />
              Archos{" "}
            </label>
          </div>
          <br />

          <div>
            <label
              className="btn btn-outline-primary"
              style={{ width: "7rem" }}
            >
              <input
                type="checkbox"
                className="btn-check"
                value="Asus"
                onChange={handleChange}
                id="Asus"
              />
              Asus{" "}
            </label>
          </div>
          <br />
        </div>

       
      </div>
    </Container>
  );
};

export default Brand;
