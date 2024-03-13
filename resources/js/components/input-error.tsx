import { cn } from '@/lib/utils/tailwind-merge';
import React from 'react';

interface InputErrorType extends React.HTMLAttributes<HTMLParagraphElement> {
    message?: string;
}

export const InputError = ({ message, className, ...props }: InputErrorType) => {
    return message ? (
        <p className={cn('text-sm text-red-600', className)} {...props}>
            {message}
        </p>
    ) : null;
};
