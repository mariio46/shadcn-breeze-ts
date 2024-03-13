import { cn } from '@/lib/utils/tailwind-merge';
import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function AuthNavigationLink({
    active,
    className,
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
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
}
