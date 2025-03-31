//Outputs the breakpoints available and the active breakpoint on the console
const screens = {
  mobileSM: "320px",
  mobile: "370px",
  tablet: "640px",
  tabletXL: "768px",
  laptop: "1024px",
  desktop: "1280px",
  desktopXL: "1535px",
  desktopXXL: "2320px",
};

function logBreakpoints() {
  console.clear();
  console.log("Available breakpoints:");
  console.log(screens);
}

function logActiveBreakpoint() {
  const windowWidth = window.innerWidth;
  let activeBreakpoint = "";
  for (const breakpoint in screens) {
    if (windowWidth >= parseInt(screens[breakpoint], 10)) {
      activeBreakpoint = breakpoint;
    }
  }

  console.log(`Active breakpoint: ${activeBreakpoint} (${windowWidth}px)`);
}

export { logBreakpoints, logActiveBreakpoint };
