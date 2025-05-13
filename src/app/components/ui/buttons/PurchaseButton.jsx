export default function PurchaseButton({
  clickFunction,
  price,
  text = "Purchase",
}) {
  return (
    <button
      onClick={clickFunction}
      className="bg-blue-600 hover:bg-blue-700 hover:dark:bg-blue-700/80 dark:bg-blue-600/80 mt-auto px-4 py-2 rounded-lg text-gray-100 transition duration-200"
    >
      {text} - {price}
    </button>
  );
}
