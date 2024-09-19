let arr = [1, 2, 9, 845, 56, 24];
let nhapso = +prompt("Nhập số xem có trùng trong array cho trước không");

for (i in arr) {
	if (nhapso == arr[i])
		document.write(
			"Ban da tim thay so " +
				arr[i] +
				" o vi tri " +
				i +
				" trong array. Chuc mung!"
		);
}
