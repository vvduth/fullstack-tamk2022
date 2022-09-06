export interface foodItem {
    name: string, 
    price: number
}
export type menuListTypes = foodItem[] ;

export const DUMMY_DATA: menuListTypes = [
    {
        name: "pizza" ,
        price: 12
    },
    {
        name: "hamburger" ,
        price: 9
    },
    {
        name: "meatballs" ,
        price: 10
    },

]