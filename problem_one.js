const string='listen'
const candidates=['fire','water','talk','inlets','light'];
function data(x,y){
    let num1=[];
    for(let i=0;i<y.length; i++){
        for(j=0;j<y[i].length; j++){
            if(y[i][j] === x[i]){
                num1.push(y[i])
            }
        }
    }
    return num1;
}
console.log(data(string,candidates));