import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
