import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlAccounts } from "../../../utils/endpoints";
import DisplayErrors from "../../Helpers/DisplayErrors";
import { authenticationResponse, loginCredentionals } from "../auth.models";
import AuthenticationContext from "../AuthenticationContext";
import { getClaims, saveToken } from "../handlejwt";
import LoginForm from "./LoginForm";

const Login = () => {
    const {update} = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);

    async function login(credentials: loginCredentionals) {
        try {
            console.log("Making response!!!");
            const response = await axios
                .post<authenticationResponse>(`${urlAccounts}/login`, credentials);
                saveToken(response.data);
                update(getClaims());
            console.log(response.data);
            navigate("/");
        } catch (error: any) {
            setErrors(error.response.data);
        }
    }

    return <>
        <h3>Login</h3>
        <DisplayErrors errors={errors} />
        <LoginForm model={{ email: "", password: "" }}
            onSubmit={async (values) => { await login(values) }} />
    </>
};

export default Login;