import { Outlet } from 'react-router-dom';
// import NavMenu from '@/components/shared/NavMenu';

export default function AppLayout() {
    return (
        <>
            {/* <header className="bg-[#050404] py-2 px-8">
                <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-center">
                    <div className="w-32"> */}
                        {/* <Logo /> */}
                    {/* </div>
                    <NavMenu />
                </div>
            </header> */}

            <section
                className="max-w-screen-2xl mx-auto p-5"
            >
                <Outlet />
            </section>
        </>
    );
}