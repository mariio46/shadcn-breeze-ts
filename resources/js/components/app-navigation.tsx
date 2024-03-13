import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { NavigationLink } from './app-navigation-link';
import ApplicationLogo from './application-logo';
import { Separator } from './ui/separator';

export const AppNavigation = () => {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <nav className='relative z-20 mx-auto hidden max-w-screen-2xl items-center justify-between bg-background px-4 py-3 md:flex lg:px-8 lg:py-4'>
                <Link href='#'>
                    <ApplicationLogo className='block h-9 w-auto fill-current text-gray-800' />
                </Link>
                <div className='flex items-center gap-2'>
                    <NavigationLink href={route('home')}>Home</NavigationLink>

                    <Separator orientation='vertical' className='mx-2 h-8 w-[1px] shrink-0 bg-slate-500/20' />

                    {auth.user ? (
                        <>
                            <NavigationLink href={route('dashboard')}>Dashboard</NavigationLink>
                            <NavigationLink href={route('profile.edit')}>Profile</NavigationLink>
                            <NavigationLink href={route('logout')} as='button' method='post'>
                                Logout
                            </NavigationLink>
                        </>
                    ) : (
                        <>
                            <NavigationLink href={route('login')}>Login</NavigationLink>
                            <NavigationLink href={route('register')}>Register</NavigationLink>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};
