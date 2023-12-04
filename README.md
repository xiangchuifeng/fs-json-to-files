# fs-json-to-files

<img src="/images/tool-icon.png" width="400px" style="margin-left:200px;" />

use it, you can create you project folders by folder json data, width any you template content;

## More specifically，this is a tool, generate your project folders,keep you folder structure, fill template content your configured;  

i search in the web,many content about folders generate text tree, like:
```js
  tree 
```

then it give me a snippet
![](/images/tree-result-text.png)  

every time i build a new project, many folders、files require to create, need to fill content,  
if tree has reverse operation,it will be great;  
i search in the web, Almost no discovery of this feature；npm 、github 、or Blog、Forum；  

so i did it , It took half a day , then It took another half day to publish。

### usage:  

```js
// example.js

import {genFilesByJsonData} from 'fs-json-to-files'
import {temps} from './tmpData.js'
import {fileJsonData} from './fileJsonData.js'

genFilesByJsonData(temps,fileJsonData);
// You can use it when creating projects, updating requirements, 
// and planning to create multiple file structures,
// instead of manually generating them one by one

```

![](/images/generated-folders.png)  
![](/images/generated-temp.png)  

### his directory will be the current directory where your node command is executed
```js
  node example.js
```

### the fileJsonData example:

```js
// fileJsonData.js
// I prefer to use this data structure here, 
// which is a one-to-one mapping of file structures without sub arrays such as children
// each Object will renerate one folder, the inner Object is also，done and done,
// if the value of key is type of string, it will be defined as a file,it can be followed a '-' ,
// the later is content template type that will fill.if no,the file will a empty file, no bad impact.

export const fileJsonData = {
  src:{
    views:{
      app:'app.vue-tempVue'
    },
    config:"config.js-tempA",
    common:{
      util:'util.js-tempA',
      data:{
       a:'a.js-tempA',
       b:{
        bb:'bb.js-tempB',
        cc:'cc.js-tempB'
       }
      }
    }
  }
}
```


### the temps example:

```js
// tmpData.js
// I have chosen to put the template type in a separate file, corresponding to the template in the JSON data file just now
export const temps = {
  tempVue: `
    <template>
      <div></div>
    </template>
    
    <script setup>
    
    </script>
    <style lang="less">
    
    </style>
  `,
  tempA: `
    export const A = ()=>{
      console.log('23333')
    }
  `,

  tempB: `
  export const B = ()=>{
    console.log('b3333')
  }
`,
};

```




