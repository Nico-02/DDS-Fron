import axios from "axios";

const urlResource = "http://localhost:4000/api/jugadores";

async function Buscar(Nombre, Pagina) {
  const resp = await axios.get(urlResource, {
    params: { Nombre, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.id_jugador);
  return resp.data;
}

async function Grabar(item) {
  if (item.id_jugador === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.id_jugador, item);
  }
}

const jugadoresService = {
  Buscar,BuscarPorId,Grabar
};

export default jugadoresService;