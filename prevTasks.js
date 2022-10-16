// q 2.10

randValues = ["Банан", 3, "Апельсин", 20, "Вишня"];
randValues.sort();
randValues.sort(function(a,b) {
    return a - b;
});

console.log(randValues);

// q 3.2
const goods = {
    title: "Самокат", 
    price: 6000,
    good_id: 1
}
let arr = [];
arr = [...Object.keys(goods)]; // => [] = ["title", "price", "goods"]
for (let i = 0, cnt = arr.length; i < cnt; i++) {
    arr.push(goods[arr[i]]);
    // console.log(arr, arr.length);
}

// v2
arr = [];
arr = [...Object.keys(goods), ...Object.values(goods)];
console.log(arr);

// q 4.2
let input = {
    id: 1,
    value: "Добрый вечер",
    firstName: "Григорий",
    lastName: "Стрельников" 
}
function sayHi() {
    console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
}

sayHi.call(input);

// v2
sayHi = sayHi.bind(input);
sayHi();