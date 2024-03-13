import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@inertiajs/react';
import { Icon } from '../icon';
import { AppNavigationDropdownProfile } from './dropdown-profile';

export const AppNavigationDropdown = (): JSX.Element => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className='size-9 cursor-pointer'>
                        <AvatarImage src='https://www.gravatar.com/avatar/4822b64d3795ec945b7f0fc8b57ba824?s=200&d=mp' />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='mt-2 w-full min-w-[8rem]'>
                    <DropdownMenuLabel>
                        <AppNavigationDropdownProfile name='Mario' email='mariomad2296@gmail.com'>
                            <Avatar className='size-8'>
                                <AvatarImage
                                    src='https://www.gravatar.com/avatar/4822b64d3795ec945b7f0fc8b57ba824?s=200&d=mp'
                                    alt='M'
                                />
                                <AvatarFallback>M</AvatarFallback>
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
                        <Link href={route('profile.edit')}>
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
