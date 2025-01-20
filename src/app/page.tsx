
'use client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './components/user/styles/user.css';
import HomeContent from './components/user/pages/HomeContent';
import UserLayout from './user/layout/UserLayout';

export default function Home() {
  return (
    <>
    <UserLayout>
      <HomeContent />
      </UserLayout>
    </>
  );
}
