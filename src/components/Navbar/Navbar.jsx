import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import imgUser from "../../assets/images/user.png";
import { CoursesContext } from "../../context/CoursesContext/CoursesContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { courseList } = useContext(CoursesContext);

  return (
    <nav className={isOpen ? `${styles.navBar} ${styles.widthNavBarOpen}`: `: ${styles.navBar} ${styles.widthNavBarClose}`}>
      <div className={isOpen ? `${styles.topSection}`: `${styles.topSection} ${styles.topSectionClose}`}>
        <div className={isOpen ? `${styles.boxLogo}`: `${styles.displayNone}`}>
          <div className={styles.boxImgUser}>
            <img className={styles.imgUser} src={imgUser} alt="" />
          </div>
          <div>
            <h3 className={styles.fontWhite}>Jhunior</h3>
            <p className={styles.fontGray}>Administrador</p>
          </div>
        </div>
        <div className={isOpen ? `${styles.boxIcon3Lines}`: `${styles.boxIcon3Lines} ${styles.boxIcon3LinesClose}`} onClick={() => setIsOpen(!isOpen)}>
          <IoReorderThreeOutline className={`${styles.icon3Lines} ${styles.fontWhite}`} />
        </div>
      </div>
      <hr />
      <ul className={styles.listItems}>
        <li>
          <NavLink to="/" className={({ isActive }) => `${(isOpen ? `${styles.link}`: `${styles.link} ${styles.linkClose}`)} ${(isActive ? `${styles.active} ${styles.link}` : styles.link)}`}>
            <div className={styles.iconItem}><IoHomeSharp /></div>
            <div className={isOpen ? `${styles.fontWhite}`: `${styles.displayNone} ${styles.fontWhite}`}>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive }) => `${(isOpen ? `${styles.link}`: `${styles.link} ${styles.linkClose}`)} ${(isActive ? `${styles.active} ${styles.link}`: styles.link)}`}>
            <div className={styles.iconItem}><IoBarChart /></div>
            <div className={isOpen ? `${styles.fontWhite}`: `${styles.displayNone} ${styles.fontWhite}`}>Estadísticas</div>
          </NavLink>
        </li>
        <hr />
        {courseList.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `${(isOpen ? `${styles.link}`: `${styles.link} ${styles.linkClose}`)} ${(isActive ? `${styles.active} ${styles.link}` : styles.link)}`}
            >
              <div className={styles.iconItem}>{item.icon}</div>
              <div className={isOpen ? `${styles.fontWhite}`: `${styles.displayNone} ${styles.fontWhite}`}>{item.name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
