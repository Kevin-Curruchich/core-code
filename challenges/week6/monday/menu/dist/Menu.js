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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const MenuElement_1 = require("./MenuElement");
const Input_1 = require("./Input");
class Menu {
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialsMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
        this.filMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }
    filMainMenu() {
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: `Chef's Specials` },
            { option: 3, message: `Chicken` },
            { option: 4, message: `Beef` },
            { option: 5, message: `Beverages` },
        ];
    }
    fillOptions() {
        this.soupOptions = [
            new MenuElement_1.MenuElement('Wonton Soup (Chicken)', 2.25, '🐔'),
            new MenuElement_1.MenuElement('Chicken Corn Soyp', 1.95, '🐔'),
            new MenuElement_1.MenuElement('Vegetables Corn Soup', 2.25, '🐔'),
        ];
        this.chefSpecialsOptions = [
            new MenuElement_1.MenuElement('Orange beef', 8.95, '🐄'),
            new MenuElement_1.MenuElement('Kung Pao Shrimp', 8.5, '🐄'),
        ];
        this.chickenOptions = [
            new MenuElement_1.MenuElement('Lemon Chichek', 9.95, '🐔'),
            new MenuElement_1.MenuElement('Sesame CHicken', 9.95, '🐔'),
            new MenuElement_1.MenuElement('Hunan Chicken', 10.5, '🐔'),
        ];
        this.beefOptions = [
            new MenuElement_1.MenuElement('Peper Steak', 9.95, '🐄'),
            new MenuElement_1.MenuElement('Manchurian Beef', 11.95, '🐄'),
        ];
        this.beveragesOptions = [
            new MenuElement_1.MenuElement('Piña Colada', 3.0, '🍍'),
            new MenuElement_1.MenuElement('Spanish Coffee', 5.5, '🍍'),
        ];
    }
    fillSubMenus() {
        this.soupMenu = this.soupOptions.map((o) => ({
            name: o.name,
            message: o.printOption(),
        }));
        this.chefSpecialsMenu = this.chefSpecialsOptions.map((o) => ({
            name: o.name,
            message: o.printOption(),
        }));
        this.chickenMenu = this.chickenOptions.map((o) => ({
            name: o.name,
            message: o.printOption(),
        }));
        this.beefMenu = this.beefOptions.map((o) => ({
            name: o.name,
            message: o.printOption(),
        }));
        this.beveragesMenu = this.beveragesOptions.map((o) => ({
            name: o.name,
            message: o.printOption(),
        }));
    }
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelect('Menu Options', this.mainMenu);
            console.log(input);
        });
    }
    showSubMenu() { }
}
exports.Menu = Menu;
