export const flatObjToMap = (obj: object) => {
  // The only reason why I chose typescript was to add map generics
  const newMap = new Map<String, String>();

  const mainFunction = (obj: object, prevKeyName?: string) => {
    Object.keys(obj).forEach((key) => {
      // I had to google the regex for replacing whitespaces
      const newKey = prevKeyName
        ? `${prevKeyName}__${key.replace(/\s+/g, "--")}`
        : `${key}`;

      // If the value is another object, we repeat this whole process, otherwise we update the new Map.
      if (typeof obj[key] == "object") {
        mainFunction(obj[key], newKey);
      } else {
        newMap.set(newKey, obj[key]);
      }
    });
  };
  //   Call the function
  mainFunction(obj);
  //   Show results on console log
  console.log(newMap);
};
