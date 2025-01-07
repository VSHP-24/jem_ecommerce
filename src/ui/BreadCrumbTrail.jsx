import { useLocation, useParams } from "react-router-dom";
import Button from "./Button";

function BreadCrumbTrail() {
  const { pathname } = useLocation();
  const params = useParams();

  const paths = pathname
    .split("/")
    .filter((path) => !Object.values(params).includes(path));

  return (
    <div className="mx-5 my-5 flex items-center gap-2 text-sm text-primary-100">
      <Button to="/">HOME</Button>
      <span> {`>`} </span>
      {paths.map((path, i) => {
        if (!path) return null;
        if (path && i < paths.length - 1) {
          return (
            <Button key={path} to={path}>
              {path.toUpperCase()}
              <span> {`>`} </span>
            </Button>
          );
        }
        if (path && i <= paths.length - 1) {
          return <Button key={path}>{path.toUpperCase()}</Button>;
        }
        return null;
      })}
    </div>
  );
}

export default BreadCrumbTrail;
