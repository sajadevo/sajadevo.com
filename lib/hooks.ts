import React from "react";

export function useOffsetX() {
  const [offsetX, setOffsetX] = React.useState<number>(0);

  React.useEffect(() => {
    function getXSides() {
      const mainContent = document.querySelector("#main-content");
      const mainContentRect = mainContent?.getBoundingClientRect();

      if (mainContentRect) {
        const elOffsetX = mainContentRect.x;
        setOffsetX(elOffsetX > 24 ? elOffsetX : 25);
      }
    }

    getXSides();
    window.addEventListener("resize", getXSides);

    return () => {
      window.removeEventListener("resize", getXSides);
    };
  }, []);

  return offsetX;
}
