import { AppNavigation } from '@/components/app-navigation';
import AuthNavigation from '@/components/auth-navigation';
import { Head } from '@inertiajs/react';

export default function AuthLayout({ children, title }: { children: React.ReactNode; title?: string }) {
    return (
        <>
            {title && <Head title={title} />}
            <AppNavigation />
            <AuthNavigation />
            <main className='max-w-screen-2xl'>{children}</main>
        </>
    );
}
