import sax from './index'

const res = sax(`
<id>123</id>
<code>MYCODE</code>
<date>2021-03-25T00:00:00</date>
<number>10</number>`)

console.log(res)