import { InputError } from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

const Login = ({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) => {
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
            <Head title='Login' />

            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={submit} className='w-full'>
                <div>
                    <Label htmlFor='email'>Email</Label>

                    <Input
                        id='email'
                        type='email'
                        name='email'
                        value={data.email}
                        className='mt-1 block w-full'
                        autoComplete='username'
                        onChange={(e) => setData('email', e.target.value)}
                        autoFocus
                    />

                    <InputError message={errors.email} className='mt-1' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>

                    <Input
                        id='password'
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1 block w-full'
                        autoComplete='current-password'
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className='mt-1' />
                </div>

                <div className='mt-4 block'>
                    <div className='flex items-center justify-between'>
                        <label className='flex items-center'>
                            <Checkbox
                                name='remember'
                                checked={data.remember}
                                onCheckedChange={(e: boolean) => setData('remember', e)}
                            />
                            <span className='ms-2 select-none text-sm text-muted-foreground'>Remember me</span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className='rounded-md text-sm text-muted-foreground hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                </div>

                <div className='mt-4 flex items-center justify-between'>
                    <Link href={route('home')} className='text-sm text-muted-foreground hover:text-foreground'>
                        Home
                    </Link>
                    <div className='flex items-center justify-end gap-2'>
                        <Link href={route('register')} className='text-sm text-muted-foreground hover:text-foreground'>
                            Register
                        </Link>
                        <Button disabled={processing}>Login</Button>
                    </div>
                </div>
            </form>
        </>
    );
};

Login.layout = (page: React.ReactNode) => <GuestLayout children={page} />;

export default Login;
