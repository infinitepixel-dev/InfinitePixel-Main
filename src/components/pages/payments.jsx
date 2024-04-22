import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function PricingCard() {
  return (
    <div
      className="grid w-full grid-cols-12 gap-2 h-dvh grid-rows-8 galaxyS23Ultra:grid-rows-6 galaxyS23Ultra:gap-0 galaxyS23Ultra:col-span-8"
      id="paymentInformation"
    >
      <Card
        color="bg-slate-600"
        variant="gradient"
        className="grid col-span-2 col-start-2 grid-rows-2 row-start-2 p-8 rounded-md shadow-md galaxyS23Ultra:col-start-2 galaxyS23Ultra:col-span-10 row-span-8 grid-cols-subgrid bg-slate-800"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="col-span-2 row-start-1 text-center text-gray-699"
        >
          <Typography
            variant="small"
            color="white"
            className="uppercase text-2x1"
          >
            Starter Package
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="flex justify-center gap-1 mt-4 font-normal text-7xl"
          >
            <span className="text-3xl ">$</span>
            250{" "}
          </Typography>
        </CardHeader>
        <CardBody className="col-span-2 row-span-2 row-start-2 p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                <CheckIcon />
              </span>
              <Typography className="font-normal">5 Page Website</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                <CheckIcon />
              </span>
              <Typography className="font-normal"> Custom Layout</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Contact Form</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 bg-green-700 border rounded-full border-white-200">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Unlimited Revisions
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                100% Ownership Rights
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Complete Source Files
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="col-span-2 row-start-7 p-0 mt-12">
          <Button
            size="lg"
            color="white"
            className=" bg-orange-700 p-3 text-2xl hover:scale-[1.02] focus:scale-[1.02] active:scale-100 self-center"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default PricingCard;
