import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { urlAccounts } from "../../../utils/endpoints";
import DisplayErrors from "../../Helpers/DisplayErrors";
import { authenticationResponse, registerCredentionals } from "../auth.models";
import AuthenticationContext from "../AuthenticationContext";
import { getClaims, saveToken } from "../handlejwt";
import RegisterForm from "./RegisterForm";

const Register = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const navigate = useNavigate();

    async function register(credentials: registerCredentionals) {
        try {
            console.log("IN SEDNING REQUEST");
            const response = await axios
                .post<authenticationResponse>(`${urlAccounts}/register`, credentials);
                saveToken(response.data);
                update(getClaims())
                console.log(response.data);
            navigate("/login");
        } catch (error: any) {
            console.log(error.response.data);
            setErrors(error.response.data);
        }
    }

    return <>
        <h3>Register</h3>
        <DisplayErrors errors={errors} />
        <RegisterForm model={{ email: "", username: "", password: "" }}
            onSubmit={async (values) => { await register(values) }} />
    </>

};

export default Register;