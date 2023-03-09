import { ReactElement, useContext, useEffect, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";

const Authorized = (props: authorizedProps) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const { claims } = useContext(AuthenticationContext);


    useEffect(() => {
        if (props.roles) {
            console.log("IN ROLE CHECKING");

            const index = claims
                .findIndex(claim => claim.name === 'role' && props.roles?.includes(claim.value));
            setIsAuthorized(index > -1);
        }
        else {
            console.log("IN CLAIMS CHECKING");
            console.log(claims);
            console.log(claims.length > 0);
            setIsAuthorized(claims.length > 0);
        }
    }, [claims, props.roles]);

    return <>
        {isAuthorized ? props.authorized : props.notAuthorized}
    </>
};

interface authorizedProps {
    authorized: ReactElement;
    notAuthorized?: ReactElement;
    roles?: string[];
}

export default Authorized;