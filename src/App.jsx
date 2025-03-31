import React, {useState, useEffect} from 'react';
import Nav from './Nav.jsx';
import SCP from './SCP1.jsx';
import "./style.css";

function fetchData() {
  return fetch("./public/SSF/scp.json")
      .then((response) => {
        if (!response.ok) {
          // Log the response text if the response is not ok
          return response.text().then((text) => {
            console.error("Error fetching data, server response:", text);
            throw new Error(`HTTP error! status: ${response.status}`);
          });
        }
        // Check if the Content-Type is JSON before attempting to parse
        if (response.headers.get("Content-Type")?.includes("application/json")) {
          return response.json();
        } else {
          return response.text().then((text) => {
            console.error("Error fetching data, response is not JSON:", text);
            throw new Error("Response is not JSON");
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return null;
      });
}
    

function App() {
  const [scpData, setSCP] = useState([]);
  const [selectedSCP, setSelectedSCP] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        if (data) {
          console.log("Fetched data:", data);
          setSCP(data);
        }
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  }, []);
  
  
  return (
    <div>
      <Nav scp={scpData} onSelect={setSelectedSCP} />
      <h1>SCP Website</h1>
      {selectedSCP && <SCP selectedSCP={selectedSCP} />}
    </div>
  );
}

export default App;