/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const interventionTicketContext = createContext();

export function TicketContextProvider({ children }) {
  const [ticket, setTicket] = useState({
    truck: {
      modele: "",
      category: "",
      img: "",
    },
    type: "",
    level: 0,
    description: "",
  });

  const value = useMemo(() => ({ ticket, setTicket }));
  return (
    <interventionTicketContext.Provider value={value}>
      {children}
    </interventionTicketContext.Provider>
  );
}

TicketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTicketContext = () => useContext(interventionTicketContext);
