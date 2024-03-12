import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Home() {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <Head title='Home' />
            <h1>Home</h1>
            {auth.user ? (
                <div className='flex items-center gap-4'>
                    <Link href={route('dashboard')}>Dashboard</Link>
                    <Link href={route('logout')} as='button' method='post'>
                        Logout
                    </Link>
                </div>
            ) : (
                <div className='flex items-center gap-4'>
                    <Link href={route('login')}>Login</Link>
                    <Link href={route('register')}>Register</Link>
                </div>
            )}
        </>
    );
}
