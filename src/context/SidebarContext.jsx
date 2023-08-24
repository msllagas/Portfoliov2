import { useState, createContext, useContext } from "react";

const SidebarContext = createContext();

const links = [
  {
    id: 1,
    title: "About",
    to: "#about",
  },
  {
    id: 2,
    title: "Skills",
    to: "#skills",
  },
  {
    id: 3,
    title: "Projects",
    to: "#projects",
  },
];


function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        links
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
      throw new Error("SidebarContext was used outside the SidebarProvider");
    }
    return context;
  }

export { SidebarProvider, useSidebar };
