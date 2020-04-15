import mysql from 'mysql';

const table = 'test_table';

module.exports = {
  getPost: ():Promise<any> => {
    return new Promise ((resolve, reject) => {
      const con = mysql.createConnection({
        host: 'localhost',
        database: 'NodeTest',
        user: 'root',
        password: 'Mop_knji009?'
      });
      con.connect(function(err) {
        if (err) throw err;
        console.log('Connected');
      });
      con.query(
        `SELECT * FROM ${table} ORDER BY posttime DESC LIMIT 15`,  (err, result, fields) => {
          if ( err ) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      con.end();
    });
  },
  submitPost: (data):Promise<any> => {
    return new Promise ((resolve, reject) => {
      if(data.name === ''){ data.name = '匿名' }
      console.log(data);
      const con = mysql.createConnection({
        host: 'localhost',
        database: 'NodeTest',
        user: 'root',
        password: 'Mop_knji009?'
      });
      con.connect(function(err) {
        if (err) throw err;
        console.log('Connected');
      });
      con.query(
        `INSERT INTO ${table} set ?`, data, (err, result, fields) => {
          if ( err ) {
            reject(err);
          } else {
            resolve();
          }
        });
      con.end();
    });
  }
}
