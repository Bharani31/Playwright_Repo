var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [1, 2, 4, 7, 3, 6];
var arr2 = [12, 54, 3, 0, 11, 7];
var interArr = intersection(arr1, arr2);
console.log("Intersection of given Arrays is ".concat(interArr));
var unionArr = union(arr1, arr2);
console.log("Union of given Arrays is ".concat(unionArr));
function intersection(arr1, arr2) {
    var interSectionArray = arr1.filter(function (num) { return arr2.includes(num); });
    return interSectionArray;
}
function union(arr1, arr2) {
    var unionArray = Array.from(new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)));
    return unionArray;
}
