var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Zano";
            config.map([
                { route: ['', 'home'], name: 'Home', moduleId: 'indexes/home', nav: true, title: 'Home' },
                { route: ['gifs'], name: 'Gifs', moduleId: 'indexes/gifs', nav: true, title: 'Gifs' }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZDtRQUNBLENBQUM7UUFFTSw2QkFBZSxHQUF0QixVQUF1QixNQUEwQixFQUFFLE1BQWE7WUFFOUQsTUFBTSxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUM7WUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFPLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUM5RixFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQU8sUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7YUFDM0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLEdBQUc7UUFEZiw4QkFBVSxFQUFFOztPQUNBLEdBQUcsQ0FnQmY7SUFoQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGF1dG9pbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBwdWJsaWMgcm91dGVyOlJvdXRlcjtcclxuICBcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6Um91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOlJvdXRlcil7ICAgIFxyXG5cclxuICAgIGNvbmZpZy50aXRsZT1cIlphbm9cIjtcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiBbJycsICdob21lJ10sIG5hbWU6ICdIb21lJywgICAgICBtb2R1bGVJZDogJ2luZGV4ZXMvaG9tZScsIG5hdjogdHJ1ZSwgdGl0bGU6ICdIb21lJyB9LFxyXG4gICAgICB7IHJvdXRlOiBbJ2dpZnMnXSwgbmFtZTogJ0dpZnMnLCAgICAgIG1vZHVsZUlkOiAnaW5kZXhlcy9naWZzJywgbmF2OiB0cnVlLCB0aXRsZTogJ0dpZnMnIH1cclxuICAgIF0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin("aurelia-animator-css")
            .plugin("aurelia-fetch-client")
            .plugin('aurelia-dialog', function (config) {
            config.useDefaults();
            config.settings.centerHorizontalOnly = false;
            config.settings.lock = false;
            config.settings.position = function (d, c) {
                console.log(d);
                d.style.top = "50px";
                console.log(c);
            };
        })
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO2FBQzlCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzthQUM5QixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBQSxNQUFNO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFFN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBQyxDQUFhLEVBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO2FBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBM0JELDhCQTJCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgYXVyZWxpYS51c2VcclxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgLnBsdWdpbihcImF1cmVsaWEtYW5pbWF0b3ItY3NzXCIpXHJcbiAgICAucGx1Z2luKFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIilcclxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtZGlhbG9nJywgY29uZmlnID0+IHtcclxuICAgICAgICBjb25maWcudXNlRGVmYXVsdHMoKTtcclxuICAgICAgICBjb25maWcuc2V0dGluZ3MuY2VudGVySG9yaXpvbnRhbE9ubHkgPSBmYWxzZTtcclxuICAgICAgICBjb25maWcuc2V0dGluZ3MubG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vVE9ETzogbmVlZCB0byBhZGQgZmFkaW5nIGluXHJcbiAgICAgICAgY29uZmlnLnNldHRpbmdzLnBvc2l0aW9uID0gKGQ6SFRNTEVsZW1lbnQsYykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICAgICAgZC5zdHlsZS50b3AgPSBcIjUwcHhcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pICAgIFxyXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xyXG5cclxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcclxuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcclxuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XHJcbiAgfVxyXG5cclxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/api-service',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApiService = (function () {
        function ApiService(http) {
            this.http = http;
            this.http.configure(function (config) {
                config
                    .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
            });
        }
        ApiService.prototype.get = function (url, done) {
            return this.http.fetch(url)
                .then(function (response) { return response.json(); })
                .then(function (response) { return done(response); });
        };
        return ApiService;
    }());
    ApiService = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
    ], ApiService);
    exports.ApiService = ApiService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9hcGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLFVBQVU7UUFFbkIsb0JBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUN0QixNQUFNO3FCQUNELFlBQVksQ0FBQztvQkFDVixXQUFXLEVBQUUsYUFBYTtvQkFDMUIsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLGtCQUFrQixFQUFFLGdCQUFnQjtxQkFDdkM7aUJBQ0osQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU0sd0JBQUcsR0FBVixVQUFjLEdBQVcsRUFBRSxJQUFxQjtZQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUN0QixJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDTCxpQkFBQztJQUFELENBckJBLEFBcUJDLElBQUE7SUFyQlksVUFBVTtRQUR0Qiw4QkFBVSxFQUFFO3lDQUdpQixpQ0FBVTtPQUYzQixVQUFVLENBcUJ0QjtJQXJCWSxnQ0FBVSIsImZpbGUiOiJhcGkvYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuLy9pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XHJcbi8vaW1wb3J0ICdwcm9taXNlLXBvbHlmaWxsJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgICAgICAgICAud2l0aERlZmF1bHRzKHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQ8VD4odXJsOiBzdHJpbmcsIGRvbmU6IChyZXNwb25zZSkgPT4gVCk6IFByb21pc2U8VD4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiBkb25lKHJlc3BvbnNlKTsgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/gif-api',["require", "exports", "aurelia-framework", "./api-service"], function (require, exports, aurelia_framework_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GifApi = (function () {
        function GifApi(apiService) {
            this.apiService = apiService;
            this.root = "http://localhost:9000/";
        }
        GifApi.prototype.getAllGifs = function () {
            return this.apiService.get(this.root + "api/Gif/GetAllGifs", function (json) { return json; });
        };
        GifApi.prototype.getGifsByCategory = function (category) {
            return this.apiService.get(this.root + "api/Gif/GetAllGifs/" + category, function (json) { return json; });
        };
        GifApi.prototype.getRandomGif = function () {
            return this.apiService.get(this.root + "api/Gif/GetRandomGif/", function (json) { return json; });
        };
        return GifApi;
    }());
    GifApi = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], GifApi);
    exports.GifApi = GifApi;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9naWYtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsTUFBTTtRQUdmLGdCQUFvQixVQUFzQjtZQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1lBRG5DLFNBQUksR0FBUyx3QkFBd0IsQ0FBQztRQUNDLENBQUM7UUFFeEMsMkJBQVUsR0FBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksdUJBQW9CLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUVNLGtDQUFpQixHQUF4QixVQUF5QixRQUFnQjtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksd0JBQXFCLEdBQUcsUUFBUSxFQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQzNGLENBQUM7UUFFTSw2QkFBWSxHQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsSUFBSSwwQkFBdUIsRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBQ0wsYUFBQztJQUFELENBaEJBLEFBZ0JDLElBQUE7SUFoQlksTUFBTTtRQURsQiw4QkFBVSxFQUFFO3lDQUl1Qix3QkFBVTtPQUhqQyxNQUFNLENBZ0JsQjtJQWhCWSx3QkFBTSIsImZpbGUiOiJhcGkvZ2lmLWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS1zZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIEdpZkFwaSB7XHJcblxyXG4gICAgcHVibGljIHJvb3Q6c3RyaW5nPSBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9cIjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbEdpZnMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGAke3RoaXMucm9vdH1hcGkvR2lmL0dldEFsbEdpZnNgLCBqc29uID0+IGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHaWZzQnlDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGAke3RoaXMucm9vdH1hcGkvR2lmL0dldEFsbEdpZnMvYCArIGNhdGVnb3J5LCBqc29uID0+IGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYW5kb21HaWYoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChgJHt0aGlzLnJvb3R9YXBpL0dpZi9HZXRSYW5kb21HaWYvYCwganNvbiA9PiBqc29uKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('indexes/gifs',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gifs = (function () {
        function Gifs() {
        }
        return Gifs;
    }());
    exports.Gifs = Gifs;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4ZXMvZ2lmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUVJO1FBQ0EsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLG9CQUFJIiwiZmlsZSI6ImluZGV4ZXMvZ2lmcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2lmc3tcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('indexes/home',["require", "exports", "aurelia-framework", "../api/gif-api", "aurelia-dialog", "../resources/elements/gif-embed-dialog"], function (require, exports, aurelia_framework_1, gif_api_1, aurelia_dialog_1, gif_embed_dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(apiService, dialogService) {
            this.apiService = apiService;
            this.dialogService = dialogService;
        }
        Home.prototype.attached = function () {
        };
        Home.prototype.openDialog = function () {
            this.dialogService
                .open({
                viewModel: gif_embed_dialog_1.GifEmbedDialog,
                model: {
                    firstName: 'Wade',
                    middleName: 'Owen',
                    lastName: 'Watts'
                }
            });
        };
        return Home;
    }());
    Home = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [gif_api_1.GifApi,
            aurelia_dialog_1.DialogService])
    ], Home);
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4ZXMvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLElBQUk7UUFJYixjQUNZLFVBQWtCLEVBQ2xCLGFBQTRCO1lBRDVCLGVBQVUsR0FBVixVQUFVLENBQVE7WUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFeEMsQ0FBQztRQUVHLHVCQUFRLEdBQWY7UUFVRyxDQUFDO1FBRUcseUJBQVUsR0FBakI7WUFDQyxJQUFJLENBQUMsYUFBYTtpQkFDaEIsSUFBSSxDQUFDO2dCQUNMLFNBQVMsRUFBRSxpQ0FBYztnQkFDekIsS0FBSyxFQUFFO29CQUNOLFNBQVMsRUFBRSxNQUFNO29CQUNqQixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsUUFBUSxFQUFFLE9BQU87aUJBQ2pCO2FBQ0QsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNGLFdBQUM7SUFBRCxDQWpDQSxBQWlDQyxJQUFBO0lBakNZLElBQUk7UUFEaEIsOEJBQVUsRUFBRTt5Q0FNZSxnQkFBTTtZQUNILDhCQUFhO09BTi9CLElBQUksQ0FpQ2hCO0lBakNZLG9CQUFJIiwiZmlsZSI6ImluZGV4ZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGF1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgR2lmQXBpIH0gZnJvbSBcIi4uL2FwaS9naWYtYXBpXCI7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiYXVyZWxpYS1kaWFsb2dcIjtcclxuaW1wb3J0IHtHaWZFbWJlZERpYWxvZ30gZnJvbSBcIi4uL3Jlc291cmNlcy9lbGVtZW50cy9naWYtZW1iZWQtZGlhbG9nXCI7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBIb21le1xyXG5cclxuICAgIHB1YmxpYyBnaWY6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogR2lmQXBpLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZVxyXG4gICAgKXtcclxuICAgIH1cclxuXHJcblx0cHVibGljIGF0dGFjaGVkKCk6IHZvaWQge1xyXG5cclxuXHRcdC8vc2V0VGltZW91dCgoKSA9PiB7IHRoaXMub3BlbkRpYWxvZygpIH0sIDEwMDApO1xyXG5cdFx0Ly8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLmFwaVNlcnZpY2UuZ2V0UmFuZG9tR2lmKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZGVidWdnZXI7XHJcblx0XHQvLyBcdFx0dGhpcy5naWYgPSByZXN1bHQ7XHJcblx0XHQvLyBcdH0pO1xyXG5cclxuXHRcdC8vIH0sIDMwMDApOyAgXHJcbiAgICB9ICBcclxuXHJcblx0cHVibGljIG9wZW5EaWFsb2coKTogdm9pZCB7XHJcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2VcclxuXHRcdFx0Lm9wZW4oe1xyXG5cdFx0XHRcdHZpZXdNb2RlbDogR2lmRW1iZWREaWFsb2csXHJcblx0XHRcdFx0bW9kZWw6IHtcclxuXHRcdFx0XHRcdGZpcnN0TmFtZTogJ1dhZGUnLFxyXG5cdFx0XHRcdFx0bWlkZGxlTmFtZTogJ093ZW4nLFxyXG5cdFx0XHRcdFx0bGFzdE5hbWU6ICdXYXR0cydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH0gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24pIHtcclxuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/gif-card',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GifCard = (function () {
        function GifCard() {
        }
        GifCard.prototype.attached = function () {
        };
        GifCard.prototype.srcChanged = function (o, n) {
        };
        return GifCard;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], GifCard.prototype, "src", void 0);
    GifCard = __decorate([
        aurelia_framework_1.autoinject()
    ], GifCard);
    exports.GifCard = GifCard;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9naWYtY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHQSxJQUFhLE9BQU87UUFBcEI7UUFXQSxDQUFDO1FBUFEsMEJBQVEsR0FBZjtRQUVBLENBQUM7UUFFTSw0QkFBVSxHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUV0QixDQUFDO1FBQ0gsY0FBQztJQUFELENBWEEsQUFXQyxJQUFBO0lBVEM7UUFEQyw0QkFBUTs7d0NBQ1M7SUFGUCxPQUFPO1FBRG5CLDhCQUFVLEVBQUU7T0FDQSxPQUFPLENBV25CO0lBWFksMEJBQU8iLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2dpZi1jYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgYXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AYXV0b2luamVjdCgpXG5leHBvcnQgY2xhc3MgR2lmQ2FyZCB7XG4gIEBiaW5kYWJsZVxuICBwdWJsaWMgc3JjOnN0cmluZztcblxuICBwdWJsaWMgYXR0YWNoZWQoKXtcblxuICB9XG5cbiAgcHVibGljIHNyY0NoYW5nZWQobywgbil7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/gif-embed-dialog',["require", "exports", "aurelia-dialog", "aurelia-framework", "aurelia-framework"], function (require, exports, aurelia_dialog_1, aurelia_framework_1, aurelia_framework_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GifEmbedDialog = (function () {
        function GifEmbedDialog(controller, be) {
            this.controller = controller;
            this.be = be;
            this.width = 100;
            this.height = 100;
            this.category = "All";
            this.fullEmbedCode = "";
            this.fullEmbedCodeAlt = "";
            this.showCustom = false;
        }
        GifEmbedDialog.prototype.setFullEmbedCode = function () {
            this.fullEmbedCode = this.embedCode();
        };
        GifEmbedDialog.prototype.attached = function () {
            var _this = this;
            this.setFullEmbedCode();
            this.be.propertyObserver(this, 'width').subscribe(function () { _this.setFullEmbedCode(); });
            this.be.propertyObserver(this, 'height').subscribe(function () { _this.setFullEmbedCode(); });
            this.be.propertyObserver(this, 'category').subscribe(function () { _this.setFullEmbedCode(); });
        };
        GifEmbedDialog.prototype.updateEmbedCode = function (size) {
            this.showCustom = false;
            switch (size) {
                case 'Small':
                    this.width = 100;
                    this.height = 100;
                    break;
                case 'Medium':
                    this.width = 200;
                    this.height = 200;
                    break;
                case 'Large':
                    this.width = 300;
                    this.height = 300;
                    break;
                case 'Custom':
                    this.showCustom = true;
                    break;
            }
        };
        GifEmbedDialog.prototype.embedCode = function () {
            return "<a id=\"gif-it\"\n height=\"" + this.height + "\" width=\"" + this.width + "\" category=\"" + this.category + "\"\n href=\"javascript:\n  var%20s%20=%20document.createElement('script');\n  s.type='text/javascript';\n  document.body.appendChild(s);\n  s.src='//imagebin-tst.intel.com/Content/gifit.js';\n  void(0);\">\n    Gif It!\n</a>";
        };
        GifEmbedDialog.prototype.triggerGifCode = function () {
            return "var gif = document.getElementById('gifit'); gif.click();";
        };
        return GifEmbedDialog;
    }());
    GifEmbedDialog = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_dialog_1.DialogController, aurelia_framework_2.BindingEngine])
    ], GifEmbedDialog);
    exports.GifEmbedDialog = GifEmbedDialog;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9naWYtZW1iZWQtZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BLElBQWEsY0FBYztRQVMxQix3QkFBbUIsVUFBNEIsRUFBUyxFQUFnQjtZQUFyRCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtZQUFTLE9BQUUsR0FBRixFQUFFLENBQWM7WUFQakUsVUFBSyxHQUFXLEdBQUcsQ0FBQztZQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1lBQ3JCLGFBQVEsR0FBVyxLQUFLLENBQUM7WUFDekIsa0JBQWEsR0FBVSxFQUFFLENBQUM7WUFDMUIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1lBQzdCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFLbEMsQ0FBQztRQUVPLHlDQUFnQixHQUF4QjtZQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFHTSxpQ0FBUSxHQUFmO1lBQUEsaUJBV0M7WUFUQSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBTyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFPLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQVEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQU0xRixDQUFDO1FBRU0sd0NBQWUsR0FBdEIsVUFBdUIsSUFBWTtZQUVsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssT0FBTztvQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2xCLEtBQUssQ0FBQztnQkFDUCxLQUFLLFFBQVE7b0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsQixLQUFLLENBQUM7Z0JBQ1AsS0FBSyxPQUFPO29CQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO29CQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDbEIsS0FBSyxDQUFDO2dCQUNQLEtBQUssUUFBUTtvQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsS0FBSyxDQUFDO1lBQ1IsQ0FBQztRQUNGLENBQUM7UUFFTSxrQ0FBUyxHQUFoQjtZQUNDLE1BQU0sQ0FBQyxpQ0FDRSxJQUFJLENBQUMsTUFBTSxtQkFBWSxJQUFJLENBQUMsS0FBSyxzQkFBZSxJQUFJLENBQUMsUUFBUSxxT0FRbkUsQ0FBQztRQUNGLENBQUM7UUFFTSx1Q0FBYyxHQUFyQjtZQUNJLE1BQU0sQ0FBQywwREFBMEQsQ0FBQztRQUN0RSxDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQXRFQSxBQXNFQyxJQUFBO0lBdEVZLGNBQWM7UUFEMUIsOEJBQVUsRUFBRTt5Q0FVbUIsaUNBQWdCLEVBQVksaUNBQWE7T0FUNUQsY0FBYyxDQXNFMUI7SUF0RVksd0NBQWMiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL2dpZi1lbWJlZC1kaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpYWxvZ0NvbnRyb2xsZXJ9IGZyb20gXCJhdXJlbGlhLWRpYWxvZ1wiO1xuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbi8vaW1wb3J0IHtaZXJvQ2xpcGJvYXJkU2VydmljZX0gZnJvbSBcIi4uLy4uL1NlcnZpY2VzL1plcm9DbGlwYm9hcmRTZXJ2aWNlXCI7XG5pbXBvcnQge0JpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbi8vaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGF1dG9pbmplY3QoKVxuZXhwb3J0IGNsYXNzIEdpZkVtYmVkRGlhbG9nIHtcblxuXHRwdWJsaWMgd2lkdGg6IG51bWJlciA9IDEwMDtcblx0cHVibGljIGhlaWdodDogbnVtYmVyID0gMTAwO1xuXHRwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyA9IFwiQWxsXCI7XG5cdHB1YmxpYyBmdWxsRW1iZWRDb2RlOnN0cmluZyA9IFwiXCI7XG5cdHB1YmxpYyBmdWxsRW1iZWRDb2RlQWx0OnN0cmluZyA9IFwiXCI7XG5cdHB1YmxpYyBzaG93Q3VzdG9tOmJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlciwgcHVibGljIGJlOkJpbmRpbmdFbmdpbmUpIHtcblx0XHQvL3RoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cdFx0Ly90aGlzLmNvbnRyb2xsZXIuc2V0dGluZ3MubG9jayA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHNldEZ1bGxFbWJlZENvZGUoKTogdm9pZCB7XG5cdFx0dGhpcy5mdWxsRW1iZWRDb2RlID0gdGhpcy5lbWJlZENvZGUoKTtcblx0fVxuXG5cblx0cHVibGljIGF0dGFjaGVkKCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZXRGdWxsRW1iZWRDb2RlKCk7XG5cdFx0dGhpcy5iZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMsICd3aWR0aCcpLnN1YnNjcmliZSgoKSA9PiB7dGhpcy5zZXRGdWxsRW1iZWRDb2RlKCk7fSk7XG5cdFx0dGhpcy5iZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMsICdoZWlnaHQnKS5zdWJzY3JpYmUoKCkgPT4ge3RoaXMuc2V0RnVsbEVtYmVkQ29kZSgpO30pO1xuXHRcdHRoaXMuYmUucHJvcGVydHlPYnNlcnZlcih0aGlzLCAnY2F0ZWdvcnknKS5zdWJzY3JpYmUoKCkgPT4geyB0aGlzLnNldEZ1bGxFbWJlZENvZGUoKTsgfSk7XG5cblx0XHQvLyBaZXJvQ2xpcGJvYXJkU2VydmljZS5zZXRVcFdpdGhDYWxsYmFjayhcImNvcHktZW1iZWQtY29kZVwiLCAoKSA9PiB7XG5cdFx0Ly8gXHR0aGlzLmNvbnRyb2xsZXIub2soKTtcblx0XHQvLyBcdHJldHVybiB0aGlzLmVtYmVkQ29kZSgpO1xuXHRcdC8vIH0pO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUVtYmVkQ29kZShzaXplOiBzdHJpbmcpIHtcblxuXHRcdHRoaXMuc2hvd0N1c3RvbSA9IGZhbHNlO1xuXHRcdHN3aXRjaChzaXplKSB7XG5cdFx0XHRjYXNlICdTbWFsbCc6XG5cdFx0XHRcdHRoaXMud2lkdGggPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gMTAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ01lZGl1bSc6XG5cdFx0XHRcdHRoaXMud2lkdGggPSAyMDA7XG5cdFx0XHRcdHRoaXMuaGVpZ2h0ID0gMjAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0xhcmdlJzpcblx0XHRcdFx0dGhpcy53aWR0aCA9IDMwMDtcblx0XHRcdFx0dGhpcy5oZWlnaHQgPSAzMDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQ3VzdG9tJzpcblx0XHRcdFx0dGhpcy5zaG93Q3VzdG9tID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGVtYmVkQ29kZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgPGEgaWQ9XCJnaWYtaXRcIlxuIGhlaWdodD1cIiR7dGhpcy5oZWlnaHR9XCIgd2lkdGg9XCIke3RoaXMud2lkdGh9XCIgY2F0ZWdvcnk9XCIke3RoaXMuY2F0ZWdvcnl9XCJcbiBocmVmPVwiamF2YXNjcmlwdDpcbiAgdmFyJTIwcyUyMD0lMjBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgcy50eXBlPSd0ZXh0L2phdmFzY3JpcHQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuICBzLnNyYz0nLy9pbWFnZWJpbi10c3QuaW50ZWwuY29tL0NvbnRlbnQvZ2lmaXQuanMnO1xuICB2b2lkKDApO1wiPlxuICAgIEdpZiBJdCFcbjwvYT5gO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmlnZ2VyR2lmQ29kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHZhciBnaWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lmaXQnKTsgZ2lmLmNsaWNrKCk7YDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/nav-bar',["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.prototype.attached = function () { };
        return NavBar;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", aurelia_router_1.Router)
    ], NavBar.prototype, "router", void 0);
    NavBar = __decorate([
        aurelia_framework_1.autoinject()
    ], NavBar);
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9uYXYtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsTUFBTTtRQUFuQjtRQUlBLENBQUM7UUFEUSx5QkFBUSxHQUFmLGNBQWtCLENBQUM7UUFDckIsYUFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBRkM7UUFEQyw0QkFBUTtrQ0FDSyx1QkFBTTswQ0FBQztJQUZWLE1BQU07UUFEbEIsOEJBQVUsRUFBRTtPQUNBLE1BQU0sQ0FJbEI7SUFKWSx3QkFBTSIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvbmF2LWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGF1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XHJcbiAgQGJpbmRhYmxlXHJcbiAgcHVibGljIHJvdXRlcjpSb3V0ZXI7XHJcbiAgcHVibGljIGF0dGFjaGVkKCl7fVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><require from=\"./resources/elements/nav-bar\"></require><nav-bar router.bind=\"router\"></nav-bar><router-view></router-view></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  background: -webkit-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: -o-linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background: linear-gradient(#303030, #444444 45%, #444444 55%, #303030);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  font-family: 'Orbitron', sans-serif; }\n\n.au-enter {\n  opacity: 0; }\n\n.au-enter-active {\n  animation: fade-in .5s linear; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.header {\n  color: orange;\n  text-align: center; }\n"; });
define('text!indexes/gifs.css', ['module'], function(module) { module.exports = ".gifs {\n  display: flex;\n  flex-wrap: wrap; }\n"; });
define('text!indexes/gifs.html', ['module'], function(module) { module.exports = "<template><require from=\"../resources/elements/gif-card\"></require><require from=\"./gifs.css\"></require><div class=\"gifs\"><gif-card src.bind=\"'http://localhost:8000/success1.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success2.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success3.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success4.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success5.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success6.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success7.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success8.gif'\"></gif-card><gif-card src.bind=\"'http://localhost:8000/success9.gif'\"></gif-card></div></template>"; });
define('text!indexes/home.html', ['module'], function(module) { module.exports = "<template><require from=\"./home.css\"></require><!--require(from=\"../components/modals/gifEmbedDialog.css\")--><section class=\"home au-animate\"></section><form action=\"http://localhost:8000/upload\" method=\"post\" encType=\"multipart/form-data\"><input type=\"file\" name=\"gif\"/><input type=\"submit\"/><div class=\"gif-player\"><div class=\"current-channel\"><img if.bind=\"gif\" src.bind=\"gif\"/></div><img class=\"tv\" src=\"http://prashantsani.com/Misc/codepen/tv.svg\" alt=\"\"/></div><button class=\"push-button\" click.trigger=\"openDialog()\">Embed Gifs Into Your Site</button></form><script>(function(){\n\tfunction httpGetAsync(theUrl, callback) {\n\t\tvar xmlHttp = new XMLHttpRequest();\n\t\txmlHttp.onreadystatechange = function () {\n\t\t\tif (xmlHttp.readyState == 4 && xmlHttp.status == 200)\n\t\t\t\tcallback(xmlHttp.responseText);\n\t\t}\n\t\txmlHttp.open(\"GET\", theUrl, true); // true for asynchronous\n\t\txmlHttp.send(null);\n\t}\n\n\tfunction whatToDo(result) {\n\t\tdocument.getElementById(\"random-gif\").src = result;\n\t}\n\n\talert('hi');\n\tconsole.log(\"Hello\");\n)}();\nconsole.log(\"why\");\n\n</script><!--img#random-gif(onload='httpGetAsync(\"http://localhost:5000/api/Gif/GetRandomGif\", whatToDo)')--></template><!--http://stackoverflow.com/questions/36517735/script-tag-in-aurelia-view-is-not-executed-->"; });
define('text!indexes/home.css', ['module'], function(module) { module.exports = "section.home {\n  text-align: center; }\n  section.home .push-button {\n    font-size: 30px;\n    padding: 10px;\n    margin-top: 60px;\n    position: relative;\n    color: #FFF;\n    text-decoration: none;\n    border-radius: 5px;\n    border: solid 1px #525252;\n    background: #383838;\n    text-align: center;\n    -webkit-transition: all 0.1s;\n    -moz-transition: all 0.1s;\n    transition: all 0.1s;\n    -webkit-box-shadow: 0px 9px 0px #1f1f1f;\n    -moz-box-shadow: 0px 9px 0px #1f1f1f;\n    box-shadow: 0px 9px 0px #1f1f1f;\n    outline: none; }\n  section.home .push-button:active {\n    -webkit-box-shadow: 0px 2px 0px #1a1a1a;\n    -moz-box-shadow: 0px 2px 0px #1a1a1a;\n    box-shadow: 0px 2px 0px #1a1a1a;\n    position: relative;\n    top: 7px; }\n  section.home h1 {\n    color: white;\n    font-weight: bold;\n    font-size: 48px;\n    padding-top: 50px;\n    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15); }\n  section.home .gif-player {\n    position: absolute;\n    top: 150px;\n    left: 50%;\n    margin-left: -200px; }\n    section.home .gif-player .current-channel, section.home .gif-player .tv {\n      position: absolute;\n      top: 0; }\n    section.home .gif-player .current-channel {\n      display: flex;\n      align-items: center;\n      top: 170px;\n      left: 30px; }\n      section.home .gif-player .current-channel img {\n        height: 280px;\n        width: 280px;\n        top: 200px; }\n"; });
define('text!resources/elements/gif-card.css', ['module'], function(module) { module.exports = ".gif-card {\n  width: 300px;\n  height: 300px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .gif-card:hover .gif-card__gif {\n    transform: scale(1.1); }\n  .gif-card__gif {\n    border: 1px solid #5e5e5e;\n    background-color: #454545;\n    padding: 10px;\n    max-width: 280px;\n    max-height: 280px; }\n"; });
define('text!resources/elements/gif-card.html', ['module'], function(module) { module.exports = "<template><require from=\"./gif-card.css\"></require><div class=\"gif-card\"><img class=\"gif-card__gif\" src.bind=\"src\"/></div></template>"; });
define('text!resources/elements/gif-embed-dialog.css', ['module'], function(module) { module.exports = ".dialog {\n  background-color: linear-gradient(#383838, #525252);\n  background: -webkit-linear-gradient(#383838, #525252);\n  border: 1px solid #525252;\n  color: white; }\n  .dialog__title {\n    font-size: 40px;\n    text-align: center;\n    margin-top: 10px; }\n  .dialog .size-options {\n    display: flex; }\n  .dialog .size-option {\n    display: flex;\n    align-items: center;\n    padding-right: 20px; }\n    .dialog .size-option input, .dialog .size-option i, .dialog .size-option p {\n      padding: 0;\n      margin: 0; }\n    .dialog .size-option p {\n      padding: 0 4px; }\n  .dialog pre {\n    background-color: white;\n    color: black;\n    padding: 10px;\n    border-radius: 5px; }\n\nux-dialog-footer {\n  border-top-color: #1f1f1f !important; }\n"; });
define('text!resources/elements/gif-embed-dialog.html', ['module'], function(module) { module.exports = "<template><require from=\"./gif-embed-dialog.css\"></require><ux-dialog class=\"dialog\"><div class=\"dialog__title\">Embed Options</div><ux-dialog-body class=\"dialog__body\"><p>1. Select Size</p><div class=\"size-options\"><div class=\"size-option\"><input type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Small')\"/><p>S</p><i class=\"fa fa-picture-o\"></i></div><div class=\"size-option\"><input type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Medium')\"/><p>M</p><i class=\"fa fa-picture-o fa-2x\"></i></div><div class=\"size-option\"><input type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Large')\"/><p>L</p><i class=\"fa fa-picture-o fa-3x\"></i></div><div class=\"size-option\"><input type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Custom')\"/><p>Custom</p></div></div><div class=\"custom\" if.bind=\"showCustom\"><div class=\"input-field\"><span>Width</span><input value.bind=\"width\"/><span>px</span></div><div class=\"input-field\"><span>Height</span><input value.bind=\"height\"/><span>px</span><ux-dialog-footer><p>footer</p></ux-dialog-footer></div></div><p>2. Select Category</p><select value.bind=\"category\"><option value=\"All\">All</option><option value=\"Success\">Success</option><option value=\"Fail\">Fail</option><option value=\"Loading\">Loading\t\t\t\t\t\t</option></select><p>3. Add this markup where gifs will appear</p><pre>${fullEmbedCode}</pre><p>4. Add this to your code to trigger gifs</p><pre>${triggerGifCode()}</pre></ux-dialog-body><ux-dialog-footer><button click.trigger=\"controller.cancel()\">Cancel</button><button id=\"copy-embed-code\">OK</button></ux-dialog-footer></ux-dialog><!--ai-dialog#gif-embedh1 Embed Options\n\nai-dialog-body\n\tp.instruction 1. Select Size\n\t.input-field.size-group\n\n\t\t\tinput(type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Small')\")\n\t\t\t.image-sizing\n\t\t\t\ti.fa.fa-picture-o\n\t\t\t\tp S\n\t\t\t\n\t\t\tinput(type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Medium')\")\n\t\t\t.image-sizing\n\t\t\t\ti.fa.fa-picture-o.fa-2x\n\t\t\t\tp M\n\n\t\t\tinput(type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Large')\")\n\t\t\t.image-sizing\n\t\t\t\ti.fa.fa-picture-o.fa-3x\n\t\t\t\tp L\n\n\t\t\tinput(type=\"radio\" name=\"size-group\" change.delegate=\"updateEmbedCode('Custom')\")\n\t\t\t.image-sizing Custom\n\n\n\t.custom(if.bind=\"showCustom\")\n\t\t.input-field\n\t\t\tspan Width\n\t\t\tinput(value.bind=\"width\")\n\t\t\tspan px\n\t\t.input-field\n\t\t\tspan Height\n\t\t\tinput(value.bind=\"height\")\n\t\t\tspan px\n\n\n\tp.instruction 2. Select Category\n\t.input-field\n\t\tselect(value.bind=\"category\")\n\t\t\toption(value=\"All\") All\n\t\t\toption(value=\"Success\") Success\n\t\t\toption(value=\"Fail\") Fail\n\t\t\toption(value=\"Loading\") Loading\n\n\tp.instruction 3. Add this markup where gifs will appear\n\t.input-field\n\t\tpre ${fullEmbedCode}\n\n\tp.instruction 4. Add this to your code to trigger gifs\n\t.input-field\n\t\tpre ${triggerGifCode()}\n\nai-dialog-footer\n\tbutton(click.trigger=\"controller.cancel()\") Cancel\n\tbutton#copy-embed-code OK--></template>"; });
define('text!resources/elements/nav-bar.css', ['module'], function(module) { module.exports = ".nav-bar {\n  flex-direction: row-reverse;\n  display: flex;\n  align-items: flex-start; }\n  .nav-bar a {\n    color: white; }\n  .nav-bar__logo {\n    align-self: flex-start;\n    color: yellow;\n    margin-right: auto;\n    order: 1;\n    margin: 4px auto 4px 0; }\n  .nav-bar__item {\n    color: white;\n    margin: 4px 8px;\n    transition: color .2s ease-in; }\n    .nav-bar__item:hover {\n      color: #999999; }\n"; });
define('text!resources/elements/nav-bar.html', ['module'], function(module) { module.exports = "<template><require from=\"./nav-bar.css\"></require><div class=\"nav-bar\"><div class=\"nav-bar__logo\">Logo</div><a class=\"nav-bar__item\" repeat.for=\"route of router.navigation\" href.bind=\"route.href\">${route.title}</a></div></template>"; });
//# sourceMappingURL=app-bundle.js.map