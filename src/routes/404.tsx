import { ReactElement } from "react";
import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";
import LayoutTheme from "../layout/LayoutTheme";
import Header from "../components/element/Header";

const ErrorPage = (): ReactElement => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <LayoutTheme>
      <Header />
      <section className="error-page">
        <div>
          <h2 className="text--big">Oops!</h2>
          {isRouteErrorResponse(error) ? (
            <>
              <h2 className="text--big text--red">{error.status}</h2>
            </>
          ) : (
            <h2 className="text--big text--red">ERROR</h2>
          )}
          <p>
            <i>{error.statusText}</i>. Back to{" "}
            <NavLink to="/">home page</NavLink>
          </p>
        </div>
      </section>
    </LayoutTheme>
  );
};

export default ErrorPage;
