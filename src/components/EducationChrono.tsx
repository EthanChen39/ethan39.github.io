import { Card } from "@material-tailwind/react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineBody,
    TimelineHeader,
} from "@material-tailwind/react";
import SchoolIcon from '@mui/icons-material/School';

interface EducationExperience {
    schoolName: string;
    schoolUrl: string;
    major: string;
    duration: string;
    location: string;
    comments: string;
}

export default function EducationChrono() {

    const educationExperience: EducationExperience[] = [
        {
            schoolName: "University of British Columbia(UBC)",
            schoolUrl: "https://www.ubc.ca/",
            duration: "Sep 2021 - Present",
            major: "Computer Science, BSc",
            location: "Vancouver, BC, Canada",
            comments: "Expected graduation date: April 2024",
        },
        {
            schoolName: "Langara College",
            schoolUrl: "https://langara.ca/",
            duration: "Jan 2020 - Aug 2021",
            major: "Computer Science, Associate",
            location: "Vancouver, BC, Canada",
            comments: "Transferred to UBC in September 2021.",
        }
    ];

    return (
        <div className="w-[30rem] p-10 mt-3 items-center">
            <Timeline className="flex flex-rol">
                {educationExperience.map((experience: EducationExperience, index: number) => (
                    <Card key={index} className="w-[35rem] border-transparent shadow-transparent hover:shadow-blue bg-gradient-to-r hover:bg-gray-100 hover:animate-shimmer transition-all duration-300">
                        <TimelineItem
                            key={index}
                            className="relative h-[13rem] p-3"
                            color="blue"
                        >
                            {index !== educationExperience.length - 1 && <TimelineConnector className="!w-[73px] !h-[8.3rem] mt-5" />}
                            <TimelineHeader className="relative pr-8 shadow-transparent">
                                <TimelineIcon className="p-3" variant="ghost" color="light-blue">
                                    <SchoolIcon />
                                </TimelineIcon>
                                <span className="font-bold text-gray-800">{experience.duration}</span>

                            </TimelineHeader>
                            <TimelineBody className="w-[30rem] ml-4">
                                <div className="flex flex-col gap-1">
                                    <a href={experience.schoolUrl} target="_blank" rel="noopener noreferrer">
                                        <Typography className="mb-2 text-gray-800 relative inline-block" variant="h5">
                                            {experience.schoolName}
                                        </Typography>
                                    </a>

                                    <Typography color="gray">
                                        {experience.major}
                                    </Typography>
                                    <Typography color="gray">
                                        {experience.location}
                                    </Typography>
                                    <Typography color="gray">
                                        {experience.comments}
                                    </Typography>
                                </div>
                            </TimelineBody>
                        </TimelineItem>
                    </Card>
                ))}
            </Timeline>
        </div>
    );

}