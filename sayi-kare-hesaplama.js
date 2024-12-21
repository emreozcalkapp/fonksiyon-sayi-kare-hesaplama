// Bir dizideki sayıların karesini alıp yeni bir dizi döndüren bir fonksiyon yazın.

// Adımlar:

// 1. `map` kullanılarak dizinin her elemanı işlenir.

// 2. Her eleman kendisiyle çarpılır.

// 3. Yeni dizi döndürülür.

// 4.Oluşan dizi consola yazdırın

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

const calculation = numbers.map(number => number * number);

console.log(calculation);