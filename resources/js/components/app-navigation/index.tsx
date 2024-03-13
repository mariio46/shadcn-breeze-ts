import ApplicationLogo from '@/components/application-logo';
import { Separator } from '@/components/ui/separator';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { AppNavigationDropdown } from './dropdown';
import { AppNavigationLink } from './link';

export const AppNavigation = () => {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <nav className='relative z-20 mx-auto hidden max-w-screen-2xl items-center justify-between bg-background px-4 py-3 md:flex lg:px-8 lg:py-4'>
                <Link href='#'>
                    <ApplicationLogo className='block h-9 w-auto fill-current text-gray-800' />
                </Link>
                <div className='flex items-center gap-2'>
                    <AppNavigationLink href={route('home')} active={route().current('home')}>
                        Home
                    </AppNavigationLink>

                    <Separator orientation='vertical' className='mx-2 h-8 w-[1px] shrink-0 bg-slate-500/20' />

                    {auth.user ? (
                        <>
                            {/* <NavigationLink href={route('dashboard')}>Dashboard</NavigationLink>
                            <NavigationLink href={route('profile.edit')}>Profile</NavigationLink>
                            <NavigationLink href={route('logout')} as='button' method='post'>
                                Logout
                            </NavigationLink> */}
                            <AppNavigationDropdown />
                        </>
                    ) : (
                        <>
                            <AppNavigationLink href={route('login')}>Login</AppNavigationLink>
                            <AppNavigationLink href={route('register')}>Register</AppNavigationLink>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};
