import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import { useState, useEffect, useRef } from "react"
import { useDeviceConfig } from "../../useDeviceLayout" // Adjust the path as necessary
import { FaCircleCheck } from "react-icons/fa6"

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
  )
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
  )
}

export function PricingCard() {
  const deviceLayout = useDeviceConfig()

  return <>{deviceLayout.paymentsPage.paymentCardContainer()}</>
}

export default PricingCard
