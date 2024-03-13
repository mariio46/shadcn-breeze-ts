import { InputError } from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/guest-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title='Register' />

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor='name'>Name</Label>

                    <Input
                        id='name'
                        name='name'
                        value={data.name}
                        className='mt-1 block w-full'
                        autoComplete='name'
                        autoFocus
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className='mt-1' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='email'>Email</Label>

                    <Input
                        id='email'
                        type='email'
                        name='email'
                        value={data.email}
                        className='mt-1 block w-full'
                        autoComplete='username'
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        autoComplete='new-password'
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className='mt-1' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password_confirmation'>Confirm Password</Label>

                    <Input
                        id='password_confirmation'
                        type='password'
                        name='password_confirmation'
                        value={data.password_confirmation}
                        className='mt-1 block w-full'
                        autoComplete='new-password'
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className='mt-1' />
                </div>

                <div className='mt-4 flex items-center justify-between'>
                    <Link href={route('home')} className='text-sm text-muted-foreground hover:text-foreground'>
                        Home
                    </Link>
                    <div className='flex items-center justify-end gap-2'>
                        <Link href={route('login')} className='text-sm text-muted-foreground hover:text-foreground'>
                            Login
                        </Link>

                        <Button disabled={processing}>Register</Button>
                    </div>
                </div>
            </form>
        </>
    );
};

Register.layout = (page: React.ReactNode) => <GuestLayout children={page} />;

export default Register;
