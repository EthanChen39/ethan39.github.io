import {
    Card,
    CardBody,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import Image from 'next/image';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from "@/contexts/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PersonalLink } from "@/types/Url";


export default function PersonalCard() {
    const isDarkMode: boolean = useTheme().theme === "dark";

    const cardBackgroundColor: string = isDarkMode ? "bg-secondary-dark" : "bg-white";
    const fontColor: string = isDarkMode ? "white" : "gray";

    const iconStyle: string = "mx-2 w-6 h-6";
    const iconColor: string = isDarkMode ? "white" : "inherit";

    return (
        <div className="">
            <Card className={`${cardBackgroundColor} border-black shadow-lg max-w-sm`} shadow={true}>
                <div className="flex items-center justify-left my-4 ml-3">
                    <Image src="/toronto.JPG" alt="profile-pic" className="rounded-full h-9 w-9" width={36} height={36} />
                    <div className="flex-col justify-center items-center">
                        <Typography color={fontColor} variant="small" className="font-bold ml-3 mt-1">
                            陈世禧 (Shixi Chen)
                        </Typography>

                        <Typography color={fontColor} variant="small" className="ml-3">
                            Vancouver, British Columbia
                        </Typography>
                    </div>
                </div>
                <CardBody className="flex-col p-0 border-transparent">
                    <div className="mx-12 flex justify-center flex-col items-center">
                        <Image src="/self.jpg" alt="profile-pic" className="rounded-md" width={200} height={200} />
                        <div className={`mt-2 mx-0.5 w-2.5 h-2.5 ${isDarkMode ? "bg-white" : "bg-gray-600"} rounded-full`}></div>

                    </div>
                    <div className="flex flex-col justify-start ml-2">
                        <div className="flex flex-row items-start justify-left mt-7">
                            <SchoolIcon className="w-5.5 h-5.5 mx-2 mt-1" sx={{ color: iconColor }} />
                            <div className="flex flex-row mt-1">
                                <Typography color={fontColor} className="" variant="small">
                                    University of British Columbia
                                </Typography>

                            </div>
                        </div>

                        <div className="flex flex-row items-start justify-left mt-1">
                            <WorkIcon className="w-5 h-5 mx-2.5 mt-0.5" sx={{ color: iconColor }} />
                            <div className="flex flex-row">
                                <Typography color={fontColor} variant="small">
                                    Software Engineer Intern
                                </Typography>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-left mt-1">
                            <LocationOnIcon className="w-5 h-5 mx-2.5 mt-0.5" sx={{ color: iconColor }} />
                            <div className="flex flex-row">
                                <Typography color={fontColor} variant="small">
                                    Vancouver, BC, Canada
                                </Typography>
                            </div>
                        </div>
                    </div>
                </CardBody>

                <div className="flex justify-between items-center my-4 ml-2">
                    <div className="flex">
                        <Tooltip content="Email" placement="bottom">
                            <a href="mailto:1014317748123qwe@gmail.com" target="_blank" rel="noopener noreferrer">
                                <EmailIcon className={iconStyle} sx={{ color: iconColor }} />
                            </a>
                        </Tooltip>
                        <Tooltip content="Phone" placement="bottom">
                            <a href="tel:7783255339" target="_blank" rel="noopener noreferrer">
                                <PhoneIcon className={iconStyle} sx={{ color: iconColor }} />
                            </a>
                        </Tooltip>
                        <Tooltip content="GitHub" placement="bottom">
                            <a href={PersonalLink.Github} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className={iconStyle} sx={{ color: iconColor }} />
                            </a>
                        </Tooltip>
                        <Tooltip content="LinkedIn" placement="bottom">
                            <a href={PersonalLink.Linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className={iconStyle} sx={{ color: iconColor }} />
                            </a>
                        </Tooltip>
                        <Tooltip content="Instagram" placement="bottom">
                            <a href={PersonalLink.Instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className={iconStyle} sx={{ color: iconColor }} />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </Card>
        </div>

    );
}