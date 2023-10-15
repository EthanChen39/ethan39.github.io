import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    Typography,
    CardHeader,
} from "@material-tailwind/react";
import WorkingExperienceChrono from "./WorkExperienceChrono";
import EducationChrono from "./EducationChrono";

export default function ExperienceTabs() {

    const data = [
        {
            label: "Work",
            value: "work",
            data: <WorkingExperienceChrono />,
        },
        {
            label: "Education",
            value: "education",
            data: <EducationChrono />,
        }
    ];


    return (
        <Card className="max-w-full">
            <CardHeader className="bg-transparent shadow-transparent mt-[2rem] ml-[3rem] absolute top-0 left-0">
                <Typography color="blue-gray" className="text-center text-4xl font-bold">Experience</Typography>
            </CardHeader>
            <Tabs value="work" orientation="vertical" className="p-5 mt-[2rem]">
                <TabsHeader className="bg-transparent w-32 gap-y-3 mt-20" indicatorProps={{
                    className: "bg-gray-900/10 shadow-none !text-gray-900",
                }}
                >
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} className="">
                            <Typography variant="h5">{label}</Typography>
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, data }) => (
                        <TabPanel key={value} value={value} className="py-0">
                            {data}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </Card>
    );
}