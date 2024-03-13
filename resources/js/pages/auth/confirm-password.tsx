import { useEffect, FormEventHandler } from 'react';
import { InputError } from '@/components/input-error';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/layouts/guest-layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ConfirmPassword = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <>
            <Head title='Confirm Password' />

            <div className='mb-4 text-sm text-gray-600'>
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>

                    <Input
                        id='password'
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1 block w-full'
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className='mt-0.5' />
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <Button className='ms-4' disabled={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </>
    );
};

ConfirmPassword.layout = (page: React.ReactNode) => <GuestLayout children={page} />;

export default ConfirmPassword;
