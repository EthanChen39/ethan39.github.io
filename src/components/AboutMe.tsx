import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
} from "@material-tailwind/react";


export default function AboutMe() {
    const personalIntro: string = `
    
    `;
    return (
        <Card className="break-words bg-transparent border-transparent">
            <Typography className="mt-6 ml-6" variant="h4">About Me</Typography>
            <CardBody className=" break-words">
                <Typography color="gray" className="mb-2 text-xl">
                    Hey there! I&rsquo;m Shixi, but just call me Ethan. 🧑‍💻👋
                    <br/><br/>
                    Dive into the world of code, and you&rsquo;ll find me right there, riding the waves of Java, Python, and C++. Building apps and systems isn&rsquo;t just a job for me; it&rsquo;s like crafting art with a keyboard. Every line of code brings a new story, a fresh challenge, and a dash of excitement.
                    <br/><br/>
                    When I&rsquo;m not lost in a sea of algorithms 🌊, you might find me untangling a math problem or brainstorming the next big tech idea. To me, coding isn&rsquo;t just about solving problems; it&rsquo;s about creating a future, one line at a time.
                    <br/><br/>
                    Outside of the tech bubble, I&rsquo;m an explorer at heart, always on the hunt for new adventures and experiences.
                    <br/><br/>
                    Got a burning tech question or an exciting project brewing in your mind? Drop me a line! Let&rsquo;s bring those digital dreams to life. 🔍💡
                </Typography>
            </CardBody>
        </Card>
    );
}