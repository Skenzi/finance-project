import { memo, useState } from "react";
import { NavLink } from "react-router";
import styles from './NavBar.module.css';

const NavBar = memo(() => {
    const url = window.location.href.split('/');
    console.log("nav")
    const [activePage, setPage] = useState<string>(url[url.length - 1]);
    return <nav className={ styles.navbar }>
        <h1 className={ styles.navbarTitle }>Personal Finance Tracker</h1>
        <ul className={ styles.navbarMenu }>
            <li className={ styles.navbarMenuItem + (activePage === 'dashboard' ? ' ' + styles.navbarMenuItemActive : '') } onClick={ () => setPage('dashboard') }>
                <NavLink to="/">Dashboard</NavLink>
            </li>
            <li className={ styles.navbarMenuItem + (activePage === 'income' ? ' ' + styles.navbarMenuItemActive : '') } onClick={ () => setPage('income') }>
                <NavLink to="/income">Income</NavLink>
            </li>
            <li className={ styles.navbarMenuItem + (activePage === 'expenses' ? ' ' + styles.navbarMenuItemActive : '') } onClick={ () => setPage('expenses') }>
                <NavLink to="/expenses">Expenses</NavLink>
            </li>
            <li className={ styles.navbarMenuItem + (activePage === 'transactions' ? ' ' + styles.navbarMenuItemActive : '') } onClick={ () => setPage('transactions') }>
                <NavLink to="/transactions">Transactions</NavLink>
            </li>
            <li className={ styles.navbarMenuItem + (activePage === 'goals' ? ' ' + styles.navbarMenuItemActive : '') } onClick={ () => setPage('goals') }>
                <NavLink to="/goals">Goals</NavLink>
            </li>
        </ul>
    </nav>
});

export default NavBar;