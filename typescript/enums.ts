enum Role {
    Admin, // 0
    Editor, // 1
    Quest,// 2
}

// aparece sem erro, assumindo a posição 0 = Admin
let userRole: Role = 0;
userRole = Role.Editor;


// Outra Opção é setando os valores, o motor se adapta sozinho

enum Role2 {
    Admin = 2,
    Editor, // 3
    QUest,// 4
}

//Vai dar erro pq começa com 2 
let userRole2:Role2 = 0;
