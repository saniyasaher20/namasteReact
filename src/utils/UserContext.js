import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Saniya Saher",
        email: "abc@gmail.com"
    }
});

export default UserContext;