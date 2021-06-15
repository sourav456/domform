const division=document.createElement("div")
division.setAttribute("class","container")
document.body.append(division)
const form1=document.createElement("form")
form1.setAttribute("class","formc")
division.append(form1)
const heading=document.createElement('h2')
heading.innerText="FORM";
form1.append(heading);
const division1=document.createElement("div")
division1.setAttribute("class","form-group")
form1.append(division1)
const break1=document.createElement(
    "br");
    division1.append(break1);
const label1=document.createElement(
    "label");
    label1.innerText="Enter Your First Name"
    label1.setAttribute("class","form-label");
    division1.append(label1);
    const break2=document.createElement(
        "br");
        division1.append(break2);
const input1=document.createElement(
    "input");
    input1.setAttribute("type","text");
    input1.setAttribute("class","form-control ");
    division1.append(input1);
    const break3=document.createElement(
    "br");
    division1.append(break3);
    const label2=document.createElement(
        "label");
        label2.innerText="Enter Your Last Name"
        label2.setAttribute("class","form-label");
        division1.append(label2);

        const break4=document.createElement(
            "br");
            division1.append(break4)
    const input2=document.createElement(
    "input");
    input2.setAttribute("type","text");
    input2.setAttribute("class","form-control");
   division1.append(input2);
    const break5=document.createElement(
    "br");
    division1.append(break5);

    const label3=document.createElement(
        "label");
        label3.innerText="Enter Your Address"
        label3.setAttribute("class","form-label");
        division1.append(label3);
        const break6=document.createElement(
            "br");
            division1.append(break6);
    const input3=document.createElement(
        "input");
        input3.setAttribute("type","text");
        input3.setAttribute("class","form-control ");
        division1.append(input3);
        const break7=document.createElement(
        "br");
        division1.append(break7);
        const label4=document.createElement(
            "label");
            label4.innerText="Enter Your pincode"
            label4.setAttribute("class","form-label");
            division1.append(label4);
    
            const break8=document.createElement(
                "br");
                division1.append(break8)
        const input4=document.createElement(
        "input");
        input4.setAttribute("type","text");
        input4.setAttribute("class","form-control");
       division1.append(input4);
        const break9=document.createElement(
        "br");
        division1.append(break9);
//gender
        const label5=document.createElement(
            "label");
            label5.innerText="GENDER"
            label5.setAttribute("class","form-label");
            division1.append(label5);
    
            const break10=document.createElement(
                "br");
                division1.append(break10)

                // const division2=document.createElement("div")
                // division2.setAttribute("class","form-check")
                // form1.append(division2)
                var radio1=document.createElement("input");
                radio1.setAttribute("class","form-check-input");
                radio1.setAttribute("type","radio");
                radio1.setAttribute("name","gender");
                radio1.setAttribute("value","male");
                division1.append(radio1)

                var labelforradio1=document.createElement("label");
                labelforradio1.setAttribute("class","form-check-label");
                labelforradio1.setAttribute("for","male");
                labelforradio1.innerText="MALE";
                division1.append(labelforradio1)
                
                var radio2=document.createElement("input")
                radio2.setAttribute("type","radio");
               radio2.setAttribute("class","form-check-input");
                radio2.setAttribute("name","gender")
                radio2.setAttribute("value","female");
                division1.append(radio2)
                var labelforradio2=document.createElement("label");
                labelforradio2.setAttribute("class","form-check-label");
                labelforradio2.setAttribute("for","female");
                labelforradio2.innerText="FEMALE";
               division1.append(labelforradio2)

               const break11=document.createElement(
                "br");
                division1.append(break11)
