import DataTable from "../components/DataTable";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <>
      <DataTable data={data} />
    </>
  );
}

export default Home;
