import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavitagion = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Gret Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              all quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavitagion;
