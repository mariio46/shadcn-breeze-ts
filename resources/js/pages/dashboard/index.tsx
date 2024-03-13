import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';

const Dashboard = () => {
    return (
        <>
            <Head title='Dashboard' />
            <div className='bg-green-50'>
                <h1>Dashboard</h1>
            </div>
        </>
    );
};

Dashboard.layout = (page: React.ReactNode) => <AuthLayout children={page} />;

export default Dashboard;
