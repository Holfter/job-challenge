import React, { useEffect, useState } from "react";
import api from "../../api";
import "./Clientes.css";
import { Link } from "react-router-dom";
const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  //Get clients to show on dashboard page, get just 6 items
  useEffect(() => {
    let mounted = true;
    api.get("https://sharenergy.herokuapp.com/clientes").then((res) => {
      if (mounted) {
        setClientes(res.data.data.slice(0, 6));
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="clientes">
      <h1>Clientes</h1>
      <div className="clienteList">
        {clientes.map((item, key) => (
          <div className="clientCard" key={key}>
            <div>
              Nome: <b>{item.nomeCliente}</b>
            </div>
            <div>
              Numero: <b>{item.numeroCliente}</b>
            </div>
            <div>
              Usina id: <b>{item.usinas[0].usinaId}</b>
            </div>
            <div>
              Participação: <b>{item.usinas[0].percentualDeParticipacao}%</b>
            </div>
          </div>
        ))}
        <div className="verMais">
          {clientes.length > 5 ? <Link to="/clientes">Ver mais</Link> : ""}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
