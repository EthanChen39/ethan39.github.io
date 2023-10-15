import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface DefaultPaginationProps {
    active: number;
    handleSubmite: () => void;
    setActive: (index: number) => void;
}

export function DefaultPagination({ active = 0, setActive, handleSubmite }: DefaultPaginationProps) {

    const getItemProps = (index: number) =>
    ({
        variant: active === index ? "filled" : "text",
        size: "sm",
        color: "gray",
        onClick: () => setActive(index),
    } as any);

    const next = () => {
        if (active === 4) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 0) return;
        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-4 my-10">
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={prev}
                size="sm"
                disabled={active === 0}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-3 w-3" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(0)}>1</IconButton>
                <IconButton {...getItemProps(1)}>2</IconButton>
                <IconButton {...getItemProps(2)}>3</IconButton>
                <IconButton {...getItemProps(3)}>4</IconButton>
                <IconButton {...getItemProps(4)}>5</IconButton>
            </div>
            {active === 4 ? (
                <Button 
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={handleSubmite}
                    size="sm">
                    Submit
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            ) : (
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    size="sm"
                    disabled={active === 4}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            )}

        </div>
    );
}