import { Provider } from './provider';
export function isProviderLiteral(obj) {
    return obj && typeof obj == 'object' && obj.provide;
}
export function createProvider(obj) {
    return new Provider(obj.provide, obj);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdmhTaW9sUkcudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2RpL3Byb3ZpZGVyX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxZQUFZO0FBRW5DLGtDQUFrQyxHQUFRO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDdEQsQ0FBQztBQUVELCtCQUErQixHQUFRO0lBQ3JDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb3ZpZGVyfSBmcm9tICcuL3Byb3ZpZGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdmlkZXJMaXRlcmFsKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiBvYmoucHJvdmlkZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb3ZpZGVyKG9iajogYW55KTogUHJvdmlkZXIge1xuICByZXR1cm4gbmV3IFByb3ZpZGVyKG9iai5wcm92aWRlLCBvYmopO1xufVxuIl19