// "use client";
// import React, { useState, useEffect } from "react";
// import { IconType } from "react-icons";
// import { Md10K } from "react-icons/md";
// import * as Icons from "react-icons/all";

// type Props = {
//   iconName: string;
//   className: string;
// };

// const Icon = ({ iconName, className }: Props) => {
//   const [IconValid, setIconValid] = useState<IconType>(Md10K);

//   useEffect(() => {
//     // Dynamically import the icon component
//     import(`react-icons/md`)
//       .then((module) => {
//         setIconValid(() => module[iconName] as IconType);
//       })
//       .catch((error) => {
//         console.error(`Failed to import icon: ${error}`);
//       });
//   }, [iconName]);

//   if (!Icon) {
//     return null;
//   }

//   return <IconValid className={className} />;
// };

// export default Icon;

import * as bsIcons from "react-icons/bs";
import * as aiIcons from "react-icons/ai";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as tbIcons from "react-icons/tb";
import * as mdIcons from "react-icons/md";
import * as cgIcons from "react-icons/cg";
import * as grIcons from "react-icons/gr";
import { IconType } from "react-icons";

interface IconProps {
  icon: string;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Bs", bsIcons);
    iconsMap.set("Ai", aiIcons);
    iconsMap.set("Bi", biIcons);
    iconsMap.set("Gi", giIcons);
    iconsMap.set("Fa", faIcons);
    iconsMap.set("Tb", tbIcons);
    iconsMap.set("Md", mdIcons);
    iconsMap.set("Cg", cgIcons);
    iconsMap.set("Gr", grIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons: any = getIcon(icon);
  const TheIcon: IconType = icons[icon];

  return <TheIcon className={className} />;
};

export default Icon;
