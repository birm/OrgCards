function view(data){
  // get rules
  var rulesReq = new XMLHttpRequest();
  function listner(){
    var output = run(data, JSON.parse(this.responseText));
    console.log("view listener");
    document.getElementById("output").innerHTML = output;
  }
  rulesReq.addEventListener("load", listner);
  rulesReq.open("GET", "view_rules.json");
  rulesReq.send();
}
