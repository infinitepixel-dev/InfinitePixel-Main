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

function ShoppingCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6" // Adjusted the size to make the icon larger
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l3.6 7.59-1.35 2.44A1 1 0 008 14h9a1 1 0 00.92-.62l2.58-5.16A1 1 0 0019.56 6H6.62"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

export function PricingCard() {
  return (
    <div className="overflow-hidden overscroll-none" id="paymentInformation">
      <div className="z-10 grid w-full h-screen gap-1 overflow-hidden galaxyS23Ultra:gap-0 d1440:grid-cols-12 d1440:grid-rows-6 galaxyS23Ultra:grid-cols-12 galaxyS23Ultra:grid-rows-6">
        {/* Card 1 */}
        <Card
          color="blue-gray"
          variant="gradient"
          className="grid col-span-2 col-start-2 row-start-2 rounded-md shadow-md d1440:grid-rows-6 d1440:grid-cols-6 galaxyS23Ultra:row-start-1 galaxyS23Ultra:mt-3 galaxyS23Ultra:mb-16 galaxyS23Ultra:ml-4 galaxyS23Ultra:row-span-2 d1440:row-start-2 d1440:row-span-4 d1440:col-span-2 d1440:col-start-3 galaxyS23Ultra:col-start-2 galaxyS23Ultra:col-span-10 bg-slate-800"
        >
          <CardHeader
            shadow={false}
            color="transparent"
            className="col-span-1 text-center text-gray-699 galaxyS23Ultra:col-span-1 galaxyS23Ultra:col-start-1 d1440:row-start-1 d1440:mt-8 d1440:col-start-2"
          >
            <Typography
              variant="small"
              color="white"
              className="uppercase text-2x1 galaxyS23Ultra:text-xs galaxyS23Ultra:mt-0"
            >
              Starter Package
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="gap-1 mt-4 font-normal text-7xl galaxyS23Ultra:text-2xl galaxyS23Ultra:mt-1"
            >
              <span className="text-3xl ">$</span>
              250{" "}
            </Typography>
          </CardHeader>
          <CardBody className="col-span-4 grid-rows-6 row-span-2 row-start-2 p-0 galaxyS23Ultra:grid-cols-subgrid galaxyS23Ultra:row-start-1 galaxyS23Ultra:col-start-2 d1440:row-start-2 d1440:col-start-2 d1440:row-span-3 ">
            {/* feature 1 */}
            <div className="col-start-2 row-start-2 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal ">5 Page Website</Typography>
              </div>
            </div>
            {/* feature 2 */}
            <div className="col-start-2 row-start-3 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal"> Custom Layout</Typography>
              </div>
            </div>
            {/* feature 3 */}
            <div className="col-start-2 row-start-4 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Contact Form</Typography>
              </div>
            </div>
            {/* feature 4 */}
            <div className="col-start-2 row-start-5 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-white-200">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Undivmited Revisions
                </Typography>
              </div>
            </div>
            {/* feature 5 */}
            <div className="col-start-2 row-start-6 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  100% Ownership Rights
                </Typography>
              </div>
            </div>
            {/* feature 6 */}
            <div className="col-start-2 row-start-7 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Complete Source Files
                </Typography>
              </div>
            </div>
          </CardBody>
          <CardFooter className="col-span-1 row-start-7 p-0 mt-12 galaxyS23Ultra:ml-2 d1440:row-start-6 d1440:col-start-2 d1440:col-span-4 galaxyS23Ultra:mt-0 galaxyS23Ultra:col-start-1 galaxyS23Ultra:row-start-2">
            <Button
              size="lg"
              color="white"
              className=" bg-orange-700 p-2  hover:scale-[1.02] focus:scale-[1.02] active:scale-100 "
              ripple={false}
              fullWidth={true}
            >
              <ShoppingCartIcon /> Buy Now
              {/* <span> Buy Now </span> */}
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card
          color="blue-gray"
          variant="gradient"
          className="grid col-span-2 col-start-2 row-start-2 rounded-md shadow-md d1440:grid-rows-6 d1440:grid-cols-6 galaxyS23Ultra:row-start-3 galaxyS23Ultra:mt-6 galaxyS23Ultra:mb-16 galaxyS23Ultra:ml-4 galaxyS23Ultra:row-span-2 d1440:row-start-2 d1440:row-span-4 d1440:col-span-2 d1440:col-start-6 galaxyS23Ultra:col-start-2 galaxyS23Ultra:col-span-10 bg-slate-800"
        >
          <CardHeader
            shadow={false}
            color="transparent"
            className="col-span-1 text-center text-gray-699 galaxyS23Ultra:col-span-1 galaxyS23Ultra:col-start-1 d1440:row-start-1 d1440:mt-8 d1440:col-start-2"
          >
            <Typography
              variant="small"
              color="white"
              className="uppercase text-2x1 galaxyS23Ultra:text-xs galaxyS23Ultra:mt-0"
            >
              Starter Package
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="gap-1 mt-4 font-normal text-7xl galaxyS23Ultra:text-2xl galaxyS23Ultra:mt-1"
            >
              <span className="text-3xl ">$</span>
              250{" "}
            </Typography>
          </CardHeader>
          <CardBody className="col-span-4 grid-rows-6 row-span-2 row-start-2 p-0 galaxyS23Ultra:grid-cols-subgrid galaxyS23Ultra:row-start-1 galaxyS23Ultra:col-start-2 d1440:row-start-2 d1440:col-start-2 d1440:row-span-3 ">
            {/* feature 1 */}
            <div className="col-start-2 row-start-2 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal ">5 Page Website</Typography>
              </div>
            </div>
            {/* feature 2 */}
            <div className="col-start-2 row-start-3 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal"> Custom Layout</Typography>
              </div>
            </div>
            {/* feature 3 */}
            <div className="col-start-2 row-start-4 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Contact Form</Typography>
              </div>
            </div>
            {/* feature 4 */}
            <div className="col-start-2 row-start-5 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-white-200">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Undivmited Revisions
                </Typography>
              </div>
            </div>
            {/* feature 5 */}
            <div className="col-start-2 row-start-6 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  100% Ownership Rights
                </Typography>
              </div>
            </div>
            {/* feature 6 */}
            <div className="col-start-2 row-start-7 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Complete Source Files
                </Typography>
              </div>
            </div>
          </CardBody>
          <CardFooter className="col-span-1 row-start-7 p-0 mt-12 galaxyS23Ultra:ml-2 d1440:row-start-6 d1440:col-start-2 d1440:col-span-4 galaxyS23Ultra:mt-0 galaxyS23Ultra:col-start-1 galaxyS23Ultra:row-start-2">
            <Button
              size="lg"
              color="white"
              className=" bg-orange-700 p-2  hover:scale-[1.02] focus:scale-[1.02] active:scale-100 "
              ripple={false}
              fullWidth={true}
            >
              <ShoppingCartIcon /> Buy Now
              {/* <span> Buy Now </span> */}
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card
          color="blue-gray"
          variant="gradient"
          className="grid col-span-2 col-start-2 row-start-2 rounded-md shadow-md d1440:grid-rows-6 d1440:grid-cols-6 galaxyS23Ultra:row-start-5 galaxyS23Ultra:mt-0 galaxyS23Ultra:mb-16 galaxyS23Ultra:ml-4 galaxyS23Ultra:row-span-2 d1440:row-start-2 d1440:row-span-4 d1440:col-span-2 d1440:col-start-9 galaxyS23Ultra:col-start-2 galaxyS23Ultra:col-span-10 bg-slate-800"
        >
          <CardHeader
            shadow={false}
            color="transparent"
            className="col-span-1 text-center text-gray-699 galaxyS23Ultra:col-span-1 galaxyS23Ultra:col-start-1 d1440:row-start-1 d1440:mt-8 d1440:col-start-2"
          >
            <Typography
              variant="small"
              color="white"
              className="uppercase text-2x1 galaxyS23Ultra:text-xs galaxyS23Ultra:mt-0"
            >
              Starter Package
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="gap-1 mt-4 font-normal text-7xl galaxyS23Ultra:text-2xl galaxyS23Ultra:mt-1"
            >
              <span className="text-3xl ">$</span>
              250{" "}
            </Typography>
          </CardHeader>
          <CardBody className="col-span-4 grid-rows-6 row-span-2 row-start-2 p-0 galaxyS23Ultra:grid-cols-subgrid galaxyS23Ultra:row-start-1 galaxyS23Ultra:col-start-2 d1440:row-start-2 d1440:col-start-2 d1440:row-span-3 ">
            {/* feature 1 */}
            <div className="col-start-2 row-start-2 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal ">5 Page Website</Typography>
              </div>
            </div>
            {/* feature 2 */}
            <div className="col-start-2 row-start-3 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal"> Custom Layout</Typography>
              </div>
            </div>
            {/* feature 3 */}
            <div className="col-start-2 row-start-4 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Contact Form</Typography>
              </div>
            </div>
            {/* feature 4 */}
            <div className="col-start-2 row-start-5 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-white-200">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Undivmited Revisions
                </Typography>
              </div>
            </div>
            {/* feature 5 */}
            <div className="col-start-2 row-start-6 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  100% Ownership Rights
                </Typography>
              </div>
            </div>
            {/* feature 6 */}
            <div className="col-start-2 row-start-7 galaxyS23Ultra:gap-1">
              <div className="flex gap-4 galaxyS23Ultra:gap-2">
                <span className="p-1 bg-green-700 border rounded-full border-slate-300">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Complete Source Files
                </Typography>
              </div>
            </div>
          </CardBody>
          <CardFooter className="col-span-1 row-start-7 p-0 mt-12 galaxyS23Ultra:ml-2 d1440:row-start-5 d1440:col-start-2 d1440:col-span-4 galaxyS23Ultra:mt-0 galaxyS23Ultra:col-start-1 galaxyS23Ultra:row-start-2">
            <Button
              size="lg"
              color="white"
              className=" bg-orange-700 p-2  hover:scale-[1.02] focus:scale-[1.02] active:scale-100 "
              ripple={false}
              fullWidth={true}
            >
              <ShoppingCartIcon /> Buy Now
              {/* <span> Buy Now </span> */}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default PricingCard;
