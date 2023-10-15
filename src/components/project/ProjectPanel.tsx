import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { ProjectCardProps } from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import { PersonalLink } from "@/types/Url";


export default function ProjectPanel() {

    const projectsProps: ProjectCardProps[] = [
        {
            title: "Personal Website",
            description: "My personal website, which contains my portfolio, blog, and more!",
            tags: ["TypeScript", "Next.js", "React"],
            link: "",
        },
        {
            title: "Student Management System",
            description: "Student management system for schools or institutions at a college or university level. In light of the pandemic, the system has COVID-19 contact tracing implemented. Make sure everyone stays safe and healthy.",
            tags: ["Java", "Swing", "Observer Pattern"],
            link: PersonalLink.StudentManagementSystem,
        },
        {
            title: "Othello Game",
            description: "A simple Othello game in terminal. Play against a friend or against AI!",
            tags: ["C++", "Descision Tree", "Minimax Algorithm"],
            link: PersonalLink.Othello,
        }
    ];

    return (
        <Card className="">
            <CardHeader className="bg-transparent shadow-transparent mt-[2rem] ml-[3rem] absolute top-0 left-0">
                <Typography color="blue-gray" className="text-center text-4xl font-bold">Projects</Typography>
            </CardHeader>
            <CardBody className="mt-[3rem] mx-2 items-start justify-start">
                {projectsProps.map((project: ProjectCardProps, index: number) =>
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={project.link} />)}
            </CardBody>
        </Card>
    );
}