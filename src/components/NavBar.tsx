import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Route } from "@/types/Route";
import { useTheme } from "@/contexts/ThemeContext";
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';

export function NavbarTop() {
    const [openNav, setOpenNav] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const isDarkMode: boolean = theme === "dark";
    const fontColor: string = isDarkMode ? "white" : "gray";
    const router = useRouter();

    const navBarItems: string[] = ["Updates", "Blog"];

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 900 && setOpenNav(false),
        );
    }, []);

    const navList: JSX.Element = (
        <ul className="mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navBarItems.map((item, index) => (
                <Button variant="text" color="blue-gray" size="sm" key={index} className="hover:underline relative"
                    onClick={() => router.push(item.toLocaleLowerCase())}>
                    <Typography variant="h5" color={fontColor}>{item}</Typography>
                    <div className="absolute left-0 bottom-0 h-0.5 bg-blue-gray mt-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </Button>
            ))}
        </ul>
    );

    return (
        <nav
            className="z-10 max-w-screen-l border-transparent shadow-transparent mx-auto py-2 lg:py-3 flex justify-between dark:bg-slate-900 sticky top-0 backdrop-filter backdrop-blur-sm"
            >

            <div className="flex items-center justify-between w-full ml-6 mr-4">
                <Button ripple={false} variant="text" color="blue-gray" size="md" className="ml-[10rem] rounded-full " onClick={() => router.push(Route.Home)}>
                    <Typography variant="h4" color={fontColor}>CSXSC</Typography>
                </Button>
            </div>

            <div className="mx-auto flex items-center justify-center ml-[9rem] text-blue-gray-900">
                <div className="hidden lg:block">{navList}</div>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>

            <IconButton className="mx-auto flex-shrink-0 mr-3 text-yellow-800" variant="text" size="lg" onClick={() => toggleTheme()}>
                {/* {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />} */}
            </IconButton>

        </nav>
    );
}