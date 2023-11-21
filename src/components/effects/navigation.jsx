import DynamicComponentLoader from "../../dynamicComponentLoader";

export default function NavigationBar() {
  return (
    <>
      <DynamicComponentLoader componentName="Someothercomponent" />
      <h1>Navigation Bar!</h1>
    </>
  );
}
