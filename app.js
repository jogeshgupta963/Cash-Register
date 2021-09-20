var billAmt = document.querySelector("#bill-amount")
var cashGiven = document.querySelector("#cash-given")
var checkButton = document.querySelector("#check-button")
var changeCash=document.querySelector("#change-cash")
var noOfNotes=document.querySelectorAll(".no-of-notes")
var numb=document.querySelector(".numb")
var arr=[2000,500,100,20,10,1]

checkButton.addEventListener("click", function main()
{
    
    if(billAmt.value > 0)
    {

        if(cashGiven.value >= billAmt.value)
        {
            var amtToBeGiven =cashGiven.value - billAmt.value;
            changeAmount(amtToBeGiven)
        }
        else if(cashGiven.value < billAmt.value)
        {
            alert("Cash Given is less than bill")
        }
    }
    else{
        alert("Enter bill amount greater than zero")
    }
}
)
function changeAmount(change)
{
    changeCash.innerText = change;

    notes(change);
}
function notes(change)
{
    
    for(var i=0;i<6;i++)
    {
        
        const numberOfNotes = Math.trunc(change/arr[i])
        change=change%arr[i];
        
        if(numberOfNotes != 0){
        noOfNotes[i].innerText = numberOfNotes;
        }
    }
}
