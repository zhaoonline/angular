'use strict';/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var router_1 = require('./src/router/router');
exports.Router = router_1.Router;
var router_outlet_1 = require('./src/router/directives/router_outlet');
exports.RouterOutlet = router_outlet_1.RouterOutlet;
var router_link_1 = require('./src/router/directives/router_link');
exports.RouterLink = router_link_1.RouterLink;
var instruction_1 = require('./src/router/instruction');
exports.RouteParams = instruction_1.RouteParams;
exports.RouteData = instruction_1.RouteData;
var route_registry_1 = require('./src/router/route_registry');
exports.RouteRegistry = route_registry_1.RouteRegistry;
exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
__export(require('./src/router/route_config/route_config_decorator'));
var lifecycle_annotations_1 = require('./src/router/lifecycle/lifecycle_annotations');
exports.CanActivate = lifecycle_annotations_1.CanActivate;
var instruction_2 = require('./src/router/instruction');
exports.Instruction = instruction_2.Instruction;
exports.ComponentInstruction = instruction_2.ComponentInstruction;
var core_1 = require('angular2/core');
exports.OpaqueToken = core_1.OpaqueToken;
var router_providers_common_1 = require('angular2/src/router/router_providers_common');
exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
var router_providers_1 = require('angular2/src/router/router_providers');
exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
var router_outlet_2 = require('./src/router/directives/router_outlet');
var router_link_2 = require('./src/router/directives/router_link');
/**
 * A list of directives. To use the router directives like {@link RouterOutlet} and
 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
 * component.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *    // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
exports.ROUTER_DIRECTIVES = [router_outlet_2.RouterOutlet, router_link_2.RouterLink];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC0zS1dUa0lMVi50bXAvYW5ndWxhcjIvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7Ozs7O0FBRUgsdUJBQXFCLHFCQUFxQixDQUFDO0FBQW5DLGlDQUFtQztBQUMzQyw4QkFBMkIsdUNBQXVDLENBQUM7QUFBM0Qsb0RBQTJEO0FBQ25FLDRCQUF5QixxQ0FBcUMsQ0FBQztBQUF2RCw4Q0FBdUQ7QUFDL0QsNEJBQXFDLDBCQUEwQixDQUFDO0FBQXhELGdEQUFXO0FBQUUsNENBQTJDO0FBQ2hFLCtCQUFzRCw2QkFBNkIsQ0FBQztBQUE1RSx1REFBYTtBQUFFLDZFQUE2RDtBQUNwRixpQkFBYyxrREFBa0QsQ0FBQyxFQUFBO0FBR2pFLHNDQUEwQiw4Q0FBOEMsQ0FBQztBQUFqRSwwREFBaUU7QUFDekUsNEJBQWdELDBCQUEwQixDQUFDO0FBQW5FLGdEQUFXO0FBQUUsa0VBQXNEO0FBQzNFLHFCQUEwQixlQUFlLENBQUM7QUFBbEMseUNBQWtDO0FBQzFDLHdDQUFzQyw2Q0FBNkMsQ0FBQztBQUE1RSxvRkFBNEU7QUFDcEYsaUNBQWdELHNDQUFzQyxDQUFDO0FBQS9FLCtEQUFnQjtBQUFFLDZEQUE2RDtBQUV2Riw4QkFBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSw0QkFBeUIscUNBQXFDLENBQUMsQ0FBQTtBQUUvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ1UseUJBQWlCLEdBQTRCLENBQUMsNEJBQVksRUFBRSx3QkFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogTWFwcyBhcHBsaWNhdGlvbiBVUkxzIGludG8gYXBwbGljYXRpb24gc3RhdGVzLCB0byBzdXBwb3J0IGRlZXAtbGlua2luZyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5leHBvcnQge1JvdXRlcn0gZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlcic7XG5leHBvcnQge1JvdXRlck91dGxldH0gZnJvbSAnLi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX291dGxldCc7XG5leHBvcnQge1JvdXRlckxpbmt9IGZyb20gJy4vc3JjL3JvdXRlci9kaXJlY3RpdmVzL3JvdXRlcl9saW5rJztcbmV4cG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlRGF0YX0gZnJvbSAnLi9zcmMvcm91dGVyL2luc3RydWN0aW9uJztcbmV4cG9ydCB7Um91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICcuL3NyYy9yb3V0ZXIvcm91dGVfcmVnaXN0cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlX2NvbmZpZy9yb3V0ZV9jb25maWdfZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9kZWZpbml0aW9uJztcbmV4cG9ydCB7T25BY3RpdmF0ZSwgT25EZWFjdGl2YXRlLCBPblJldXNlLCBDYW5EZWFjdGl2YXRlLCBDYW5SZXVzZX0gZnJvbSAnLi9zcmMvcm91dGVyL2ludGVyZmFjZXMnO1xuZXhwb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSAnLi9zcmMvcm91dGVyL2xpZmVjeWNsZS9saWZlY3ljbGVfYW5ub3RhdGlvbnMnO1xuZXhwb3J0IHtJbnN0cnVjdGlvbiwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4vc3JjL3JvdXRlci9pbnN0cnVjdGlvbic7XG5leHBvcnQge09wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmV4cG9ydCB7Uk9VVEVSX1BST1ZJREVSU19DT01NT059IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVyc19jb21tb24nO1xuZXhwb3J0IHtST1VURVJfUFJPVklERVJTLCBST1VURVJfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVycyc7XG5cbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsnO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBkaXJlY3RpdmVzLiBUbyB1c2UgdGhlIHJvdXRlciBkaXJlY3RpdmVzIGxpa2Uge0BsaW5rIFJvdXRlck91dGxldH0gYW5kXG4gKiB7QGxpbmsgUm91dGVyTGlua30sIGFkZCB0aGlzIHRvIHlvdXIgYGRpcmVjdGl2ZXNgIGFycmF5IGluIHRoZSB7QGxpbmsgVmlld30gZGVjb3JhdG9yIG9mIHlvdXJcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvaVJVUDhCNU9VYnhDV1EzQWNJRG0pKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUywgUm91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG4gKlxuICogQENvbXBvbmVudCh7ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXX0pXG4gKiBAUm91dGVDb25maWcoW1xuICogIHsuLi59LFxuICogXSlcbiAqIGNsYXNzIEFwcENtcCB7XG4gKiAgICAvLyAuLi5cbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBbUk9VVEVSX1BST1ZJREVSU10pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfRElSRUNUSVZFUzogYW55W10gPSAvKkB0czJkYXJ0X2NvbnN0Ki9bUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXTtcbiJdfQ==