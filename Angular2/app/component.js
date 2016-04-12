System.register(['angular2/core', 'angular2/common', '../services/sitemDataService', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, sitemDataService_1, http_1;
    var Sitem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (sitemDataService_1_1) {
                sitemDataService_1 = sitemDataService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Sitem = (function () {
                function Sitem(service) {
                    this.sitems = [];
                    console.log(service.httpGet());
                }
                Sitem = __decorate([
                    core_1.Component({
                        selector: 'sitems',
                        directives: [common_1.NgFor],
                        providers: [sitemDataService_1.SitemService, http_1.HTTP_PROVIDERS],
                        templateUrl: 'template/sitem.html'
                    }), 
                    __metadata('design:paramtypes', [sitemDataService_1.SitemService])
                ], Sitem);
                return Sitem;
            }());
            exports_1("Sitem", Sitem);
        }
    }
});
//# sourceMappingURL=component.js.map