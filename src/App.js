import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";




import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styles from "./App.module.css";
import Container from "@mui/material/Container";
import EnhancedTable from "./components/table";






























export default function PrimarySearchAppBar() {
  return (
    <div>
      <Toolbar>
        <IconButton size="large" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
          <IconButton size="large">
            <Badge badgeContent={2} color="error">
              <NotificationImportantIcon />
            </Badge>
          </IconButton>
          <IconButton edge="end">
            <Avatar
              alt="Remy Sharp"
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
              sx={{ width: 28, height: 28 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
      <Container maxWidth="lg">
        <div className={styles["title-AddBtn"]}>
          <h1 className={styles["title"]}>Users</h1>
          <Button
            component="label"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              height: 45,
              textTransform: "capitalize",
              bgcolor: "#000717",
            }}>
            Add user
          </Button>
        </div>

        <div className={styles["content"]}>
       
          <EnhancedTable />
        </div>
      </Container>
    </div>
  );
}
