import axios from "axios";
import { useState, useEffect } from "react";

function Sklton() {
  return <h1>Fetching the data</h1>;
}

export default function Countries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.data) {
        setData(response.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {loading ? (
        <Sklton />
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "190px",
                  height: "185px",
                  padding: "10px",
                  justifyContent: "center",
                  alignItems: "center",

                  border: "1px solid black",
                  borderRadius: "6px",
                  margin: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.flags.png}
                    alt="flag"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <h5 style={{ width: "140px" }}>{item.name.official}</h5>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
