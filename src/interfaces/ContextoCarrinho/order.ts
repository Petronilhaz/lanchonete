import { Product } from "./product"

export interface Order {
    products: Product[],
    payback: number,
    shipping? : number
}