//Food
// const div3=document.createElement("div")
// div3.setAttribute("class","form-check");
// form1.append(div3)
const break12=document.createElement(
    "br");
    division1.append(break12)
                const label6=document.createElement(
                    "label");
                    label6.innerText="Food You Like"
                    label6.setAttribute("class","form-label");
                    division1.append(label6);
            
                    const break13=document.createElement(
                        "br");
                        division1.append(break13)

                        var checkbox1=document.createElement("input");
     checkbox1.setAttribute("class","form-check-input")
        checkbox1.setAttribute("type","checkbox");
        checkbox1.setAttribute("name","food");
        checkbox1.setAttribute("value","BIRYANI");
    division1.append(checkbox1)
    var labelforcheckbox1=document.createElement("label");
    labelforcheckbox1.setAttribute("class","form-check-label")
    labelforcheckbox1.setAttribute("for","BIRYANI");
    labelforcheckbox1.innerText="BIRYANI";
    division1.append(labelforcheckbox1)

    var checkbox2=document.createElement("input");
         checkbox2.setAttribute("class","form-check-input")
            checkbox2.setAttribute("type","checkbox");
            checkbox2.setAttribute("name","food");
            checkbox2.setAttribute("value","BURGER");
        division1.append(checkbox2)
        var labelforcheckbox2=document.createElement("label");
        labelforcheckbox2.setAttribute("class","form-check-label")
        labelforcheckbox2.setAttribute("for","BURGER");
        labelforcheckbox2.innerText="BURGER";
        division1.append(labelforcheckbox2)

var checkbox3=document.createElement("input");
checkbox3.setAttribute("class","form-check-input")
        checkbox3.setAttribute("type","checkbox");
        checkbox3.setAttribute("name","food");
        checkbox3.setAttribute("value","PASTA");
    division1.append(checkbox3)
    var labelforcheckbox3=document.createElement("label");
    labelforcheckbox3.setAttribute("class","form-check-label")
    labelforcheckbox3.setAttribute("for","PASTA");
    labelforcheckbox3.innerText="PASTA";
    division1.append(labelforcheckbox3)

    var checkbox4=document.createElement("input");
checkbox4.setAttribute("class","form-check-input")
        checkbox4.setAttribute("type","checkbox");
        checkbox4.setAttribute("name","food");
        checkbox4.setAttribute("value","NOODLES");
    division1.append(checkbox4)
    var labelforcheckbox4=document.createElement("label");
    labelforcheckbox4.setAttribute("class","form-check-label")
    labelforcheckbox4.setAttribute("for","NOODLES");
    labelforcheckbox4.innerText="NOODLES";
    division1.append(labelforcheckbox4)
    var checkbox5=document.createElement("input");
checkbox5.setAttribute("class","form-check-input")
        checkbox5.setAttribute("type","checkbox");
        checkbox5.setAttribute("name","food");
        checkbox5.setAttribute("value","CHICKEN CURRY");
    division1.append(checkbox5)
    var labelforcheckbox5=document.createElement("label");
    labelforcheckbox5.setAttribute("class","form-check-label")
    labelforcheckbox5.setAttribute("for","CHICKEN CURRY");
    labelforcheckbox5.innerText="CHICKEN CURRY";
    division1.append(labelforcheckbox5)
    
    const break14=document.createElement(
    "br");
    division1.append(break14);

    const label7=document.createElement(
        "label");
        label7.innerText="Enter Your State Name"
        label7.setAttribute("class","form-label");
        division1.append(label7);
        const break15=document.createElement(
            "br");
            division1.append(break15);
    const input5=document.createElement(
        "input");
        input5.setAttribute("type","text");
        input5.setAttribute("class","form-control ");
        division1.append(input5);
        const break16=document.createElement(
        "br");
        division1.append(break16);
        const label8=document.createElement(
            "label");
            label8.innerText="Enter Your Country Name"
            label8.setAttribute("class","form-label");
            division1.append(label8);
    
            const break17=document.createElement(
                "br");
                division1.append(break17)
        const input6=document.createElement(
        "input");
        input6.setAttribute("type","text");
        input6.setAttribute("class","form-control");
       division1.append(input6);
        const break18=document.createElement(
        "br");
        division1.append(break18);

    const button1=document.createElement("input");
    button1.setAttribute("type","submit");
    //button1.setAttribute("class","btn btn-primary")
    button1.addEventListener("click",displaydetails);
    button1.innerText="Submit";
    division1.append(button1);
    
    var Table1=document.createElement("TBODY");
      var Tablerow = document.createElement("tr");
      var Tabledata1= document.createElement("th");
    var Tabledata2=document.createElement("th");
    var Tabledata3=document.createElement("th");
    var Tabledata4=document.createElement("th");
    var Tabledata5=document.createElement("th");
    var Tabledata6=document.createElement("th");
    var Tabledata7=document.createElement("th");
    var Tabledata8=document.createElement("th");
    Tabledata1.innerHTML = "First Name";
    Tabledata2.innerHTML = "Last Name";
    Tabledata3.innerHTML = "Address";
    Tabledata4.innerHTML = "Pincode";
    Tabledata5.innerHTML = "Gender";
    Tabledata6.innerHTML = "Food";
    Tabledata7.innerHTML = "State";
    Tabledata8.innerHTML = "Country";
