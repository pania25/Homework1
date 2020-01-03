var date = new Date();
document.write(date.getDay());
var z = "Иди на работу";
if (date.getDay() > 0 ){
    if (date.getDay() < 6 ){
        console.log ( z + " сегодня " + date.getDay());
    }
}