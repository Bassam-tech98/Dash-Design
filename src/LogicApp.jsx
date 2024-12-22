
export const GetDesignToken = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#ffffff",
          },
          text: {
              primary: "#000000",
              
          },
        }
      : {
          background: {
            default: "#121212",
          },
          text: {
            primary: "#ffffff",
          },
        }),
  },
});



    
    
