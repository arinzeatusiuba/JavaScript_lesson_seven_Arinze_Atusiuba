function getFormValue() {
    const hisFirstName = document.getElementById("form1").fname.value;
    const hisLastName = document.getElementById("form1").lname.value;

    let fullName = `Your name is ${hisFirstName} ${hisLastName}`;

    const para = document.createElement("p");
    const node = document.createTextNode(fullName);

    para.appendChild(node);

    const appendElement = document.getElementById("append");
    appendElement.innerHTML = ''; 
    appendElement.appendChild(para);

    alert(fullName);
}
