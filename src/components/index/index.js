import { Suspense, lazy } from 'react';

import './index.scss';

const Main = lazy(() => import('./main/main'));
const Acquaintance = lazy(() => import('./acquaintance/acquaintance'));
const UsersContainer = lazy(() => import('./users/users-container'));
const RegisterContainer = lazy(() => import('./register/register-container'));

const Index = (props) => {
    return (
        <Suspense fallback={<div id={'loading'}/>}>
            <Main/>
            <Acquaintance/>
            <UsersContainer/>
            <RegisterContainer/>
        </Suspense>
    )
}

export default Index;