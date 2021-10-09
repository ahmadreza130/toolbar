import { GiResize } from "react-icons/gi";
import { BsPencil, BsBrush, BsEraser } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { MdLocationSearching } from "react-icons/md";
import { ImMagicWand } from "react-icons/im";
export const data = [
  { name: "resize", Icon: <GiResize className="icon" />, shortkey: "1" },
  { name: "pen", Icon: <BsPencil className="icon" />, shortkey: "2" },
  { name: "majic Pen", Icon: <ImMagicWand className="icon" />, shortkey: "3" },
  { name: "brush", Icon: <BsBrush className="icon" />, shortkey: "4" },
  { name: "earaser", Icon: <BsEraser className="icon" />, shortkey: "5" },
  { name: "location", Icon: <BiLocationPlus className="icon" />, shortkey: "6" },
  { name: "target", Icon: <MdLocationSearching className="icon" />, shortkey: "7" },
];
