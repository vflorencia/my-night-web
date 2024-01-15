import axios from "axios";

export const BUY_PRODUCT = "BUY_PRODUCT";
export const COMMIT = "COMMIT";
export const STATUS = "STATUS";
export const REFUND = "REFUND";
export const SET_TICKETS = "SET_TICKETS";
export const SET_TICKETS_BY_ID = "SET_TICKETS_BY_ID";


export function registroUsuario(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('/users/create', payload);

      if (response.status === 200 && response.data && !response.data.error) {
        const user = response.data.createUser;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      } else {
        return { error: response.data.error || 'Error desconocido' };
      }
    } catch (error) {
      console.error(error.response?.data?.error);
      return { error: error.response?.data?.error || 'Error desconocido' };
    }
  };
}

   
export function loginUsuario(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('/users/login', payload);

      if (response.status === 200) {
        const usuario = response.data.usuario;

        if (usuario) {
          localStorage.setItem('user', JSON.stringify(response.data.usuario));

          return usuario;
        } else {
          // Lanza un error si el usuario no existe
          throw new Error("El usuario no está registrado");
        }
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };
}

// tickets

// Acción para crear un ticket
export const createTicket = (ticketData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/tickets/create', ticketData);
      console.log(response.data); // Maneja la respuesta si es necesario
      // Puedes despachar otras acciones de Redux si es necesario
    } catch (error) {
      console.error('Error creating ticket:', error); // Maneja el error
    }
  };
};

// Acción para obtener todos los tickets
export const getAllTickets = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/tickets');
      return dispatch({
        type: SET_TICKETS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error getting all tickets:', error); // Maneja el error
    }
  };
};

// Acción para obtener un ticket por ID
export const getTicketById = (ticketId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/tickets/${ticketId}`);
      return dispatch({
        type: SET_TICKETS_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(`Error getting ticket ${ticketId}:`, error); // Maneja el error
    }
  };
};

// Acción para actualizar un ticket por ID
export const updateTicket = (ticketId, ticketData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/tickets/${ticketId}`, ticketData);
      console.log(response.data);
    } catch (error) {
      console.error(`Error updating ticket ${ticketId}:`, error); // Maneja el error
    }
  };
};

// Acción para eliminar un ticket por ID
export const deleteTicket = (ticketId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/tickets/${ticketId}`);
      console.log(response.data); 
    } catch (error) {
      console.error(`Error deleting ticket ${ticketId}:`, error); // Maneja el error
    }
  };
};



// Transbank

const remot = "http://localhost:3000/transbank/";

export function buyProducts(payload) {
  return async function (dispatch) {
    const result = await axios.post(`${remot + "create"} `, payload);
    return dispatch({
      type: BUY_PRODUCT,
      payload: result.data,
    });
  };
}

export function commit(payload) {
  return async function (dispatch) {
    var result = await axios.post( `${remot + "commit"} ` , payload);
    return dispatch({
      type: COMMIT,
      payload: result.data,
    });
  };
}
export function commitMobile(payload) {
  return async function (dispatch) {
    var result = await axios.post( 'http://192.168.100.48:3000/transbank/commit' , payload);
    return dispatch({
      type: COMMIT,
      payload: result.data,
    });
  };
}

export function status(payload) {
  return async function (dispatch) {
    var result = await axios.post( `${remot + "status"} `, payload );
    return dispatch({
      type: STATUS,
      payload: result.data,
    });
  };
}


    
  
  



