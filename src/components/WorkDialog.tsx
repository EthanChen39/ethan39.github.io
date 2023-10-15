import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from "@material-tailwind/react";

interface WorkDialogProps {
  workDescription: JSX.Element;
}

export function WorkDialog({ workDescription }: WorkDialogProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} size="sm" color="blue-gray">Click for more details</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>SDE intern at AWS</DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <Typography className="font-normal">
            {workDescription}
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}