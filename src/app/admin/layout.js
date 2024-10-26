import Sidebar from '../components/admin/sidebar/Sidebar'; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/admin.css';

export default function AdminLayout({ children }) {
    return (
        <div className="container-fluid d-flex p-0">
            <div className="col-auto p-0" style={{ width: '250px' }}>
                <Sidebar />
            </div>
            <main className="flex-grow-1 p-4 admin-layout-main-container">
                {children}
            </main>
        </div>
    );
}
