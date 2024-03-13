import { AppNavigation } from '@/components/app-navigation';
import { Head } from '@inertiajs/react';

export default function AppLayout({ children, title }: { children: React.ReactNode; title?: string }) {
    return (
        <>
            {title && <Head title={title} />}
            <AppNavigation />
            <main>{children}</main>
        </>
    );
}
