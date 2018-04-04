export class CloneService {

    public clone(obj: any):  any {

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            var copyArray = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copyArray[i] =  this.clone(obj[i]);
            }
            return copyArray;
        }

        // Handle Object
        if (obj instanceof Object) {
            //var copyObj = {};
            var copyObj = {} as any;
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copyObj[attr] = this.clone(obj[attr]);
            }
            return copyObj;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
}
