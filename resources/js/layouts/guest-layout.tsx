import { Children } from '@/types/children';

export default function GuestLayout({ children }: Children) {
    return (
        <main className='flex min-h-screen w-full items-center justify-center'>
            <div className='w-full max-w-md'>{children}</div>
        </main>
    );
}
