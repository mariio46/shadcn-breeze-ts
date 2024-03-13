type AppNavigationDropdownProfileProps = React.PropsWithChildren<{ name: string; email: string }>;

export const AppNavigationDropdownProfile = ({
    children,
    name,
    email,
}: AppNavigationDropdownProfileProps): JSX.Element => {
    return (
        <div className='relative flex items-center font-normal'>
            {children}
            <div className='ml-3'>
                <strong className='inline-flex items-center font-semibold'>{name}</strong>
                <div className='text-muted-foreground'>{email}</div>
            </div>
        </div>
    );
};
