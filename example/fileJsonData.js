
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