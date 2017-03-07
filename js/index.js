var input=document.getElementsByClassName("input");
function newText(str) {
  var a=document.createElement("p");
  a.className="alertText";
  a.innerText=str;
  return a;
}
function getLength(str) {
  var a=0;
  for(var i=0;i<str.length;i++) {
    a +=  str.charCodeAt(i) > 255 ? 2 : 1;
  }
  return a;
}

input[0].onfocus=function() {
  this.style.borderColor="#BBB";
  this.style.boxShadow= "1px 3px 5px blue";  
  if(this.parentNode.lastChild.className=="alertText") this.parentNode.removeChild(this.parentNode.lastChild);
  var b= newText("必填，长度为4~16");
  this.parentNode.appendChild(b);
}
//名称输入框焦点时
input[0].onblur=function() {
  this.style.boxShadow="";
  this.parentNode.removeChild(this.parentNode.lastChild);
  var v=this.value;
  var a=getLength(v);
  if(a==0) {
    this.style.borderColor="red";
    var b= newText("名称不能为空");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else if(a<4 || a>16) {
    this.style.borderColor="red";
    var b= newText("名称长度必须在4~16");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else {
    this.style.borderColor="green";
    var b= newText("名称可用");
    b.style.color="green";
    this.parentNode.appendChild(b);
  }
}
//名称输入框失去焦点时验证

input[1].onfocus=function() {
  this.style.borderColor="#BBB";
  this.style.boxShadow= "1px 3px 5px blue";  
  if(this.parentNode.lastChild.className=="alertText") this.parentNode.removeChild(this.parentNode.lastChild);
  var b= newText("必填，长度为8~16");
  this.parentNode.appendChild(b);
}
//密码输入框焦点时
input[1].onblur=function() {
  this.style.boxShadow="";
  this.parentNode.removeChild(this.parentNode.lastChild);
  var v=this.value;
  var a=getLength(v);
  if(a==0) {
    this.style.borderColor="red";
    var b= newText("密码不能为空");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else if(a<8 || a>16) {
    this.style.borderColor="red";
    var b= newText("密码长度必须在8~16");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else {
    this.style.borderColor="green";
    var b= newText("密码可用");
    b.style.color="green";
    this.parentNode.appendChild(b);
  }
}
//密码输入框失去焦点时验证

input[2].onfocus=function() {
  this.style.borderColor="#BBB";
  this.style.boxShadow= "1px 3px 5px blue";  
  if(this.parentNode.lastChild.className=="alertText") this.parentNode.removeChild(this.parentNode.lastChild);
  var b= newText("必填，重复密码");
  this.parentNode.appendChild(b);
}
//密码确认框焦点时
input[2].onblur=function() {
  this.style.boxShadow="";
  this.parentNode.removeChild(this.parentNode.lastChild);
  var v=this.value;
  var a=getLength(v);
  if(a==0) {
    this.style.borderColor="red";
    var b= newText("重复密码不能为空");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else if(v!=input[1].value) {
    this.style.borderColor="red";
    var b= newText("两次密码输入不一致");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else {
    this.style.borderColor="green";
    var b= newText("密码输入一致");
    b.style.color="green";
    this.parentNode.appendChild(b);
  }
}
//密码确认框失去焦点时验证
function isEmail(str) {
  var reg=/^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z\d]+[-.])+[A-Za-z]{2,5}$/; 
  return reg.test(str);
}
//验证邮箱格式的正则表达式
input[3].onfocus=function() {
  this.style.borderColor="#BBB";
  this.style.boxShadow= "1px 3px 5px blue";  
  if(this.parentNode.lastChild.className=="alertText") this.parentNode.removeChild(this.parentNode.lastChild);
  var b= newText("必填，输入您常用的邮箱");
  this.parentNode.appendChild(b);
}
//邮箱框焦点时
input[3].onblur=function() {
  this.style.boxShadow="";
  this.parentNode.removeChild(this.parentNode.lastChild);
  var a=getLength(this.value);
  if(!a) {
    this.style.borderColor="red";
    var b= newText("邮箱不能为空");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else if(!isEmail(this.value)) {
    this.style.borderColor="red";
    var b= newText("请输入正确的邮箱");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else {
    this.style.borderColor="green";
    var b= newText("邮箱格式正确");
    b.style.color="green";
    this.parentNode.appendChild(b);
  }
}
//邮箱框失去焦点时验证
input[4].onfocus=function() {
  this.style.borderColor="#BBB";
  this.style.boxShadow= "1px 3px 5px blue";  
  if(this.parentNode.lastChild.className=="alertText") this.parentNode.removeChild(this.parentNode.lastChild);
  var b= newText("必填，输入您的手机号");
  this.parentNode.appendChild(b);
}
//手机框焦点时
function isPhoneNumber(str) {
  var reg=/^1\d{10}$/;
  return reg.test(str);
}
//手机验证正则表达式
input[4].onblur=function() {
  this.style.boxShadow="";
  this.parentNode.removeChild(this.parentNode.lastChild);
  var a=getLength(this.value);
  if(!a) {
    this.style.borderColor="red";
    var b= newText("手机不能为空");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else if(!isPhoneNumber(this.value)) {
    this.style.borderColor="red";
    var b= newText("请输入正确的手机");
    b.style.color="red";
    this.parentNode.appendChild(b);
  }
  else {
    this.style.borderColor="green";
    var b= newText("手机格式正确");
    b.style.color="green";
    this.parentNode.appendChild(b);
  }
}
//手机框失去焦点时验证

var btn=document.getElementById("shuru");
function isCorrect(arr) {
  for(var i=0;i<arr.length;i++) {
    if(arr[i].style.borderColor!="green") return false;
  }
  return true;
}
//判断是否均提示正确

shuru.onclick=function() {
  if(isCorrect(input))
    alert("注册成功！");
  else alert("信息输入有误，请更正");
}