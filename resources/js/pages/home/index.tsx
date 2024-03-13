import AppLayout from '@/layouts/app-layout';

const Home = () => {
    return (
        <>
            <div className='min-h-[100rem]'></div>
        </>
    );
};

Home.layout = (page: React.ReactNode) => <AppLayout title='Home' children={page} />;

export default Home;
