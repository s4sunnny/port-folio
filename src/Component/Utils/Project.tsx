import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface Props {
  projectName: string;
  description: string;
  image: string;
}

export function Project(Props: Props) {
  return (
    <div className="pl-5">
      <Card placeholder={""} className="max-w-[14rem] overflow-hidden">
        <CardHeader
          placeholder={""}
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={Props.image} alt="ui/ux review check" />
        </CardHeader>
        <CardBody placeholder={""}>
          <Typography placeholder={""} variant="h6" color="blue-gray">
            {Props.projectName}
          </Typography>
          <Typography
            placeholder={""}
            variant="h6"
            color="gray"
            className="mt-3 font-normal"
          >
            {Props.description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
