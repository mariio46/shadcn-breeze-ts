import type { PageProps, User } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { request_user: user } = usePage<PageProps<{ request_user: User }>>().props;

    return (
        <>
            <Head title='Dashboard' />
            <div>
                <h1>{user.name}</h1>
                <div className='flex items-center gap-4'>
                    <Link href={route('home')}>Home</Link>
                    <Link href={route('profile.edit')}>Profile</Link>
                </div>
            </div>
        </>
    );
}
