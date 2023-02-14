import { useContext } from "react"
import { PedidoContext } from '../contexts/ContextoCarrinho/Carrinho'

const dataTeste = {
    id: "primeiro",
    name: "Lanche",
    ingredients: ['Hamburguer', 'Refri'],
    price: 25
}

export const ComponenteTeste = () : JSX.Element => {

    const { setProduct, product } = useContext(PedidoContext)

    setProduct(dataTeste)

    console.log(product);

    return (
        <>
        </>
    )
}


