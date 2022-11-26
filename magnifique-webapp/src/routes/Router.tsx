import { Routes as RoutesDOM, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Router() {

    return (

        <RoutesDOM>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Navigate to='/404' />} />
        </RoutesDOM>
    );
}