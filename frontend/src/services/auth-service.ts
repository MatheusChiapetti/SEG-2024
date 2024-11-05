import { supabase } from "../@libs/supabase";
import { ICredential } from "../@libs/types";

// Método para autenticar o usuário e a senha. 
const signIn = async (credential: ICredential) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: credential.username, 
        password: credential.password
    });

    if(error) {
        throw error;
        // Throw aborta/para a execução do código.
    }
    return data;
}

export const AuthService = {
    signIn
}