import { Routes as RoutesDOM, Route, Navigate } from 'react-router-dom';
import { CreateScheduling } from '../pages/CreateScheduling';
import { ErrorPage } from '../pages/ErrorPage.tsx';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Router() {

    return (

        <RoutesDOM>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/agendar' element={<CreateScheduling />} />
            <Route path='/nao-encontrada' element={<ErrorPage />} />
            <Route path='*' element={<Navigate to='/nao-encontrada' />} />
        </RoutesDOM>
    );
}