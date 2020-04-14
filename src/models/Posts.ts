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
        `select * from ${table}`,  (err, result, fields) => {
          if ( err ) {
            console.log(err);
            reject(err);
          } else {
            console.log(result);
            resolve(result);
          }
        });
      con.end();
    });
  }
}
