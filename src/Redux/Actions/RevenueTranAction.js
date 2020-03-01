export const ADD_REVENUE = 'ADD_REVENUE'



export const addRevenue = (revenue)=>{
    return{
        type:'ADD_REVENUE',
        payload: revenue
    }
}