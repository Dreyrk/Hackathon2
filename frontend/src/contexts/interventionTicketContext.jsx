import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const interventionTicketContext = createContext();

export function TicketContextProvider({ children }) {
  const [ticket, setTicket] = useState({
    type: "",
    level: 0,
    localisation: [],
    description: "",
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <interventionTicketContext.Provider value={{ ticket, setTicket }}>
      {children}
    </interventionTicketContext.Provider>
  );
}

TicketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTicketContext = () => useContext(interventionTicketContext);
