import React, { createContext, useEffect, useState } from "react";

export const HorizontalScrollContext = createContext({
  scroll: null,
});

export const HorizontalScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            new LocomotiveScroll({
              el:
                document.querySelector("[data-scroll-container]") ?? undefined,
              ...options,
            })
          );
        } catch (error) {
          throw Error(`[HorizontalScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HorizontalScrollContext.Provider value={{ scroll }}>
      {children}
    </HorizontalScrollContext.Provider>
  );
};

HorizontalScrollProvider.displayName = "HorizontalScrollContext";
HorizontalScrollProvider.displayName = "HorizontalScrollProvider";
