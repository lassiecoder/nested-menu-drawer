"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuItem } from "@/types/menu";
import { getIcon } from "@/data/iconMap";
import { SAMPLE_MENU } from "@/data/menuItems";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export default function Home() {
  const [navigationStack, setNavigationStack] = useState<MenuItem[][]>([
    [...SAMPLE_MENU],
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const currentLevel = navigationStack[navigationStack.length - 1];

  const handleNavigateIn = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      setNavigationStack([...navigationStack, item.children]);
    } else if (item.onClick) {
      item.onClick();
      setIsOpen(false);
    }
  };

  const handleNavigateBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Nested Menu Drawer
          </h1>
        </div>

        <Drawer
          open={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open);
            if (open) {
              setNavigationStack([[...SAMPLE_MENU]]);
            }
          }}
        >
          <DrawerTrigger asChild>
            <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-indigo-700 active:scale-95">
              Open Menu
            </button>
          </DrawerTrigger>

          <DrawerContent className="fixed bottom-0 left-0 right-0 mx-auto flex w-full max-w-md flex-col">
            <DrawerHeader className="space-y-1 border-b border-gray-200 px-6 py-4">
              {navigationStack.length > 1 ? (
                <DrawerTitle className="text-base sm:text-lg font-semibold text-gray-900">
                  <button
                    onClick={handleNavigateBack}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 mb-2"
                  >
                    <MdArrowBackIos size={18} />
                    Back
                  </button>
                </DrawerTitle>
              ) : (
                <DrawerTitle className="text-base sm:text-lg font-semibold text-gray-900">
                  Menu
                </DrawerTitle>
              )}
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto px-0 py-2">
              <div className="space-y-0">
                {currentLevel.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigateIn(item)}
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
                    }}
                    className="w-full px-6 py-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0 pt-1">
                          {getIcon(item.icon as string)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm sm:text-base">
                            {item.label}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {item.children && item.children.length > 0 && (
                        <span className="flex-shrink-0 text-gray-400 pt-1">
                          <MdArrowForwardIos />
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