Tablerow.appendChild(Tabledata1);
Tablerow.appendChild(Tabledata2);
Tablerow.appendChild(Tabledata3);
Tablerow.appendChild(Tabledata4);
Tablerow.appendChild(Tabledata5);
Tablerow.appendChild(Tabledata6);
Tablerow.appendChild(Tabledata7);
Tablerow.appendChild(Tabledata8);
      Table1.appendChild(Tablerow);
      document.body.appendChild(Table1);
    
      
var row=1     
    function displaydetails(){

      var fname=input1.value;
      var lname=input2.value;
      var address=input3.value;
      var pin=input4.value;
      var state=input5.value;
      var count=input6.value;
      var selection = document.querySelector( 'input[type=radio][name=gender]:checked');
     var sex = selection.value;
      // var check=document.querySelectorAll('input[type=checkbox][name=food]:checked');
      // var num4=check.value;
      var d=[]
       var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
      for (var checkbox of markedCheckbox) {  
        d.push(checkbox.value);  
      } 
      var check=d.join(",");
      
      
      if(!fname || !lname ||!address ||!pin ||!state ||!count ||!sex ||!check){
        alert("pLease fill all the boxes");
        return;
      }
     var newRow=Table1.insertRow(row);
      var cell1 = newRow.insertCell(0);
      var cell2=newRow.insertCell(1);
      var cell3=newRow.insertCell(2);
      var cell4=newRow.insertCell(3);
      var cell5=newRow.insertCell(4);
      var cell6=newRow.insertCell(5);
      var cell7=newRow.insertCell(6);
      var cell8=newRow.insertCell(7);

      
      cell1.innerHTML=fname;
      cell2.innerHTML=lname;
      cell3.innerHTML=address;
      cell4.innerHTML=pin;
      cell5.innerHTML=sex;
      cell6.innerHTML=check;
      cell7.innerHTML=state;
      cell8.innerHTML=count;

      
      
     
      row++
      
    }
    // function reset(){
    //   input1.value=" ";
    //   input2.value=" ";
    //  document.querySelector( 'input[type=radio][name=gender]:checked').checked=false;
    //   document.querySelectorAll('input[type="checkbox"][name=food]:checked').checked=false;
    //   input3.value=" ";
    //   input4.value=" ";
    //   input5.value=" ";
    //   input6.value=" ";
    //   }
// const input1=document.createElement(
// "input");
// input1.setAttribute("type","number");
// input1.setAttribute("class","input1");
// document.body.append(input1);
// const brea=document.createElement(
// "br");
// document.body.append(brea);
// const input2=document.createElement(
// "input");
// input2.setAttribute("type","number");
// input2.setAttribute("class","input2");
// document.body.append(input2);
// const brea1=document.createElement(
// "br");
// document.body.append(brea1);
//  var checkbox1=document.createElement("input");
//     checkbox1.setAttribute("type","checkbox");
//     checkbox1.setAttribute("name","food");
//     checkbox1.setAttribute("value","MOMO");
// document.body.append(checkbox1)
// var labelforcheckbox1=document.createElement("label");
// labelforcheckbox1.setAttribute("for","MOMO");
// labelforcheckbox1.innerText="MOMO";
// document.body.append(labelforcheckbox1)

