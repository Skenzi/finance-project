import {
    createBrowserRouter,
} from 'react-router';
import App from './App';
import Dashboard from '../pages/Dashboard/Dashboard';
import Income from '../pages/Income/Income';
import Expenses from '../pages/Expenses/Expenses';
import Transactions from '../pages/Transactions/Transactions';
import Goals from '../pages/Goals/Goals';

export default createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Dashboard },
            { path: "income", Component: Income },
            { path: "expenses", Component: Expenses },
            { path: "transactions", Component: Transactions },
            { path: "goals", Component: Goals }
        ]
    }
]);