import Main from './main/main';
import Acquaintance from './acquaintance/acquaintance';
import UsersContainer from './users/users-container';
import RegisterContainer from './register/register-container';

import './index.scss';

const Index = (props) => {
    return (
        <div>
            <Main/>
            <Acquaintance/>
            <UsersContainer/>
            <RegisterContainer/>
        </div>
    )
}

export default Index;