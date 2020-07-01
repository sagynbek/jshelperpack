

type ArrayOrObjectCallbackType = | "array" | "object";

/** 
 * It is same as: 
 * target.foreach() for an Array, and 
 * Object.keys(target).foreach(key=>{ 
 *  let option=target[key] 
 * })
 * 
 * It expects Callback function as a second parameter, which passes (Item, Key, Type: |"array"|"object")
*/
export function each<T>(target: Array<T>, callback: (item: T, order: number, type: ArrayOrObjectCallbackType) => void): void;
export function each<T>(target: object, callback: (value: any, key: string, type: ArrayOrObjectCallbackType) => void): void;

export function each(target: any, callback: (value: any, key: any, type: ArrayOrObjectCallbackType) => void): void {
  if (Array.isArray(target)) {
    target.forEach((item, order: number) => {
      callback(item, order, "array");
    })

  }
  else if (typeof (target) === "object") {
    Object.keys(target).forEach((key: string) => {
      let value = target[key];
      callback(value, key, "object");
    })
  }
}