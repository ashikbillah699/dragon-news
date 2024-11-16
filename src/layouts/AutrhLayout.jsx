import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AutrhLayout = () => {
    return (
        <div className='bg-[#F3F3F3]'>
             <nav>
                    <Navbar></Navbar>
                </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AutrhLayout;