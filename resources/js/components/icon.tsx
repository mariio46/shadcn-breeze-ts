import { cn } from '@/lib/utils/tailwind-merge';
import { TablerIconProps } from '@/types/tabler-icons';
import * as icons from '@tabler/icons-react';

interface IconProps extends TablerIconProps {
    className?: string;
    name: keyof typeof icons;
}

export const Icon = ({ className, name, ...props }: IconProps) => {
    const TablerIcon = icons[name] as React.FC<TablerIconProps>;
    return <TablerIcon className={cn('size-5 stroke-[1.5]', className)} {...props} />;
};
