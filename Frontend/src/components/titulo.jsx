import React from "react";

export function Titulo(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "3%", color: "blue" }}>
      <h1>
        <strong> {props.titulo}</strong>
      </h1>
    </div>
  );
}
