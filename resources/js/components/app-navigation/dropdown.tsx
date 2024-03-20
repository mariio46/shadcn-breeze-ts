import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { Icon } from '../icon';
import { AppNavigationDropdownProfile } from './dropdown-profile';

export const AppNavigationDropdown = ({ user }: { user: User }): JSX.Element => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className='size-9 cursor-pointer'>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.fallback}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-full min-w-[8rem]'>
                    <DropdownMenuLabel>
                        <AppNavigationDropdownProfile name={user.name} email={user.email}>
                            <Avatar className='size-8'>
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.fallback}</AvatarFallback>
                            </Avatar>
                        </AppNavigationDropdownProfile>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href={route('dashboard')}>
                            <Icon name='IconBrandSpeedtest' className='mr-1.5 stroke-[1.3]' />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={route('settings.account')}>
                            <Icon name='IconSettings' className='mr-1.5 stroke-[1.3]' />
                            Settings
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href={route('logout')} as='button' method='post' className='w-full'>
                            <Icon name='IconLogout' className='mr-1.5 stroke-[1.3]' />
                            Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
