import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/providers/vite-theme-provider';
import type { TablerIconType } from '@/types/tabler-icons';
import { Icon } from './icon';

interface ThemeVariantType {
    label: string;
    action: 'dark' | 'light' | 'system';
    icon: TablerIconType;
}

const ThemeVariant = [
    {
        label: 'Light',
        action: 'light',
        icon: 'IconSunLow',
    },
    {
        label: 'Dark',
        action: 'dark',
        icon: 'IconMoon',
    },
    {
        label: 'System',
        action: 'system',
        icon: 'IconDeviceDesktop',
    },
] satisfies ThemeVariantType[];

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const setThemeIcon = (): TablerIconType => {
        let IconName: TablerIconType;

        switch (theme) {
            case 'light':
                IconName = 'IconSunLow';
                break;
            case 'dark':
                IconName = 'IconMoon';
                break;
            case 'system':
                IconName = 'IconDeviceDesktop';
                break;
            default:
                IconName = 'IconDeviceDesktop';
        }

        return IconName;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='size-9 focus-visible:ring-0'>
                    <Icon name={setThemeIcon()} className='stroke-[1.3]' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-40'>
                {ThemeVariant.map((item, i) => (
                    <DropdownMenuItem key={i} onClick={() => setTheme(item.action)} className='justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Icon name={item.icon} className='stroke-[1.3]' />
                            {item.label}
                        </div>
                        {theme === item.action && <Icon name='IconCheck' className='size-4 stroke-2' />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
