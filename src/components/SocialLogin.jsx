
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='space-y-2'>
            <button className="btn btn-outline btn-primary w-full"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="btn btn-outline w-full"><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
};

export default SocialLogin;