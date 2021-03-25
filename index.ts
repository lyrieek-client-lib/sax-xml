const row = `
  <id>123</id>
  <code>MYCODE</code>
  <date>2021-03-25T00:00:00</date>
  <number>120</number>`

let index = row.indexOf('<')
const data = Object.create(null);
do {
	const searchPoint = index + 1;
	index = row.indexOf('<', searchPoint)
	if (row.substr(searchPoint, 1) === '/') {
		continue;
	}
	const rest = row.substring(searchPoint);
	const endPoint = rest.indexOf('>')
	data[rest.substring(0, endPoint)] = rest.substring(endPoint + 1, rest.indexOf('</', endPoint));
} while (index !== -1);
console.log(data);