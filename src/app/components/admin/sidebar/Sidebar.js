import Link from 'next/link';
import Image from 'next/image';
import sidebar from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <div className={sidebar.mainDiv}>
            <div className={sidebar.sidebar_logo_div}>
                <Image src="/images/admin_logo.svg" alt="Meuoop Logo" width={150} height={31} /> {/* Use img tag directly */}
            </div>
            <ul className={sidebar.sidebar_menu_items}> {/* Added margin-top for spacing */}
                <li>
                    <Link href="/admin/dashboard">Dashboard</Link>
                </li>
                
             
               

                
                <hr/>
                <li>
                    <Link href="/admin/flows"> Flows </Link>
                </li>
                <li>
                    <Link href="/admin/users">Users</Link>
                </li>
                <li>
                    <Link href="/admin/elements"> Elements </Link>
                </li>
                <li>
                    <Link href="/admin/categories"> Categories </Link>
                </li>
                <li>
                    <Link href="/admin/pages"> Pages </Link>
                </li>
                <hr/>
                <li>
                    <Link href="/admin/uploads/ux-flow">Add UX Flow</Link>
                </li>
                <li>
                    <Link href="/admin/uploads/landing-pages">Add Landing Page</Link>
                </li>
                <li>
                    <Link href="/admin/users/add">Add User</Link>
                </li>
                
                <li>
                    <Link href="/admin/elements/add">Add Element</Link>
                </li>

                <li>
                    <Link href="/admin/categories/add">Add Category</Link>
                </li>

                <li>
                    <Link href="/admin/pages/add">Add Page</Link>
                </li>
                <li>
                    <Link href="/admin/themes/add">Add Theme</Link>
                </li>
                {/* <li>
                    <Link href="/admin/settings">Settings</Link>
                </li> */}
                
            </ul>
        </div>
    );
};

export default Sidebar;
