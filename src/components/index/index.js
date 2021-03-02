import { Suspense, lazy } from 'react';
import {Element} from 'react-scroll';
import './index.scss';

const Main = lazy(() => import('./main/main'));
const Acquaintance = lazy(() => import('./acquaintance/acquaintance'));
const UsersContainer = lazy(() => import('./users/users-container'));
const RegisterContainer = lazy(() => import('./register/register-container'));

const Index = (props) => {
    return (
        <div>
            <Suspense fallback={<div id={'loading'}/>}>
                <Main/>
            </Suspense> 
            
            <Suspense fallback={<div id={'loading'}/>}>
                <Acquaintance/> 
            </Suspense>
            
            <Suspense fallback={<div id={'loading'}/>}>
                <UsersContainer/>
            </Suspense>
            
            <Suspense fallback={<div id={'loading'}/>}>
                <RegisterContainer/>
            </Suspense>
        </div>
    )
}

export default Index;