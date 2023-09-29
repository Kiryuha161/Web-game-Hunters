"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
var LightOperation_1 = require("./LightOperation");
var Utilits_1 = require("./Utilits");
var Message_1 = require("./Message");
var World = /** @class */ (function () {
    function World() {
        this.lightOperations = [];
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewEOperation = this.gameDate;
    }
    World.prototype.TranslateToString = function () {
        return this.gameDate.toISOString();
    };
    World.prototype.AddDay = function () {
        this.gameDate.setDate(this.gameDate.getDate() + 1);
    };
    World.prototype.GetEOperation = function (world, academy, id) {
        if (world.gameDate.getDate() - world.lastGetNewEOperation.getDate() >= Utilits_1.Utilits.GetRandomNumber(1, 4)) {
            var lightOperation = new LightOperation_1.LightOperation(Utilits_1.Utilits.GetName("rus", "male") + " " + Utilits_1.Utilits.GetSurname("rus", "male"));
            this.lightOperations.push(lightOperation);
            var idEOperation = this.lightOperations.length - 1;
            var message = new Message_1.Message();
            message.PerformListMessageEvent("Вы получили новое задание E-категории", id, world.lightOperations[idEOperation].startOperationInfo, "operation", academy.hunters);
            world.lastGetNewEOperation = new Date(world.gameDate);
        }
    };
    return World;
}());
exports.World = World;
