var Cat = (function() {
    var allCats = {
        count: 0,
        totalWeight: 0,
        avgWeight: 0
    }

    function Cat(name, weight) {
        if (!name || !weight) {
            throw new Error('Both `name` and `weight` must be specified');
        }
        allCats.count++;
        this.name = name;

        Object.defineProperty(this, 'weight', {
            get: function() {
                return this._weight || 0;
            },
            set: function(val) {
                allCats.totalWeight = allCats.totalWeight - this.weight + val;
                allCats.avgWeight = allCats.totalWeight / allCats.count;
                return this._weight = val;
            }
        });

        this.weight = weight;
    }

    Cat.averageWeight = function() {
        return allCats.avgWeight;
    }

    return Cat;
}());