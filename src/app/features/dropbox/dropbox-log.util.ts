// const dbxLog = (...args) => console.log(args);
import {environment} from '../../../environments/environment';
export const dbxLog = (...args) => console.log(...args);
// export const dbxLog = (...args) => environment.production && console.log(...args);
