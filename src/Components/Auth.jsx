import Users from "./Users";

export function logUser(email, password) {
 const found =  Users.filter(user => 
    user.email === email && user.password === password
 
    )
   
return found.length === 1 
}