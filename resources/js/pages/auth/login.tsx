import GuestLayout from '@/layouts/guest-layout';
import Checkbox from '@/components/checkbox';
import InputError from '@/components/input-error';
import InputLabel from '@/components/input-label';
import PrimaryButton from '@/components/primary-button';
import TextInput from '@/components/text-input';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title='Log in' />

            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={submit} className='w-full'>
                <div>
                    <InputLabel htmlFor='email' value='Email' />

                    <TextInput
                        id='email'
                        type='email'
                        name='email'
                        value={data.email}
                        className='mt-1 block w-full'
                        autoComplete='username'
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor='password' value='Password' />

                    <TextInput
                        id='password'
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1 block w-full'
                        autoComplete='current-password'
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4 block'>
                    <div className='flex items-center justify-between'>
                        <label className='flex items-center'>
                            <Checkbox
                                name='remember'
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className='ms-2 text-sm text-gray-600'>Remember me</span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className='rounded-md text-sm text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                </div>

                <div className='mt-4 flex items-center justify-between'>
                    <Link href={route('home')} className='text-sm'>
                        Home
                    </Link>
                    <div className='flex items-center justify-end gap-2'>
                        <Link href={route('register')} className='text-sm'>
                            Register
                        </Link>
                        <PrimaryButton disabled={processing}>Login</PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
}

Login.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
