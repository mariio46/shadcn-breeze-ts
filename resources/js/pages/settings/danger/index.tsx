import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AuthLayout from '@/layouts/auth-layout';
import { SettingLayout } from '@/layouts/settings-layouts';
import { ModalDeleteAccount } from './partials/modal-delete-account';

function Danger() {
    return (
        <>
            <Card className='max-w-3xl rounded-none border-none shadow-none'>
                <CardHeader className='p-0'>
                    <CardTitle className='text-lg'>Delete Account</CardTitle>
                    {/* <CardDescription>
                        Once your account is deleted, all of its resources and data will be permanently deleted. Before
                        deleting your account, please download any data or information that you wish to retain.
                    </CardDescription> */}
                    <CardDescription>
                        using Geist At Vercel, we've developed Geist, a typeface specifically designed for developers
                        and designers. We began by creating a monospace version that prioritized readability and
                        seamlessly integrated into coding environments.
                    </CardDescription>
                </CardHeader>
                <CardContent className='p-0'>
                    <ModalDeleteAccount />
                </CardContent>
            </Card>
        </>
    );
}

Danger.layout = (page: React.ReactNode) => (
    <AuthLayout title='Delete Account'>
        <SettingLayout title='Danger Area' children={page} />
    </AuthLayout>
);

export default Danger;
