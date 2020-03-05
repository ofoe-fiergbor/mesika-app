export const ADD_REVENUE = 'ADD_REVENUE'



export const addRevenue = (sale)=>{
    return{
        type:'ADD_REVENUE',
        payload: sale
    }
}