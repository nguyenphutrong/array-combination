const arrayCombination = options => {
    let sets = [[]];
    options.forEach(option => {
        const new_sets = [];
        option.forEach((label) => {
            new_sets.push(Array.from(sets, set => [...set, label]));
        });
        sets = new_sets.flatMap(set => set);
    });

    return sets
};

module.exports = { arrayCombination };