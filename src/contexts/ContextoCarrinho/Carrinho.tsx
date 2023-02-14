import { createContext, PropsWithChildren, FC,
 useState } from "react";
import { Product } from '../../interfaces/ContextoCarrinho/product'
import { Order } from '../../interfaces/ContextoCarrinho/order'
import { Adtional } from '../../interfaces/ContextoCarrinho/adtional'

interface PedidoContextProps {
    setProduct: (data:Product) => void,
    product: Product,
    setOrder: (data:Order) => void,
    order: Order,
    setAdtional: (data:Adtional) => void,
    adtional: Adtional
}

const initialValues = {
    product: {
        id: "",
        name: "",
        ingredients: [],
        price: 0
    },
    setProduct: () => {},
    order: {
        products: [],
        payback: 0
    },
    setOrder: () => {},
    adtional: {
        id: "",
        name: "",
        price: 0
    },
    setAdtional: () => {}
}

export const PedidoContext = createContext<PedidoContextProps>(initialValues)


export const PedidoProvider: FC<PropsWithChildren<{ children: JSX.Element }>> = ({ children }) => {
    const [ product, setProduct ] = useState<Product>({
        id: "",
        name: "",
        ingredients: [],
        price: 0
    })
    const [ order, setOrder ] = useState<Order>({
        products: [],
        payback: 0
    })
    const [ adtional, setAdtional ] = useState<Adtional>({
        id: "",
        name: "",
        price: 0
    })

    return(
        <PedidoContext.Provider value={{ product, setProduct, order, setOrder, adtional, setAdtional }}>
            {children}
        </PedidoContext.Provider>
    )
}