var coordcontent = JSON.parse('[{"OBJECT":"NGC 6992","TYPE":"SNREM","DEC":"+31 04", "RA":"20 56.2","MAG":"7","OTHER":"Ced 182B","CONST":"CYG" },{"OBJECT":"NGC 7000","TYPE":"BRTNB","DEC":"+44 12", "RA":"21 01.8","MAG":"4","OTHER":"LBN 373","CONST":"CYG" },{"OBJECT":"NGC 2244","TYPE":"OPNCL","DEC":"+04 57", "RA":"06 31.9","MAG":"4.8","OTHER":"NGC 2239","CONST":"MON" }]');
var toshow = "";

$(document).ready(function () {

  fillgrid(coordcontent);



  $(".trigmod").click(function () {

    $("#myModal").css("display", "block");

  });


  $(".modal-header").click(function () {
    $("#myModal").css("display", "none");
  });


  var modal = document.getElementById("myModal");


  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };


});


function fillgrid(el) {

  var coordrow = `
<thead class="thead-dark">
<tr>
<th >#</th>
<th >ID</th>
<th >Type</th>
<th >DEC</th>
<th >RA</th>
<th >Size</th>
</tr>
</thead>`;


  $.each(el, function (key, value) {



    coordrow += `

    <tr class="tabrow" data-key="${key}" onclick="showkey(this)">
    <td class="trigmod">${key}</td>

    <td class="trigmod">${value.OBJECT}</td>
    <td class="trigmod">${value.TYPE}</td>
    <td class="trigmod">${value.DEC}</20x15td>
    <td class="trigmod">${value.RA}</td>  
    <td class="trigmod">${value.MAG}</20x15td>

    </tr>`;

    $(".grid").html(coordrow);

  });
};




function showkey(el) {
  toshow = $(el).data("key");
  console.log(toshow);



  $.each(coordcontent, function (key, value) {


    if (key === toshow) {

      console.log(`${value.OBJECT}`);
      console.log(`${value.TYPE}`);
      console.log(`${value.RA}`);
      console.log(`${value.DEC}`);



      $("#modhead").html(`${value.OBJECT}`);


      var modaltable = `
      
        <tr>
            <td class="modalmain">Constellation
            </td>
            <td>${value.CONST}</td>
        </tr>
        <tr>
      
            <td class="modalmain">Other ID:</td>
            <td>${value.OTHER}</td>

        </tr>
        <tr>
      
            <td class="modalmain">RA:</td>
            <td>${value.RA}</td>

        </tr>
        <tr>
      
            <td class="modalmain">DEC:</td>
            <td>${value.DEC}</td>

        </tr>
        <tr>
        <tr>
      
            <td class="modalmain">Type:</td>
            <td>${value.TYPE}</td>

        </tr>
      
      
        `;

      $(".newmodal-body table").html(modaltable);

      var ralink = `${value.RA}`;

      var declink = `${value.DEC}`;
      declink = declink.substr(1);
      declink = declink.replace(/\s+/g, '');
      ralink = ralink.replace(/\s+/g, '');
      ralink = parseInt(ralink, 10);
      declink = parseInt(declink, 10);

     var subralink = ralink % 100;
      var subdeclink = declink % 100;

      ralink = (ralink - subralink) / 100;
      declink = (declink - subdeclink) / 100;




console.log(subdeclink)
console.log(subralink)




      var photolink = "https://skyview.gsfc.nasa.gov/current/cgi/runquery.pl?Survey=DSS&position="+ralink+"%20" +subralink+",+"+declink+"%20"+subdeclink+"&size=3.6762054507338,2.4500828092243&Scaling=Log&Return=jpg&Pixels=200,120"


      photolink = photolink.toString();


      console.log(photolink);


      $(".sidephoto  img").attr("src", photolink);





    }


  });















}

/*
function checkgrid(partrig) {
  for (var i = 0; i < coordcontent.length; i++) {
    for (key in coordcontent[i]) {
      if (coordcontent[i][key].indexOf(partrig) != -1) {
        console.log(coordcontent[i]);
      };
    }
  };

}*/