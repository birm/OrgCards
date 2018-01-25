// read the file
// TODO (later) make it such that output is independent of key names
function get_model(){
  // get data
  var dataReq = new XMLHttpRequest();
  function listner(){
    console.log("model listener");
    viewmodel(JSON.parse(this.responseText));
  }
  dataReq.addEventListener("load", listner);
  dataReq.open("GET", "sample.json");
  dataReq.send();
}

// callback for when model read
