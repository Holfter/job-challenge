import React, { useEffect, useState } from "react";
import api from "../../api";
import "./Crud.css";
import { useForm } from "react-hook-form";
import { BiEdit, BiTrash } from "react-icons/bi";
//import { handleUpdate, handleDelete } from "./handlers/handlers";
const Crud = ({ price }) => {
  const [clientes, setClientes] = useState([]);
  const [reload, setReload] = useState(false);
  const [updateClient, setUpdateClient] = useState("");
  const [showPopup, setPopup] = useState(false);
  const [pctDaUsina, setPctDaUsina] = useState(0);
  const [error, setError] = useState("");

  //Getting clients data from database
  useEffect(() => {
    const fetchClient = async () => {
      await api.get("/clientes").then((res) => {
        setClientes(res.data.data);
      });
    };
    fetchClient();
  }, [reload]);

  //Check if the factory clients's participation is les than 100%
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < clientes.length; i++) {
      if (count < 100) {
        count += clientes[i].usinas[0].percentualDeParticipacao;
      }
    }
    setPctDaUsina(count);
  }, [clientes]);

  //Update the chosen field of the client
  const handleUpdate = async (data) => {
    const old = await api
      .get(`/clientes/${data._id}`)
      .then((res) => res.data.cliente);
    const newClient = {
      numeroCliente:
        data.numeroCliente.length === 0
          ? old.numeroCliente
          : data.numeroCliente,
      nomeCliente:
        data.nomeCliente.length === 0 ? old.nomeCliente : data.nomeCliente,
      usinas: [
        {
          usinaId:
            data.usinaId.length === 0 ? old.usinas[0].usinaId : data.usinaId,
          percentualDeParticipacao:
            data.percentualDeParticipacao * 1 <=
            100 - (pctDaUsina - old.usinas[0].percentualDeParticipacao)
              ? data.percentualDeParticipacao
              : old.usinas[0].percentualDeParticipacao,
        },
      ],
    };
    api.patch(`/clientes/${data._id}`, newClient);
    window.location.reload();
  };

  //Delete client
  const handleDelete = (id) => {
    api.delete(`/clientes/${id}`);
    setReload(!reload);
  };

  //Model client receives all datas from the form and fill all the fields
  const client = (data) => {
    return {
      numeroCliente: data.numeroCliente,
      nomeCliente: data.nomeCliente,
      usinas: [
        {
          usinaId: data.usinaId,
          percentualDeParticipacao: data.percentualDeParticipacao,
        },
      ],
    };
  };

  //Form handler
  const { register, handleSubmit, reset, defaultValues } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    defaultValues: defaultValues2,
  } = useForm({
    mode: "onBlur",
  });

  //On form submit, make a post request calling 'client' and passing data from form to it
  const onSubmit = async (data) => {
    let rest = data.percentualDeParticipacao * 1;
    if (pctDaUsina <= 100 && rest <= 100 - pctDaUsina) {
      await api.post("/clientes", client(data));
      reset({ ...defaultValues });
      setError("");
    } else {
      setError(
        "Limite de participação da usina atingido ou valor digitado não disponivel"
      );
    }
    setReload(!reload);
  };

  //Show or hide update popup
  const showPopupUpdate = (id) => {
    setUpdateClient(id);
    setPopup(!showPopup);
    reset2({ ...defaultValues2 });
  };

  //Render client rows
  const renderItems = (clientes) => {
    let list = [];
    if (clientes.length !== 0) {
      list.push(
        clientes.map((item, key) => (
          <tr className="tr" key={key}>
            <td>
              <img
                className="clientPic"
                src={`${process.env.PUBLIC_URL}/client.PNG`}
                alt="cliente"
              />
              {item.nomeCliente}
            </td>
            <td>{item.numeroCliente}</td>
            <td>{item.usinas[0].usinaId}</td>
            <td>{item.usinas[0].percentualDeParticipacao}%</td>
            <td>
              R$
              {(
                (price / 100) *
                item.usinas[0].percentualDeParticipacao
              ).toFixed(2)}
            </td>
            <td
              onClick={() => {
                showPopupUpdate(item._id);
              }}
            >
              <BiEdit />
            </td>
            <td onClick={() => handleDelete(item._id)}>
              <BiTrash />
            </td>
          </tr>
        ))
      );
    }
    return list;
  };

  return (
    <div className="crud">
      <h1>Adicionar cliente</h1>
      <p style={{ color: "red" }}>{error}</p>
      <form
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Numero do Cliente"
          type="number"
          min="0"
          {...register("numeroCliente", { required: true })}
        />
        <input
          placeholder="Nome"
          {...register("nomeCliente", { required: true })}
        />
        <input
          placeholder="ID da usina"
          type="number"
          min="0"
          {...register("usinaId", { required: true })}
        />
        <input
          placeholder="Participação"
          type="number"
          min="0"
          {...register("percentualDeParticipacao", { required: true })}
        />
        <button className="crudSubmit" type="submit">
          Criar
        </button>
      </form>

      <div className="client_list">
        <div className="client_item">
          <table id="customers">
            <tbody>
              <tr>
                <th>Nome</th>
                <th>Numero</th>
                <th>ID Usina</th>
                <th>Participação</th>
                <th>Lucro</th>
                <th></th>
                <th></th>
              </tr>
              {renderItems(clientes)}
            </tbody>
          </table>
        </div>
      </div>
      <div className={showPopup ? "editPopup show" : "editPopup"}>
        <div className="closePopup">
          <span onClick={() => setPopup(!showPopup)}>X</span>
        </div>
        <form
          autoComplete="off"
          className="form"
          onSubmit={handleSubmit2(handleUpdate)}
        >
          <input
            placeholder="Numero do Cliente"
            type="number"
            min="0"
            {...register2("numeroCliente")}
          />
          <input placeholder="Nome" {...register2("nomeCliente")} />
          <input
            placeholder="ID da usina"
            type="number"
            min="0"
            {...register2("usinaId")}
          />
          <input
            placeholder="Participação"
            type="number"
            min="0"
            {...register2("percentualDeParticipacao")}
          />
          <input
            {...register2("_id")}
            type="hidden"
            defaultValue={updateClient}
          />
          <button
            className="crudSubmit"
            type="submit"
            onClick={() => {
              setPopup(!showPopup);
            }}
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Crud;
