import React, { useState } from "react";
import "../assets/styles/custom.css";
import { Link } from "react-router-dom";
import { pageRoutes } from "../routes/pageRoutes";
import Logout from "./dropdown";
import { Avatar, Menu, MenuItem } from "@mui/material";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="dropdown_component"
      style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
    >
      <Avatar
        sx={{ bgcolor: "#298939", cursor: "pointer" }}
        src="/broken-image.jpg"
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>
          <Logout />
        </MenuItem>
      </Menu>
    </div>
  );
}
