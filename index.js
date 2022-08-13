function edit(){
	var inputData = document.getElementById("inputData");
  	var genderData = document.getElementById("genderData");
    var dateData = document.getElementById("dateData");
  	


  var updateData = document.getElementById("updateData");
  var editData = document.getElementById("editData");
  
  inputData.style.display = "block";
    genData.style.display = "block";
    daData.style.display = "block";


  editData.style.display = "none";
  updateData.style.display = "block";
  

}

function update(){
	var inputData = document.getElementById("inputData");
  	var genderData = document.getElementById("genderData");
      var dateData = document.getElementById("dateData");


  
  var updateData = document.getElementById("updateData");
  var editData = document.getElementById("editData");
  var textData = document.getElementById("textData");
    var genderData = document.getElementById("genderData");
    var dateData = document.getElementById("dateData");


  
 var inputDataValue = document.getElementById("inputData").value;
  var genDataValue = document.getElementById("genData").value;
  var daDataValue = document.getElementById("daData").value;


  
  textData.innerHTML = inputDataValue;
   genderData .innerHTML = genDataValue;
   dateData .innerHTML = daDataValue;


   
   
    inputData.style.display = "none";

  genData.style.display = "none";
  daData.style.display = "none";

  editData.style.display = "block";
  updateData.style.display = "none";
  

}