// var checkbox2=document.createElement("input");
//     checkbox2.setAttribute("type","checkbox");
//     checkbox2.setAttribute("name","food");
//     checkbox2.setAttribute("value","chowmein");
// document.body.append(checkbox2)
// var labelforcheckbox2=document.createElement("label");
// labelforcheckbox2.setAttribute("for","chowmein");
// labelforcheckbox2.innerText="chowmein";
// document.body.append(labelforcheckbox2)
// var checkbox3=document.createElement("input");
//     checkbox3.setAttribute("type","checkbox");
//     checkbox3.setAttribute("name","food");
//     checkbox3.setAttribute("value","thukpa");
// document.body.append(checkbox3)
// var labelforcheckbox3=document.createElement("label");
// labelforcheckbox3.setAttribute("for","thukpa");
// labelforcheckbox3.innerText="thukpa";
// document.body.append(labelforcheckbox3);
// const brea3=document.createElement(
// "br");
// document.body.append(brea3);
// var radio1=document.createElement("input");
// radio1.setAttribute("type","radio");
// radio1.setAttribute("name","gender");
// radio1.setAttribute("value","male");
// document.body.append(radio1)
// var labelforradio1=document.createElement("label");
// labelforradio1.setAttribute("for","male");
// labelforradio1.innerText="MALE";
// document.body.append(labelforradio1)

// var radio2=document.createElement("input");
// radio2.setAttribute("type","radio");
// radio2.setAttribute("name","gender");
// radio2.setAttribute("value","Female");
// document.body.append(radio2)
// var labelforradio2=document.createElement("label");
// labelforradio2.setAttribute("for","male");
// labelforradio2.innerText="FEMALE";
// document.body.append(labelforradio2)
// const brea2=document.createElement(
// "br");
// document.body.append(brea2);
// const button1=document.createElement(
// "button");
// button1.innerText="Submit";
// document.body.append(button1);
// var x =document.createElement("TBODY");
//   var y = document.createElement("Tr");
//   var z = document.createElement("Th");
// var s=document.createElement("Th");
// var a =document.createElement("Th");
// var q=document.createElement("Th");
//   z.innerHTML = "Input1";
// s.innerHTML='Input2';
// a.innerHTML="Input3";
// q.innerHTML="Input4"
// y.appendChild(z);
//  y.appendChild(s);
// y.appendChild(a);
// y.appendChild(q);
//   x.appendChild(y);
//   document.body.appendChild(x);


// button1.addEventListener("click",displaydetails);


//  var row=1;
// function displaydetails(){
//   var num1=input1.value;
//   var num2=input2.value;
//   var selection = document.querySelector( 'input[type=radio][name=gender]:checked');
//  var num3 = selection.value;
//   // var check=document.querySelectorAll('input[type=checkbox][name=food]:checked');
//   // var num4=check.value;
//   var d=[]
//    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
//   for (var checkbox of markedCheckbox) {  
//     d.push(checkbox.value);  
//   } 
//   var check=d.join(",");
  
  
//   if(!num1 || !num2 ||!num3){
//     alert("pLease fill all the boxes");
//     return;
//   }
//  var newRow=x.insertRow(row);
//   var cell1 = newRow.insertCell(0);
//   var cell2=newRow.insertCell(1);
//   var cell3=newRow.insertCell(2);
//   var cell4=newRow.insertCell(3);
//   var cell5=newRow.insertCell(4);
  
//   cell1.innerHTML=num1;
//   cell2.innerHTML=num2;
//   cell3.innerHTML=num3;
//   cell4.innerHTML=check;
  
  
//   reset()
//   row++
  
// }
// function reset(){
//   input1.value=" ";
//   input2.value=" ";
//  document.querySelector( 'input[type=radio][name=gender]:checked').checked=false;
//   document.querySelectorAll('input[type="checkbox"][name=food]:checked').checked=false;
  
  
// }

