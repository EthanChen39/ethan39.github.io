import { Card, CardBody, CardHeader, Typography, Chip } from "@material-tailwind/react";

export interface ProjectCardProps {
    title: string;
    description: string;
    tags?: string[];
    link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {

    return (
        <Card className=" mt-8 items-start group border-transparent hover:shadow-blue bg-gradient-to-r hover:bg-gray-100 hover:animate-shimmer transition-all duration-300">
            <CardHeader floated={false} shadow={false} color="transparent" className="ml-6">
                <Typography color="blue-gray" variant="h5">{title}</Typography>
            </CardHeader>
            <CardBody className="flex flex-col items-start">
                <Typography color="blue-gray" className="text-md">
                    {description}
                </Typography>
                {link && 
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2">
                    <Typography color="blue-gray" className="text-center text-md mt-2 underline cursor-pointer">
                        Learn More
                    </Typography>
                </a>}
                <div className="flex flex-row gap-2 mt-5">
                    {tags?.map((tag: string) =>
                        <Chip
                            color="blue-gray"
                            size="sm"
                            value={tag}
                            key={tag}
                        />
                    )}
                </div>
            </CardBody>
        </Card>
    );
}