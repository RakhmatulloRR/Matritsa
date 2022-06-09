import React, { useState } from "react";
import { Cell, Container, Equal, Matritsa, MatritsaWrapper, Result, TableS } from "./tableStyle";

export default function Matrit() {
  const [matrit, setMatrit] = useState({
    rows: [],
    columns: [],
  });
  const onYaratish = () => {
    const inputs = document.querySelectorAll(".form input");
    matrit.rows = [];
    matrit.columns = [];
    for (let i = 0; i < inputs[0].value; i++) {
      matrit.rows.push(i);
    }
    for (let i = 0; i < inputs[1].value; i++) {
      matrit.columns.push(i);
    }
    console.log(matrit.columns);
    setMatrit((prev) => {
      return { rows: prev.rows, columns: prev.columns };
    });
    inputs[0].value = "";
    inputs[1].value = "";
  };
  const onDelete = () => {
    setMatrit({
      rows: [],
      column: [],
    });
  };

  return (
    <Container>
      <div className="form">
        <input type="text" id="rows" placeholder="row" />
        <input type="text" id="columns" placeholder="column" />
        <button onClick={onYaratish}>Create</button>
        <button onClick={onDelete}>Delete</button>
      </div>
      <br />
      <MatritsaWrapper>
        <Matritsa>
          <TableS>
            {/* <thead>
          <tr key="header">
            <th></th>
            {matrit.columns?.map((column) => {
              return (
                <th key={column}>
                  <p>T{column + 1}</p>
                </th>
              );
            })}
          </tr>
        </thead> */}
            <tbody>
              {matrit.rows?.map((row) => {
                return (
                  <tr key={row}>
                    {/* <th>
                  <p>p{row + 1}</p>
                </th> */}
                    {matrit.columns?.map((column) => {
                      return (
                        <td key={column}>
                          <Cell type="text" defaultValue={"0"} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </TableS>
        </Matritsa>
        <Equal>
          <button>=</button>
        </Equal>
        <Result>
          <input type="text" />
        </Result>
      </MatritsaWrapper>
    </Container>
  );
}
