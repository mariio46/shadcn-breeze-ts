import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils/tailwind-merge';
import type { ActiveProps } from '@/types/active';
import { Link, type InertiaLinkProps } from '@inertiajs/react';

type AppNavigationLinkProps = InertiaLinkProps & ActiveProps;

export const AppNavigationLink = ({ className, active, ...props }: AppNavigationLinkProps): JSX.Element => {
    const isActive: string = active ? 'bg-accent' : '';

    return <Link className={cn(buttonVariants({ variant: 'ghost' }), isActive, className)} {...props} />;
};
