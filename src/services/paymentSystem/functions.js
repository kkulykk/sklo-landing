import { setUserStatus } from "../database/functions"
export const processPayment = (email) => {
    const status = true;
    
    if (status) {
        setUserStatus(email, 1)
    } else {}

}