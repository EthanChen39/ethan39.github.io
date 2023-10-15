import {
    ListItem, Typography, Radio, List, ListItemPrefix,
} from "@material-tailwind/react";

interface RadioListProps {
    btnNameList: string[];
    className?: string;
    radioName: string;
    valueList: string[];
    boardIndex: number;
    setValueList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function RadioList({ btnNameList, className, radioName, valueList, setValueList, boardIndex }: RadioListProps) {
    return (
        <List className={`flex flex-row ${className}`}>
            {btnNameList.map((btnName: string, index: number) => (
                <ListItem className="p-0" key={btnName}>
                    <label
                        className="flex w-full cursor-pointer items-center px-3 py-2 hover:bg-gray-100"
                    >
                        <ListItemPrefix className="mr-3">
                            <Radio
                                name={radioName}
                                value={btnName}
                                color="light-blue"
                                onChange={(e) => setValueList(valueList.map((value: string, i: number) => i === boardIndex ? e.target.value : value)) }
                                checked={valueList[boardIndex] === btnName}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                            />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                            {btnName}
                        </Typography>
                    </label>
                </ListItem>
            ))}
        </List>
    );
}