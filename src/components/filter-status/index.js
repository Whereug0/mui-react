import Sheet from "@mui/joy/Sheet";
import React from "react";
import { Typography } from "@mui/material";

export default function ExampleFilterStatusCheckbox() {
  return (
    <Sheet
      variant="outlined"
      sx={{ p: 2, borderRadius: "sm", width: 50, height: 20 }}>
      <Typography id="filter-status" sx={{}}>
        Filter status
      </Typography>
    </Sheet>
  );
}
