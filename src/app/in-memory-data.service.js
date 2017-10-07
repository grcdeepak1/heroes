"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero', age: 12 },
            { id: 11, name: 'Mr. Nice', age: 12 },
            { id: 12, name: 'Narco', age: 12 },
            { id: 13, name: 'Bombasto', age: 12 },
            { id: 14, name: 'Celeritas', age: 12 },
            { id: 15, name: 'Magneta', age: 12 },
            { id: 16, name: 'RubberMan', age: 12 },
            { id: 17, name: 'Dynama', age: 12 },
            { id: 18, name: 'Dr IQ', age: 12 },
            { id: 19, name: 'Magma', age: 12 },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map