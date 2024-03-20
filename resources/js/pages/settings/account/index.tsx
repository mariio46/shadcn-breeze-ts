import { InputError } from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { SettingLayout } from '@/layouts/settings-layouts';
import { PageProps } from '@/types';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

interface AccountProps extends PageProps {
    mustVerifyEmail: boolean;
    status?: string;
}

function Account() {
    const {
        auth: { user },
        mustVerifyEmail,
        status,
    } = usePage<AccountProps>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<{
        name: string;
        username: string;
        email: string;
    }>({
        name: user.name,
        username: user.username,
        email: user.email,
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('settings.account'));
    };

    return (
        <>
            <Card className='max-w-3xl rounded-none border-none shadow-none'>
                <CardHeader className='p-0'>
                    <CardTitle className='text-lg'>Account Information</CardTitle>
                    <CardDescription>Update your account's profile information and email address.</CardDescription>
                </CardHeader>
                <CardContent className='p-0'>
                    <form onSubmit={submit} className='mt-6 space-y-6'>
                        <div>
                            <Label htmlFor='name'>Name</Label>

                            <Input
                                id='name'
                                className='mt-1 block w-full'
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoFocus
                                autoComplete='name'
                            />

                            <InputError className='mt-2' message={errors.name} />
                        </div>

                        <div>
                            <Label htmlFor='username'>Username</Label>

                            <Input
                                id='username'
                                className='mt-1 block w-full'
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                                required
                                autoComplete='username'
                            />

                            <InputError className='mt-2' message={errors.username} />
                        </div>

                        <div>
                            <Label htmlFor='email'>Email</Label>

                            <Input
                                id='email'
                                type='email'
                                className='mt-1 block w-full'
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete='username'
                            />

                            <InputError className='mt-2' message={errors.email} />
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className='mt-2 text-sm text-gray-800'>
                                    Your email address is unverified.
                                    <Link
                                        href={route('verification.send')}
                                        method='post'
                                        as='button'
                                        className='rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                        Click here to re-send the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className='mt-2 text-sm font-medium text-green-600'>
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className='flex items-center gap-4'>
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter='transition ease-in-out'
                                enterFrom='opacity-0'
                                leave='transition ease-in-out'
                                leaveTo='opacity-0'>
                                <p className='text-sm text-gray-600'>Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

Account.layout = (page: React.ReactNode) => (
    <AuthLayout title='Account Information'>
        <SettingLayout children={page} title='Account' />
    </AuthLayout>
);

export default Account;
