// 把这个做工具发版为npm包，本地的这些引入参数，就得重新改变一下，copy出来改动

import fs from "fs";

/**
 * 
 *  temps,
 *  filesJson,
 * `
 * }
 */
export const genFilesByJsonData = (temps = {}, fileJson) => {
  if (!fileJson) {
    console.log("fileJson:", fileJson);
    console.error("生成文件数所需参数缺失");
    console.error("params fileJson is losed,please check it again");
  }
  let fileJsonFlat = [];
  const genFiles = (basePath, baseObj) => {
    let keys = Object.keys(baseObj);
    keys.forEach((item, i) => {
      let type = typeof baseObj[item];
      if (type == "string") {
        let [filName, tempType] = baseObj[item].split("-");
        fileJsonFlat.push({
          prePath: basePath,
          fileName: filName,
          fileType: "file",
          tempType,
        });
      } else if (type == "object") {
        let currentPath = basePath + "/" + item;
        fileJsonFlat.push({
          prePath: basePath,
          fileName: item,
          fileType: "folder",
        });
        genFiles(currentPath, baseObj[item]);
      }
    });
  };

  let basePath = ".";
  let baseObj = fileJson;
  genFiles(basePath, baseObj);

  const temObj = temps;
  const genFilesByFlat = (arr) => {
    arr.forEach((item) => {
      if (item.fileType == "folder") {
        let folderPath = item.prePath + "/" + item.fileName;
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
          console.log("genFile success!",folderPath);
        } else {
          console.log(folderPath, "is exist");
        }
      } else if (item.fileType == "file") {
        let fileName = item.prePath + "/" + item.fileName;
        let data = String(temObj[item.tempType] || "");

        if (!fs.existsSync(fileName)) {
          fs.writeFile(fileName, data, (err) => {
            if (err) {
              console.log(err, "err----");
            }
          });
          console.log("genFile success!",fileName);
        } else {
          console.log(fileName, "is exist");
        }
      }
    });
  };

  genFilesByFlat(fileJsonFlat);
};
