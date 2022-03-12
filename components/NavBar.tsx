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
    <div className={styles.navBar}>
      <div className={styles.hola}>
        <ul className={styles.navBarDesktop}>
          <li>
            <a href=""> Acerca de mi</a>
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
        className={styles.adios}
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
        <MenuItem onClick={handleClose}>Acerca de mí</MenuItem>
        <MenuItem onClick={handleClose}>Proyectos</MenuItem>
        <MenuItem onClick={handleClose}>Hablemos</MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;
