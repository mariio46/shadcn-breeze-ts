import { cn } from '@/lib/utils/tailwind-merge';
import type { ActiveProps } from '@/types/active';
import { Link, type InertiaLinkProps } from '@inertiajs/react';

type AuthNavigationLinkProps = InertiaLinkProps & ActiveProps;

export const AuthNavigationLink = ({ active, className, children, ...props }: AuthNavigationLinkProps): JSX.Element => {
    const isActive: string = active ? 'text-foreground border-foreground' : 'text-foreground/70 border-transparent';

    return (
        <Link
            className={cn(
                'group relative z-10 block whitespace-nowrap border-b-[2.5px] py-3.5 text-sm',
                isActive,
                className,
            )}
            {...props}>
            <span className='-mx-3 rounded px-3 py-2 transition duration-200 group-hover:bg-accent'>{children}</span>
        </Link>
    );
};
