import { InputError } from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { SettingLayout } from '@/layouts/settings-layouts';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

interface UpdatePasswordForm {
    current_password: string;
    password: string;
    password_confirmation: string;
}

function Security() {
    const current_password_ref = useRef<HTMLInputElement>(null);
    const new_password_ref = useRef<HTMLInputElement>(null);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm<UpdatePasswordForm>({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const isDisabled: boolean = Object.values(data).some((value) => value === '') || processing;

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();

        put(route('settings.security'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    new_password_ref.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    current_password_ref.current?.focus();
                }
            },
        });
    };

    return (
        <Card className='max-w-3xl rounded-none border-none shadow-none'>
            <CardHeader className='p-0'>
                <CardTitle className='text-lg'>Update Password</CardTitle>
                <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
            </CardHeader>
            <CardContent className='p-0'>
                <form onSubmit={submit} className='mt-6 space-y-6'>
                    <div>
                        <Label htmlFor='current_password'>Current Password</Label>

                        <Input
                            id='current_password'
                            ref={current_password_ref}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type='password'
                            className='mt-1 block w-full'
                            autoComplete='current-password'
                        />

                        <InputError message={errors.current_password} className='mt-0.5' />
                    </div>

                    <div>
                        <Label htmlFor='password'>New Password</Label>

                        <Input
                            id='password'
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type='password'
                            className='mt-1 block w-full'
                            autoComplete='new-password'
                        />

                        <InputError message={errors.password} className='mt-0.5' />
                    </div>

                    <div>
                        <Label htmlFor='password_confirmation'>Confirm Password</Label>

                        <Input
                            id='password_confirmation'
                            ref={new_password_ref}
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type='password'
                            className='mt-1 block w-full'
                            autoComplete='new-password'
                        />

                        <InputError message={errors.password_confirmation} className='mt-0.5' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <Button disabled={isDisabled} type='submit'>
                            Save
                        </Button>

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
    );
}

Security.layout = (page: React.ReactNode) => (
    <AuthLayout title='Update Password'>
        <SettingLayout children={page} title='Security' />
    </AuthLayout>
);

export default Security;
