import Link from 'next/link';
import sidebar from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <div className={sidebar.mainDiv}>
            <div className="d-flex align-items-center">
                <img src="/images/admin_logo.svg" alt="Meuoop Logo" width={150} height={50} /> {/* Use img tag directly */}
            </div>
            <ul className="list-unstyled mt-3"> {/* Added margin-top for spacing */}
                <li>
                    <Link href="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/admin/users">Users</Link>
                </li>
                <li>
                    <Link href="/admin/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
