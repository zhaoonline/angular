import { stringify } from "angular2/src/facade/lang";
export class RouteMetadata {
    get path() { }
    get component() { }
}
/* @ts2dart_const */
export class Route {
    constructor({ path, component } = {}) {
        this.path = path;
        this.component = component;
    }
    toString() { return `@Route(${this.path}, ${stringify(this.component)})`; }
}
/* @ts2dart_const */
export class RoutesMetadata {
    constructor(routes) {
        this.routes = routes;
    }
    toString() { return `@Routes(${this.routes})`; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXZoU2lvbFJHLnRtcC9hbmd1bGFyMi9zcmMvYWx0X3JvdXRlci9tZXRhZGF0YS9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFPLFNBQVMsRUFBQyxNQUFNLDBCQUEwQjtBQUV4RDtJQUNFLElBQWEsSUFBSSxNQUFXO0lBQzVCLElBQWEsU0FBUyxNQUFTO0FBQ2pDLENBQUM7QUFFRCxvQkFBb0I7QUFDcEI7SUFHRSxZQUFZLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxHQUFzQyxFQUFFO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxRQUFRLEtBQWEsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7QUFFRCxvQkFBb0I7QUFDcEI7SUFDRSxZQUFtQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUFHLENBQUM7SUFDOUMsUUFBUSxLQUFhLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBzdHJpbmdpZnl9IGZyb20gXCJhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmdcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJvdXRlTWV0YWRhdGEge1xuICBhYnN0cmFjdCBnZXQgcGF0aCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldCBjb21wb25lbnQoKTogVHlwZTtcbn1cblxuLyogQHRzMmRhcnRfY29uc3QgKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZSBpbXBsZW1lbnRzIFJvdXRlTWV0YWRhdGEge1xuICBwYXRoOiBzdHJpbmc7XG4gIGNvbXBvbmVudDogVHlwZTtcbiAgY29uc3RydWN0b3Ioe3BhdGgsIGNvbXBvbmVudH06IHtwYXRoPzogc3RyaW5nLCBjb21wb25lbnQ/OiBUeXBlfSA9IHt9KSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEBSb3V0ZSgke3RoaXMucGF0aH0sICR7c3RyaW5naWZ5KHRoaXMuY29tcG9uZW50KX0pYDsgfVxufVxuXG4vKiBAdHMyZGFydF9jb25zdCAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlc01ldGFkYXRhIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlczogUm91dGVNZXRhZGF0YVtdKSB7fVxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEBSb3V0ZXMoJHt0aGlzLnJvdXRlc30pYDsgfVxufVxuIl19