clear();
const n = prompt("Number of sides:");
rt(90);
for (let i = 3; i <= n; i++) {
  for (let j = 0; j < i;j++) {
	fd(50);
	lt(360/i);
	}
}