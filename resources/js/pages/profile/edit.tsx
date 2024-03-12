import AuthLayout from '@/layouts/auth-layout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import DeleteUserForm from './partials/delete-user-form';
import UpdatePasswordForm from './partials/update-password-form';
import UpdateProfileInformationForm from './partials/update-profile-information-form';

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title='Profile' />

            <div className='flex items-center gap-4'>
                <Link href={route('home')}>Home</Link>
                <Link href={route('dashboard')}>Dashboard</Link>
            </div>
            <div className='py-12'>
                <div className='mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className='max-w-xl'
                        />
                    </div>

                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <UpdatePasswordForm className='max-w-xl' />
                    </div>

                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <DeleteUserForm className='max-w-xl' />
                    </div>
                </div>
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <AuthLayout children={page} />;
