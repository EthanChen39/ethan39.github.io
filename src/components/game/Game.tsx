import { useState } from "react";
import {
    Button, ListItem,
    Card, CardBody, CardFooter, Typography, Radio, List, ListItemPrefix,
} from "@material-tailwind/react";
import { NumberBoard } from "./NumberBoard";
import RadioList from "../RadioList";
import { DefaultPagination } from "../DefaultPagination";
import { convertNumberToMonthName } from "@/common/util";
import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";

export default function Game() {
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
    const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
    const [boardIndex, setBoardIndex] = useState<number>(0);

    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };



    const [dateValueList, setDateValueList] = useState<string[]>(["Yes", "Yes", "Yes", "Yes", "Yes",]);

    const [monthValueList, setMonthValueList] = useState<string[]>(["Yes", "Yes", "Yes", "Yes", "Yes",]);

    const handleSubmite = () => {
        const date: number = dateValueList.reduce((acc: number, cur: string, index: number) => acc + (cur === "Yes" ? Math.pow(2, index) : 0), 0);
        const month: number = monthValueList.reduce((acc: number, cur: string, index: number) => acc + (cur === "Yes" ? Math.pow(2, index) : 0), 0);
        try {
            const birthday: string = `${convertNumberToMonthName(month - 1)} ${date}`;
            setIsGameFinished(true);
            setIsGameStarted(false);
            alert(`Your birthday is ${birthday}`);
        } catch (error) {
            setOpen(true);
            return;
        }
    };

    return (
        <Card className="">
            {isGameFinished && (
                <>
                    <h1>Done!</h1>
                </>
            )}
            {
                isGameStarted && (
                    <>
                        <Button
                            className="absolute flex items-center gap-2 top-1 left-4 mt-5 ml-5"
                            color="blue-gray"
                            size="sm"
                            onClick={() => setIsGameStarted(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>

                            Back
                        </Button>
                    </>
                )
            }
            {isGameStarted ? (
                <div className="flex flex-col items-center">
                    <div className="flex flex-row mt-[5rem]">
                        <div className="flex flex-col justify-center items-center">
                            <Typography className="  text-gray-500" variant="h5">
                                Do you see your birthday MONTH?
                            </Typography>
                            <RadioList boardIndex={boardIndex} valueList={monthValueList} setValueList={setMonthValueList} radioName={`month-${boardIndex}`} btnNameList={["Yes", "No"]} />

                        </div>
                        <div className="flex flex-col justify-center items-center ml-5">
                            <Typography className="ml-10 text-gray-500" variant="h5">
                                Do you see your birthday DAY?
                            </Typography>
                            <RadioList boardIndex={boardIndex} valueList={dateValueList} setValueList={setDateValueList} radioName={`day-${boardIndex}`} className="ml-10" btnNameList={["Yes", "No"]} />
                        </div>
                    </div>
                    <NumberBoard boardIndex={boardIndex} />
                    <DefaultPagination handleSubmite={handleSubmite} active={boardIndex} setActive={setBoardIndex} />
                </div>
            ) : (
                <>
                    <Typography variant="h3" className="p-10 ml-5">BirthDate Detective</Typography>
                    <CardBody className="item-center justify-center">
                        <Typography variant="h5" className="p-10">
                            Think I can&rsquo;t guess your birthday? 🎂
                            <br /><br />
                            Put me to the test! Just answer a few quick &rsquo;yes&rsquo; or &rsquo;no&rsquo; questions, and let the BirthDate Detective unveil the mystery of your special day. Dive in and see if you can stump me
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center">
                        <Button color="blue-gray" size="sm" className="text-md" onClick={() => setIsGameStarted(true)}>
                            Start
                        </Button>
                    </CardFooter>
                </>
            )}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Your input is invalid, check your input and try again!
                </Alert>
            </Snackbar>
        </Card>
    );
}