let arr1 = [1,2,4,7,3,6];
let arr2 = [12,54,3,0,11,7];

let interArr = intersection(arr1, arr2);
console.log(`Intersection of given Arrays is ${interArr}`);

let unionArr = union(arr1, arr2);
console.log(`Union of given Arrays is ${unionArr}`);

function intersection(arr1: Array<number>, arr2: Array<number>): Array<number> {
    let interSectionArray = arr1.filter(num => arr2.includes(num));
    return interSectionArray;
}

function union(arr1: Array<number>, arr2: Array<number>): Array<number> {
    let unionArray = Array.from(new Set([...arr1, ...arr2]));
    return unionArray;
}