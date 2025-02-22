"use client";
import React from "react";
import OverviewTab from "@/lib/components/DashboardComponents/OverviewTab";

import { useState } from "react";
import { FaChartLine, FaCog, FaFile } from "react-icons/fa";
import { RiBarChart2Fill } from "react-icons/ri";
import { useDashboard } from "@/lib/context/DashboardContext";
import Loader from "@/lib/atoms/Common/Loader";

export default function DashboardPageComponent() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { data, isLoading } = useDashboard();

  const tabs = [
    {
      label: "Overview",
      component: <OverviewTab />,
      icon: RiBarChart2Fill,
    },
    {
      label: "Live Location",
      component: <>Live Location</>,
      icon: FaChartLine,
    },
    {
      label: "Timeline",
      component: <>Timeline</>,
      icon: FaFile,
    },
    {
      label: "Card View",
      component: <>Card View</>,
      icon: FaCog,
    },
    {
      label: "Compliance Status",
      component: <>Compliance Status</>,
      icon: FaCog,
    },

    {
      label: "Site Attendance",
      component: <>Site Attendance</>,
      icon: FaCog,
    },
  ];

  return (
    <div className="w-full p-4 h-screen overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full">
          {/* Tab buttons with horizontal scroll */}
          <div className="tabs flex overflow-x-auto hide-scrollbar !w-full !pb-2">
            {tabs.map((tab, index) => (
              <React.Fragment key={index}>
                <button
                  className={`tab flex-shrink-0 flex !flex-nowrap items-center justify-center gap-2 ${
                    activeTabIndex === index
                      ? "tab-active bg-primary text-white rounded-t-md"
                      : "text-gray-600"
                  } !border-none !min-w-fit `}
                  onClick={() => setActiveTabIndex(index)}
                  role="tab"
                  aria-selected={activeTabIndex === index}
                  aria-controls={`tabpanel-${index}`}
                >
                  <tab.icon className="sm:text-md text-xs" />
                  <p
                    className={`text-xs sm:text-sm font-semibold xl:block ${
                      activeTabIndex === index ? "block" : "hidden"
                    } transition-all duration-300  `}
                  >
                    {tab.label}
                  </p>
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Separate container for tab panels */}
          <div className="mt-4 h-[calc(100vh-100px)] overflow-y-auto pr-4 pb-[100px]">
            {tabs[activeTabIndex].component}
          </div>
        </div>
      )}
    </div>
  );
}
