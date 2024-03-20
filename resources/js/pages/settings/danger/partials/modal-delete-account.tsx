import { Icon } from '@/components/icon';
import { InputError } from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDialogAction } from '@/hooks/use-dialog';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

interface DeleteAccountForm {
    password: string;
}

export const ModalDeleteAccount = (): JSX.Element => {
    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');
    const { openDialog, toggleDialog } = useDialogAction();
    const password_input_ref = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm<DeleteAccountForm>({
        password: '',
    });

    const isDisabled: boolean = data.password === '' || processing;

    const closeModal = (): void => {
        reset();
        toggleDialog();
        errors.password = '';
        data.password = '';
    };

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('settings.danger'), {
            preserveScroll: true,
            onSuccess: () => {
                toggleDialog();
                passwordType === 'text' && setPasswordType('password');
            },
            onError: () => password_input_ref.current?.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <>
            <Button variant='destructive' className='mt-5' onClick={toggleDialog}>
                Delete Account
            </Button>
            <Dialog open={openDialog} onOpenChange={closeModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                        <DialogDescription>
                            Once your account is deleted, all of its resources and data will be permanently deleted.
                            Please enter your password to confirm you would like to permanently delete your account.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submit}>
                        <div>
                            <Label htmlFor='password' className='sr-only'>
                                Password
                            </Label>
                            <div className='relative bg-red-50'>
                                <Input
                                    id='password'
                                    ref={password_input_ref}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    autoFocus
                                    type={passwordType}
                                    required
                                    placeholder='********'
                                    className='mt-1'
                                />
                                <Icon
                                    name={passwordType === 'password' ? 'IconEye' : 'IconEyeOff'}
                                    className='absolute right-2 cursor-pointer top-0 bottom-0 h-full'
                                    onClick={() =>
                                        passwordType === 'password'
                                            ? setPasswordType('text')
                                            : setPasswordType('password')
                                    }
                                />
                            </div>
                            <InputError message={errors.password} className='mt-1' />
                        </div>
                        <DialogFooter className='mt-3'>
                            <Button type='button' variant='outline' onClick={closeModal}>
                                Cancel
                            </Button>
                            <Button type='submit' variant='destructive' disabled={isDisabled}>
                                Delete
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};
