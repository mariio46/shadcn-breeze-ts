import { AuthNavigationLink } from './link';

export const AuthNavigation = (): JSX.Element => {
    return (
        <nav className='relative after:absolute after:bottom-[0.5px] after:left-0 after:right-0 after:top-auto after:h-px after:bg-border'>
            <div className='hide-scrollbar relative z-20 mx-auto block max-w-screen-2xl overflow-x-auto px-4 sm:px-6'>
                <ul className='flex items-center gap-x-8'>
                    <AuthNavigationLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </AuthNavigationLink>
                    <AuthNavigationLink href={route('settings.account')} active={route().current('settings.*')}>
                        Settings
                    </AuthNavigationLink>
                </ul>
            </div>
        </nav>
    );
};
