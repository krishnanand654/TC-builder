import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
    const [user, setUser] = useState(false);
    const nav = useNavigate();

    const user_stored = localStorage.getItem('user');
    useEffect(() => {
        setUser(user_stored);
    }, [user_stored])

    const logout = () => {
        localStorage.clear();
        nav('/');
    }

    return (
        <div className='nav-bar'>
            <nav className='nav'>
                <h1>GVM TC Builder</h1>
                {user &&
                    <Button onClick={logout}>Logout</Button>}
            </nav>
        </div>
    )
}

export default Navbar