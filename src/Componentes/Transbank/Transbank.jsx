import React, { useState, useEffect } from "react";
import "./Transbank.css";
import axios from "axios";
import Loader from "../Loader/Loader";

export default function Transbank({ evento }) {
  const [paymentToken, setPaymentToken] = useState(null);
  const [viewData, setViewData] = useState(null);


  useEffect(() => {
    const handlePayment = async () => {
      try {
        // Realiza una solicitud al servidor para iniciar el pago
        const response = await axios.post("http://localhost:3000/transbank/create", {
          total: evento.price,
          buy_order: 1234,
        });

        // Verifica la respuesta y obtén el token de pago
        if (response.data && response.data.token) {
          setPaymentToken(response.data.token);
          setViewData(response.data);
        } else {
          console.log("Error: del handlePayment, no hay token");
        }
      } catch (error) {
        console.error("Error al iniciar el pago:", error);
      }
    };
    handlePayment();
  }, []);


  if (!viewData) {
    return <Loader />;
  }

  return (
    <>
      <form
        action={viewData.url}
        method="POST"
        style={{ backgroundColor: "transparent" }}
      >
        <input type="hidden" name="token_ws" value={viewData.token} />
        <input className="input" type="submit" value="" style={{ color: "white" }} />
      </form>
    </>
  );
}
