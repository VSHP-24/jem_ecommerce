import { NavLink } from "react-router-dom";
import { currentYear } from "../utils/constants";

function Copyright() {
  return (
    <div className="flex flex-col items-center justify-between p-2 text-lg text-primary-400 tablet:flex-row">
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
