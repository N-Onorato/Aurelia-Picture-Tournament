import { ComponentProps } from "react";
import { useRouteError, ErrorResponse } from "react-router-dom";




export default function ErrorPage() {
    const error: ErrorResponse = useRouteError() as ErrorResponse;
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.status}, {error.data}</p>
      </div>
    );
  }