import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import FooterComponent from './FooterComponent';
import HomePage from './pages/HomePage';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeams } from "./ui/background-beams";

const NavBarComponent = () => {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const MoveToLogin = () => {
        navigate('/login');
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                Home
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                Why Smart Learn?
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                About Us
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                Contact Us
            </Typography>
        </ul>
    );

    return (
        <>
            <div className="relative min-h-screen">
                <div className="sticky top-0 z-10 w-full bg-white px-4 py-2 lg:px-8 lg:py-4">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                            Smart Learn
                        </Typography>
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                            onClick={MoveToLogin}
                        >
                            <span>Get started</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>
                    <Collapse open={openNav}>
                        {navList}
                        <Button fullWidth variant="gradient" size="sm" onClick={MoveToLogin}>
                            <span>Get started</span>
                        </Button>
                    </Collapse>
                </div>
                <div className="px-4 lg:px-8">
                    <HomePage />
                    <FooterComponent />
                </div>
                <BackgroundBeams />
            </div>
        </>
    );
}

export default NavBarComponent;
