let count = 0;
let value = 0;

const progress = document.getElementById("progress");
const btns = document.querySelectorAll(".btn");
const number = document.querySelector("#value");

const randomColor = () => {
	var s = Math.round(0xffffff * Math.random()).toString(16);
	var m = "000000";
	var sm = m.substring(0, 6 - s.length);
	var color = "#" + sm + s;
	return color;
};

const color = btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const styles = e.currentTarget.classList;

		if (styles.contains("decrease")) {
			if (count > 0) {
				count--;
				value--;
				progress.style.width = value * 10 + "%";
			}
		} else if (styles.contains("increase")) {
			count++;
			value++;
			progress.style.width = value * 10 + "%";

			if (value % 10 === 0) {
				progress.style.width = "0";
				value = 0;
				progress.style.backgroundColor = randomColor();
			}
		} else {
			count = 0;
			value = 0;
			progress.style.width = value * 10 + "%";
		}

		number.textContent = "Count: " + count;
	});
});
