

type ArrayOrObjectCallbackType = | "array" | "object";
type ArrayOrObjectCallbackParamsType = (value: any, key: any, type: ArrayOrObjectCallbackType) => any;
/** 
 * It is same as: 
 * target.foreach() for an Array, and 
 * Object.keys(target).foreach(key=>{ 
 *  let option=target[key] 
 * })
 * 
 * It expects Callback function as a second parameter, which passes (Item, Key, Type: |"array"|"object")
*/
export function each(target: Array<any> | any, callback: ArrayOrObjectCallbackParamsType): void {
  if (Array.isArray(target)) {
    target.forEach((value: any, key: any) => {
      callback(value, key, "array");
    })
  }
  else if (typeof (target) === "object") {
    Object.keys(target).forEach((key: any) => {
      let value = target[key];
      callback(value, key, "object");
    })
  }
}