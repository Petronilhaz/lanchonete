export interface Product {
    id: string,
    name: string,
    ingredients: string[],
    price: number,
    aditional? : string[]
}