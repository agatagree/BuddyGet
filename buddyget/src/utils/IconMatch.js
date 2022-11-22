import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export const IconMatch = ({ cat }) => {
  const Icon = {
    food: <FastfoodIcon sx={{ color: "icons.typeOne" }} />,
    car: <DirectionsCarIcon sx={{ color: "icons.typeTwo" }} />,
  };

  return <>{cat in Icon ? Icon[cat] : "null"}</>;
};
