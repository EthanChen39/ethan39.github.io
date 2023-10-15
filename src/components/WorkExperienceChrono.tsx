import {
    Button,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineBody,
    TimelineHeader,
    Card,
} from "@material-tailwind/react";
import WorkIcon from '@mui/icons-material/Work';
import { WorkDialog } from "./WorkDialog";

interface WorkingExperience {
    title: string;
    titleColor?: string;
    companyUrl?: string;
    company: string;
    duration: string;
    location: string;
    jobDetails: JSX.Element | string;
}

export default function WorkingExperienceChrono() {

    const boeingDescription: JSX.Element = (
        <>
            At Boeing, I excelled in both frontend and backend development, leveraging React for frontend tasks and Python Flask for backend operations.
            <br /><br />
            I designed and integrated several API endpoints, which were seamlessly paired with Google Cloud Platform&apos;s cloud functions, ensuring robust data storage in Datastore.
            <br /><br />
            Furthermore, I was deeply engaged in internal data administration tasks, showcasing my proficiency in ensuring cohesive system performance across both the frontend and backend landscapes.
        </>
    );

    const awsDescription: JSX.Element = (
        <>
            Recently, I had the honor of interning at Amazon Web Services (AWS), immersing myself within the Payments team. Central to my role was the development of a disassembler capable of converting AWS CloudFormation YAML files into TypeScript CDK code.
            <br /><br />
            Engineered with TypeScript and Node.js, this tool adeptly translates CloudFormation documents, facilitating the migration of legacy Jinja templates to TypeScript, thereby markedly reducing technical debt.
            <br /><br />
            While my expertise in TypeScript and Node.js was fundamental, I also delved into CI/CD best practices and leveraged the capabilities of cloud services. Each day was a learning curve, rich with invaluable lessons and growth opportunities.
            <br /><br />
            Documentation was pivotal in this journey. Ranging from low level design to methology comparison, my focus was crystal-clear communication, setting the stage for future enhancements and integrations.
        </>
    );

    const cnrDescription: JSX.Element = (
        <>
            At CN Railway, I employed my expertise in both frontend and backend development to drive efficiency and optimization. Using Jenkins, I crafted a pipeline that automated processes from build to deployment across several applications.
            <br /><br />
            On the backend, I engineered high-performance Java APIs with the Spring Boot framework, ensuring peak functionality.
            <br /><br />
            My proficiency was further highlighted through rigorous testing with Postman and my adept use of Docker for containerization, ensuring applications were ready for production environments.
        </>
    );

    const workingExperience: WorkingExperience[] = [
        {
            title: "Software Engineer Intern",
            duration: "Sep 2023 - Present",
            company: "Boeing Vancouver",
            location: "Richmond, BC, Canada (Hybrid)",
            jobDetails: <WorkDialog workDescription={boeingDescription} />,
            titleColor: "text-boeing-blue",
        },
        {
            title: "Software Dev Engineer Intern",
            duration: "May 2023 - Aug 2023",
            company: "Amazon Web Services (AWS)",
            location: "Vancouver, BC, Canada (Hybrid)",
            jobDetails: <WorkDialog workDescription={awsDescription} />,
            titleColor: "text-amazon-orange",
        },
        {
            title: "Software Engineer Intern",
            duration: "Jan 2023 - Apr 2023",
            company: "Canadian National Railway",
            location: "Montreal, QC, Canada (Remote)",
            jobDetails: <WorkDialog workDescription={cnrDescription} />,
            titleColor: "text-cnr-red",
        },
    ];

    return (
        <div className="w-[30rem] p-10 mt-3 items-center">
            <Timeline className="flex flex-rol gap-1">
                {workingExperience.map((experience: WorkingExperience, index: number) => (
                    <Card key={index} className="group border-transparent shadow-transparent hover:shadow-blue bg-gradient-to-r hover:bg-gray-100 hover:animate-shimmer transition-all duration-300">
                        <TimelineItem
                            key={index}
                            className="relative h-[13rem] ml-4 p-3"
                            color="blue"
                        >
                            {index !== workingExperience.length - 1 && <TimelineConnector className="!w-[95px] !h-[8rem] mt-6" />}
                            <TimelineHeader className="relative pl-4 pr-8 shadow-transparent">
                                <TimelineIcon className="" variant="ghost" color="blue-gray">
                                    <WorkIcon />
                                </TimelineIcon>
                                <span className="font-bold text-gray-800">{experience.duration}</span>

                            </TimelineHeader>
                            <TimelineBody className="ml-4">
                                <div className="flex flex-col">
                                    <Typography className={`mb-2 text-cyan-700`} variant="h5">
                                        {experience.company}
                                    </Typography>
                                    <Typography color="gray" variant="h6">
                                        {experience.title}
                                    </Typography>
                                    <Typography color="gray">
                                        {experience.location}
                                    </Typography>
                                    <div className="mt-2">
                                        {experience.jobDetails}
                                    </div>
                                </div>
                            </TimelineBody>
                        </TimelineItem>
                    </Card>
                ))}
            </Timeline>
        </div>
    );

}