"use client";

import React from "react";
import { TbBrandAzure, TbDeviceDesktopDollar } from "react-icons/tb";
import { MdOutlineCloudSync } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";
import { PiStrategyFill } from "react-icons/pi";
import { GiTechnoHeart } from "react-icons/gi";
import {
  FaCode,
  FaCloud,
  FaBriefcase,
  FaRocket,
  FaShieldAlt,
  FaChartBar,
  FaCog,
  FaHeadset,
  FaAws,
} from "react-icons/fa";

export const getIcon = (iconName: string): React.ReactNode => {
  const iconProps = { size: 24, className: "text-gray-700" };
  switch (iconName) {
    case "solutions":
      return <FaCode {...iconProps} />;
    case "cloud":
      return <FaCloud {...iconProps} />;
    case "consulting":
      return <FaBriefcase {...iconProps} />;
    case "digital":
      return <FaRocket {...iconProps} />;
    case "security":
      return <FaShieldAlt {...iconProps} />;
    case "analytics":
      return <FaChartBar {...iconProps} />;
    case "devops":
      return <FaCog {...iconProps} />;
    case "support":
      return <FaHeadset {...iconProps} />;
    case "aws":
      return <FaAws {...iconProps} />;
    case "azure":
      return <TbBrandAzure {...iconProps} />;
    case "migration":
      return <MdOutlineCloudSync {...iconProps} />;
    case "web":
      return <FaLaptopCode {...iconProps} />;
    case "mobile":
      return <ImMobile {...iconProps} />;
    case "enterprise":
      return <TbDeviceDesktopDollar {...iconProps} />;
    case "strategy":
      return <PiStrategyFill {...iconProps} />;
    case "tech":
      return <GiTechnoHeart {...iconProps} />;
    default:
      return <FaCode {...iconProps} />;
  }
};
