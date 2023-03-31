import { useState } from "react";
import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";
const labels: { [index: string]: string } = {
  0.5: "",
  1  : "",
  1.5: "",
  2  : "",
  2.5: "",
  3  : "",
  3.5:   "",
  4  : "",
  4.5:   "",
  5  : "",
};
export function Ranking() {
  const [value, setValue] = useState<number | null>(4.5);
  const [hover, setHover] = useState(-1);
  return (
    <Box>
      <Rating className="rating"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => setHover(newHover)}
        emptyIcon={<Star />}
      ></Rating>
      {value !== null && <Box>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
}