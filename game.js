var tries=0;
var show=document.getElementById("show");

function check()
{
    tries++;
    var user_num=document.getElementById("number");
    var random_num=Math.floor(((Math.random()*100)+1));
  
    if(user_num.value>100 || user_num.value<1)
    {
        alert("Enter any number between 1 to 100");
        user_num.value="";
        user_num.focus();
        return false;
    }

    if(user_num.value==random_num || tries==10)
    {
         console.log(random_num); 
         show.innerHTML=`
         <h2>Congratulation Your lottery number matched</h2>
         <button class="btn btn-primary" onclick="return newgame()">New Game</button>`
         tries=0;
    }
    else
    {
        show.innerHTML=`
        <h2>Sorry your number doesnot match with ${random_num}</h2>
        <h2>Try Again!!!</h2>
        `
        user_num.value="";
        user_num.focus();
        console.log("Ashish")
    }

}

function newgame()
{
    location.reload();
}