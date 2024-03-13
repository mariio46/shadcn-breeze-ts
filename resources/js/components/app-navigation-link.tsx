import { cn } from '@/lib/utils/tailwind-merge';
import { InertiaLinkProps, Link } from '@inertiajs/react';
import { buttonVariants } from './ui/button';

export const NavigationLink = ({ className, ...props }: InertiaLinkProps) => {
    return <Link className={cn(buttonVariants({ variant: 'ghost' }), className)} {...props} />;
};
