import { Icon } from '@/components/icon';
import { cn } from '@/lib/utils/tailwind-merge';
import { TablerIconType } from '@/types/tabler-icons';
import { InertiaLinkProps, Link } from '@inertiajs/react';

export const SettingLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
    return (
        <>
            <div className='mx-auto px-4 sm:px-6 md:px-4 lg:max-w-6xl lg:px-6 xl:max-w-screen-2xl py-4 sm:py-6 lg:py-8 xl:py-12'>
                <h3 className='text-xl font-bold tracking-tight'>{title}</h3>
            </div>
            <div className='mx-auto px-4 pb-4 sm:px-6 sm:pb-6 md:px-4 lg:max-w-6xl lg:px-6 lg:pb-8 xl:max-w-screen-2xl xl:pb-12'>
                <div className='flex flex-col gap-x-16 gap-y-6 lg:flex-row'>
                    <div className='-mt-2 w-full shrink-0 lg:w-1/5'>
                        <SettingNavigationLink
                            icon='IconUserEdit'
                            href={route('settings.account')}
                            active={route().current('settings.account')}>
                            Account
                        </SettingNavigationLink>
                        <SettingNavigationLink
                            icon='IconShieldLock'
                            href={route('settings.security')}
                            active={route().current('settings.security')}>
                            Security
                        </SettingNavigationLink>
                        <SettingNavigationLink
                            icon='IconAlertTriangle'
                            href={route('settings.danger')}
                            active={route().current('settings.danger')}>
                            Danger Zone
                        </SettingNavigationLink>
                    </div>
                    <div className='w-full'>{children}</div>
                </div>
            </div>
        </>
    );
};

const SettingNavigationLink = ({
    active,
    icon,
    className,
    children,
    ...props
}: InertiaLinkProps & { active?: boolean; icon: TablerIconType }) => {
    const isActive: string = active ? 'text-foreground ' : 'text-foreground/70';
    return (
        <Link
            className={cn(
                'relative -mx-4 flex gap-3 px-4 py-2 text-sm font-medium hover:bg-accent lg:rounded-lg',
                isActive,
                className,
            )}
            {...props}>
            <Icon name={icon} />
            {children}
        </Link>
    );
};
