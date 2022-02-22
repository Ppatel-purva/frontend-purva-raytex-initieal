function FillAddressInput()
{
   let checkBox= document.getElementById("checkBox");
   let pAddress = document.getElementById("pAddress");
   let curAddress = document.getElementById("curAddress");
   if (checkBox.checked == true)
   {
    let pAddressValue = pAddress.value;
   curAddress.value = pAddressValue;
}
else
{
curAddress.value = "";
}
}