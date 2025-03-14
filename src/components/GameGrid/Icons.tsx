// import {
//   FaWindows,
//   FaPlaystation,
//   FaXbox,
//   FaApple,
//   FaLinux,
//   FaAndroid,
// } from "react-icons/fa";
// import { MdPhoneIphone } from "react-icons/md";
// import { SiNintendo } from "react-icons/si";
// import { BsGlobe } from "react-icons/bs";
import { platform } from "./GamesGrid";
// import { IconType } from "react-icons";

interface Props {
  platforms: platform[];
}

const Icons = ({ platforms }: Props) => {
  // const iconMap: { [key: string]: IconType } = {
  //   pc: FaWindows,
  //   playstation: FaPlaystation,
  //   xbox: FaXbox,
  //   apple: FaApple,
  //   linux: FaLinux,
  //   android: FaAndroid,
  //   ios: MdPhoneIphone,
  //   nintendo: SiNintendo,
  //   globe: BsGlobe,
  // };
  return (
    <ul>
      {platforms.map((plat) => (
        <li>{[plat.slug]}</li>
      ))}
    </ul>
  );
};

export default Icons;
