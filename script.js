function func(){
    var date1 = document.getElementById("date1").value;
    var date2 = document.getElementById("date2").value;
    var difference = new Date(date2).getTime() - new Date(date1).getTime();
    var days = Math.floor(difference/(1000*60*60*24));
    document.getElementById("display").innerHTML="<br>Difference between dates is "+days+" days ";}