/*
 * A class that handles the web sql database
 */

class TodoWebSql {

    static dbInit() {
        return openDatabase("todo", 1.0, "database for the todo app", 10*1024*1024)  
    }

    static query(db, queryString) {

        db.transaction(function(tx) {
            tx.executeSql(queryString)
        })
    
    }

    static selectQuery(db, queryString) {
        db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM items', [], function (tx, results) { 
               var len = results.rows.length, i; 
           
               for (i = 0; i < len; i++) { 
                  alert(results.rows.item(i).log ); 
               } 
           
            }, null); 
         });
    }

}

export default TodoWebSql;