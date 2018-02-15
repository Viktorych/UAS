var shortid = require('shortid');
//shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
shortid.characters('0123456789абвгдежзиклмнопрстуфхцчшэюяАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ');
shortid.seed(1);

console.log(shortid.generate(), shortid.valueOf());