import {genFilesByJsonData} from '../lib/genFilesByData.js'
import {temps} from './tmpData.js'
import {fileJsonData} from './fileJsonData.js'

genFilesByJsonData(temps,fileJsonData);

// You can use it when creating projects, updating requirements, 
// and planning to create multiple file structures,
// instead of manually generating them one by one

// His directory will be the current directory where your node command is executed
