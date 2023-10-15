'use client';
import { NavbarTop } from "@/components/NavBar";
import { Typography } from "@material-tailwind/react";

export default function Blog() {
    return (
        <>
            <NavbarTop />
            <div className="mt-10">
                <Typography color="blue-gray" className="text-center text-4xl font-bold">Coming Soon...</Typography>
            </div>
        </>
    );
}