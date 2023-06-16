import React, { useContext } from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
// import "react-horizontal-scrolling-menu/dist/styles.css"; 

const HorizontalScrollBar = ({ data, BodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScrollBar
