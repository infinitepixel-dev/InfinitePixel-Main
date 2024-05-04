import Login from "../pages/Login/login";

function DeveloperDocs() {
  console.log("Developer Docs");
  return (
    <>
      <div className="h-screen w-full grid grid-cols-12 grid-rows-6">
        <Login />
        <div className="col-start-2 row-start-2 text-slate-50">
          Welcome to the Developer Documentation
        </div>
      </div>
    </>
  );
}

export default DeveloperDocs;
