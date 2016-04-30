import { Type, isBlank } from 'angular2/src/facade/lang';
export function hasLifecycleHook(name, obj) {
    if (isBlank(obj))
        return false;
    let type = obj.constructor;
    if (!(type instanceof Type))
        return false;
    return name in type.prototype;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdmhTaW9sUkcudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO0FBRXRELGlDQUFpQyxJQUFZLEVBQUUsR0FBVztJQUN4RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDMUMsTUFBTSxDQUFDLElBQUksSUFBUyxJQUFLLENBQUMsU0FBUyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNMaWZlY3ljbGVIb29rKG5hbWU6IHN0cmluZywgb2JqOiBPYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKGlzQmxhbmsob2JqKSkgcmV0dXJuIGZhbHNlO1xuICBsZXQgdHlwZSA9IG9iai5jb25zdHJ1Y3RvcjtcbiAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIFR5cGUpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBuYW1lIGluKDxhbnk+dHlwZSkucHJvdG90eXBlO1xufVxuIl19