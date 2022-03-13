import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../styles/Home.module.css";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className={styles.navBar}>
      <div className={styles.menuDesktop}>
        <ul className={styles.navBarDesktop}>
          <li>
            <a href="#about-me"> Acerca de mi</a>
          </li>
          <li>
            <a href="">Proyectos</a>
          </li>
          <li>
            <a href="">Hablemos</a>
          </li>
        </ul>
      </div>
      <IconButton
        className={styles.menuMobile}
        id="basic-button"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={styles.navBarMenu}
      >
        <MenuItem onClick={handleClose}>
          <a href="#about-me">Acerca de mí</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="">Proyectos</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="">Hablemos</a>
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default NavBar;
