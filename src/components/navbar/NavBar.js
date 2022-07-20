import { AppBar, Badge, Toolbar, Typography, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shop-logo.jpeg";

import useStyles from "./navStyles";

export default function NavBar({ cart }) {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar poistion="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="MyStore"
              height="25px"
              className={classes.image}
            />
            MyStore
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label=" Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={cart.total_items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
