import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  
  return (
    <div id="error-page" className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="max-w-md p-6 space-y-6 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-4xl font-bold text-error">Oops!</h1>
            <p className="text-lg text-gray-600">Sorry, an unexpected error has occurred.</p>
            <p className="text-sm italic text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn btn-primary" onClick={() => window.location.href="/"}>
          kembali ke Home
        </button>
      </div>
    </div>
  );
}