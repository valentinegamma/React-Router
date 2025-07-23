import Users from "./Users";

function sleep(ms) {
    return new Promise(resolve => setTimeout (resolve,ms))
}

 export async function logUser(email, password) {
    await sleep(1000)
    const found =  Users.filter(user => 
    user.email === email && user.password === password
 
    )
   
return found.length === 1 
}