const input = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

let maxCalories = 0;

const elfCalories = input.trim().split('\n\n').map((elf, index) => ({ index: index +  1, calories: elf.split('\n').map(Number).reduce((sum, caloriestList) => sum + caloriestList, 0) }));

for (const elf of elfCalories) {
    if (elf.calories > maxCalories) {
        maxCalories = elf.calories;
        maxCaloriesElf = elf;
    }
}

console.log(`Elf ${maxCaloriesElf.index} is carrying the hiest Calories: ${maxCaloriesElf.calories}`);