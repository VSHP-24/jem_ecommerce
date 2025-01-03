import { NavLink } from "react-router-dom";
import { currentYear } from "../utils/constants";

function Copyright() {
  return (
    <div className="flex justify-between p-2 text-primary-400">
      <p>{`© ${currentYear}, All Rights Reserved `}</p>
      <p>
        {`Developed by `}
        <NavLink target="_blank" to="https://vshp.dev/">
          VSHP
        </NavLink>
      </p>
    </div>
  );
}

export default Copyright;
