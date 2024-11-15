import { Outlet } from 'react-router-dom';

const AutrhLayout = () => {
    return (
        <div>
            This is Auth Layout.
            <Outlet></Outlet>
        </div>
    );
};

export default AutrhLayout;