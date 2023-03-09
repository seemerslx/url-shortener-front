import roles from "../../utils/roles";
import Authorized from "../Auth/Authorized";

const Home = () => {
    return <>
        <Authorized 
        authorized={<p>You are authorized</p>} 
        notAuthorized={<p>You are not authorized</p>} roles={[roles.user, roles.admin]}></Authorized>

        <h1>Hello this home page of my url shortener application</h1>
        
    </>
};

export default Home;