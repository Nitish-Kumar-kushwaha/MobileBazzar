import { AppContext } from "@/Components/AppContext";
import { useContext } from "react";
import { Container, InputGroup } from "react-bootstrap";

const Ram = () => {
  const { ram, setRam } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRam({
      name: event.target.value,
      checked: event.target.checked,
    });
    console.log("value of Ram", event.target.value);
  };

  return (
    <>
      <div>
        <Container>
          <div className="container-fluid">
            <div>
              <label
                className="btn btn-outline-primary text-color-dark"
                style={{ width: "7rem" }}
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  value="1 GB RAM"
                  onChange={handleChange}
                />
                1 GB
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
                  value="2 GB RAM"
                  onChange={handleChange}
                />
                2 GB
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
                  value="3 GB RAM"
                  onChange={handleChange}
                />
                2 GB
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
                  value="4 GB RAM"
                  onChange={handleChange}
                />
                4 GB
              </label>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Ram;
