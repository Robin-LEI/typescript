"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import superagent from 'superagent';
var cheerio_1 = __importDefault(require("cheerio"));
var request = require('superagent');
require('superagent-charset')(request);
var fs = require('fs');
var path = require('path');
// fs.writeFileSync(filePath, 1);
// fs.exists(filePath, (exists:boolean) => {
//   if (!exists) {
//     // 不存在，创建目录
//     fs.mkdir(filePath, (err: string) => {
//       if (err) {
//         throw new Error(err);
//       }
//       console.log('创建成功')
//     });
//     console.log(1111)
//   }
//   console.log(exists)
// });
// function test() {
//   let bool = pathISExists(filePath);
//   if (!bool) {
//     createPath(filePath);
//   }
//   fs.writeFileSync(filePath + '/data.json', 1222)
//   console.log(11, bool)
// }
// test()
function createPath(filePath) {
    try {
        return fs.mkdirSync(filePath);
    }
    catch (error) {
        return false;
    }
}
function pathISExists(filePath) {
    try {
        return fs.statSync(filePath);
    }
    catch (error) {
        return false;
    }
}
var Crowller = /** @class */ (function () {
    function Crowller(url, charset) {
        this.rawHtml = '';
        this.filePath = path.resolve(__dirname, '../data');
        this.url = url;
        this.charset = charset;
        this.getRawHtml();
    }
    Crowller.prototype.getRawHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // 解决了当前https报的self signed certificate in certificate chain问题。
                        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
                        return [4 /*yield*/, request.get(this.url).charset(this.charset)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.rawHtml = result.text;
                            this.getProductInfos(this.rawHtml);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        throw new Error(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Crowller.prototype.getProductInfos = function (html) {
        var pushData;
        var $ = cheerio_1.default.load(html);
        var footerItems = $('.ft-link-item a');
        var result = [];
        footerItems.map(function (index, element) {
            var text = $(element).text() || '';
            var href = $(element).attr('href') || '';
            if (text.trim()) {
                result.push({
                    href: href,
                    text: text
                });
            }
        });
        pushData = { time: new Date().getTime(), data: result };
        // 判断目录是否存在，如果存在，先读取数据，再把这次新的数据写入，如果不存在，先创建目录，在写入
        var bool = pathISExists(this.filePath);
        if (!bool) {
            createPath(this.filePath);
        }
        else {
        }
        console.log();
    };
    return Crowller;
}());
new Crowller('https://www.ctrip.com/', 'gb2312');
// https://www.ctrip.com/
