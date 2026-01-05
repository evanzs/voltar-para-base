// define uma variavel com um tipo muito especifo de string
let role: 'admin'|'editor'|'quest' = 'admin'
role = 'super'
role= 'quest'



// 'admin'|'editor'|'quest' = 'admin' então pode ser escrito por ALIAS ou TYPE
type Role3 = 'admin'|'editor'|'quest';

let exemploRole:Role3 = 'admin' 


role = exemploRole//assumem o mesmo tipo de string especificas


// TYPE também pode assumir formas mais complexas como: 

type User = {
    name:string,
    age: number,
    role:Role3
}