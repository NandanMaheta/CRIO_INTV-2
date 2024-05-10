import React, { useState, useEffect } from "react";

function EmployeePagination() {
  const [staff, setStaff] = useState([]);
  const [cur, setCur] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    fetchEmployeeData();
  }, [cur]);

  const fetchEmployeeData = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch the data");
      }
      const data = await response.json();
      const startInd = (cur - 1) * 10;
      const endInd = startInd + 10;
      const FilteredData = data.slice(startInd, endInd);
      setStaff(FilteredData);
      setTotal(Math.ceil(data.length / 10));
    } catch (error) {
      console.log("Failed to fetch the data");
    }
  };

  const next = () => {
    if (cur < total) {
      setCur(cur + 1);
    }
  };

  const prev = () => {
    if (cur > 1) {
      setCur(cur - 1);
    }
  };

  return (
    <div>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "3px solid grey",
        }}
      >
        <thead style={{ backgroundColor: "green", color: "white" }}>
          <tr>
            <th style={{ padding: "12px 15px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "12px 15px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px 15px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "12px 15px", textAlign: "left" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((employee) => (
            <tr key={employee.id}>
              <td
                style={{
                  padding: "10px 15px",
                  textAlign: "justify",
                  borderBottom: "1px solid silver",
                }}
              >
                {employee.id}
              </td>
              <td
                style={{
                  padding: "10px 15px",
                  textAlign: "justify",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {employee.name}
              </td>
              <td
                style={{
                  padding: "10px 15px",
                  textAlign: "justify",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {employee.email}
              </td>
              <td
                style={{
                  padding: "10px 15px",
                  textAlign: "justify",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {employee.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={prev}
        >
          Previous
        </button>
        <span>
          Page {cur} of {total}
        </span>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeePagination;
