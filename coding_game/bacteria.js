function solve(families, sizes) {
    let changed = true;

    while (changed) {
        changed = false;
        for (let i = 0; i < families.length - 1; i++) {
            if (families[i] !== families[i + 1] && sizes[i] > sizes[i + 1]) {
                sizes[i] += sizes[i + 1];
                families.splice(i + 1, 1);
                sizes.splice(i + 1, 1);
                changed = true;
                break;
            }
        }
    }

    let maxIndex = 0;
    let maxSize = sizes[0];

    for (let i = 1; i < sizes.length; i++) {
        if (sizes[i] > maxSize) {
            maxSize = sizes[i];
            maxIndex = i;
        }
    }

    return families[maxIndex] + ' ' + sizes[maxIndex];
}
