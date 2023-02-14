
import { PropsWithChildren, ReactNode, FC } from "react"
import { PedidoProvider } from "../ContextoCarrinho/Carrinho"

interface ContextProviderProps {
    children: JSX.Element
}

export const ContextProvider: 
FC<PropsWithChildren<ContextProviderProps>> = ({ children }) => {
    return (
        <PedidoProvider>
            {children}
        </PedidoProvider>
    )
}

