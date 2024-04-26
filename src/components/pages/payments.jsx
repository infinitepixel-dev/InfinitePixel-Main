import { useDeviceConfig } from "../../useDeviceLayout"; // Adjust the path as necessary

export function PricingCard() {
  const deviceLayout = useDeviceConfig();

  return (
    <>
      <div id="paymentInformation">
        {deviceLayout.paymentsPage.paymentCardContainer()}
      </div>
    </>
  );
}

export default PricingCard;
