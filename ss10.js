let array = [1, "hello", 3.14, 42, "world", true, 10];
let element = [];
// Kiểm tra mảng
for( i = 0; i <= array.length - 1; i = i + 1){
    if (Number.isInteger(array[i])){
        element.push(array[i]);
    }
}
// điều kiện để in
if (element.length > 0) {
    console.log("Các số nguyên", element);
}else{
    console.log("không tồn tại");
}

// // // BT 2

let array = [10, 30, 50, 70, 90];
let n = +prompt("Nhập giá trị bất kỳ");
//tìm kiếm giá trị trong mảng(indexOf)

let check = array.indexOf(n);

if (check !== -1) {
  console.log(
    "Giá trị có trong mảng: " + n,
    "Vị trí giá trị trong mảng: " + check
  );
} else {
  console.log("Không tồn tại");
}

// // // BT 3

let array = [10, 30, 50, 70, 90, 10, 30, 50, 70, 90];
let n = +prompt("Nhập giá trị");

// Biến đếm số lần xuất hiện trong mảng (count = 0;)
let count = 0;

// Lặp qua từng phần tử trong mảng và đếm số lần xuất hiện
for (i = 0; i <= array.length - 1; i = i + 1) {
  if (array[i] === n) {
    count = count + 1;
  }
}

if (count > 0) {
  console.log("Giá trị nhập: " + n, "Số lần xuất hiện: " + count);
} else {
  console.log("Giá trị nhập không tồn tại");
}

// // // BT 4

let a = +prompt("Nhập số nguyên dương a: ");
let b = +prompt("Nhập số nguyên dương b: ");
//mảng chưa kết quả
let array = [];
// dk a và b là số nguyên dương
if (Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0) {
  // các số chia hết cho b, trong khoảng 1 - a
  for (i = 1; i <= a; i = i + 1) {
    if (i % b === 0) {
      array.push(i);
    }
  }
  // các số chia hết cho a, trong khoảng 1 - b
  for (i = 1; i <= b; i = i + 1) {
    if (i % a === 0) {
      array.push(i);
    }
  }
  console.log(array);
} else {
  console.log("Vui lòng nhập số nguyên dương hợp lệ.");
}