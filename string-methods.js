function checkPassword(a){
if(a.length>=8){
    if(a.includes('!'||'@'||'#'||'$'||'%'||'^'||'&'||'*')){
        return 'Strong Password'
    }
}else{
    return 'Not Strong method'
}


}

console.log(checkPassword('manoj123'))