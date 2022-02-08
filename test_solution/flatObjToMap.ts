export const flatObjToMap = (obj: object) => {
  const newMap = new Map<String, String>();

  const mainFunction = (obj: object) => {
    Object.keys(obj).forEach((key) => {
      const objTemp = {};
      if (typeof obj[key] === "object") {
        Object.keys(obj[key]).forEach((k: string) => {
          const newKey = `${key.replaceAll(" ", "--")}__${k}`;
          objTemp[newKey] = obj[key][k];
        });
        return mainFunction(objTemp); // aici am pus initial mainFunction(objTemp[newKey]), motiv pentru care aveam o eroare si practic am stat mai bine de 30 min s-o gasesc
      } else {
        newMap.set(key, obj[key]);
      }
    });
  };

  //   Call the function
  mainFunction(obj);
  //   Show results on console log
  console.log(newMap);
};
