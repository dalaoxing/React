import Mock from 'mockjs';
import { data } from '@/data/city.json';

new Mock.mock('/data/home', {
    'list|15-20': [{
        'pic': '@image(100x100)',
        'cname': "@cname",
        'content': '@cword(10)'
    }]
})

let obj = {};
data.forEach(it => {
    let tit = it.Spelling.slice(0, 1);
    if (obj[tit] === undefined) {
        obj[tit] = [];
        obj[tit].push(it)
    } else {
        obj[tit].push(it)
    }
})

new Mock.mock('/data/city', obj)