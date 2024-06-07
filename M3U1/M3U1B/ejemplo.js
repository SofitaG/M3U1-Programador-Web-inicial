const moment = require('moment');
moment.locale('es');
console.log('Naci ' + moment('14/10/1981','DD/MM/YYYY').fromNow());