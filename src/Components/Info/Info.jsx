import React from "react";
import { Alert } from "reactstrap";
import "./info.css";

export default function Info() {
  return (
    <div>
      <Alert color="light" className="alert-info">
        <h4 className="title">Olá Pessoal!</h4>
        <p className="text">
          Eu resolvi criar esse site para listar alguns presentes que eu
          gostaria de ganhar de aniversário, ja que sempre que me perguntam eu
          não sei o que dizer.
          <br></br>Os presentes vão estar na ordem de: + importante para -
          importante.
        </p>
        <hr />
        <p className="info">
          Informações importantes:
          <br></br>
          Eu visto P e calço 36 😁
        </p>
      </Alert>
    </div>
  );
}
