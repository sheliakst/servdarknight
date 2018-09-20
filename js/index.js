var coordcontent = JSON.parse('[{"OBJECT":"NGC 7831","TYPE":"Galaxy","DEC":"+32 37", "RA":"00 07.3","MAG":"12.8" },{"OBJECT":"NGC 6992","TYPE":"SNREM","DEC":"35.55", "RA":"90.55","MAG":"7" },{"OBJECT":"NGC 2244","TYPE":"OPNCL","DEC":"+04 57", "RA":"06 31.9","MAG":"4.8" }]');







$(document).ready(function () {

  fillgrid(coordcontent);
  $(".trigmod").click(function () {

    $("#myModal").css("display", "block");
    var modtrig = $(this).text();
    if (typeof modtrig == ! 'number') {
      checkgrid(modtrig);
    } else {
      var newmodetrigtrig = modtrig.toString();

      checkgrid(newmodetrigtrig);

      console.log(coordcontent[2])


    }






    //$("#modhead").html(text);

  });

  $(".modal-header").click(function () {
    $("#myModal").css("display", "none");
  });

  var modal = document.getElementById("myModal");

  window.onclick = function (event) {
    if (event.target == modal) {
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

    <tr data-key="${key}">
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










function modalgrid(el) {

  var coordrow = `

  <tr>
      <td class="modalmain">Constellation
      </td>
  </tr>
  <tr>

      <td class="modalmain">Constellation:</td>
  </tr>
  <tr>

      <td class="modalmain">RA:</td>
  </tr>
  <tr>

      <td class="modalmain">Mag:</td>
  </tr>
  <tr>
  <tr>

      <td class="modalmain">SizeMin:</td>
  </tr>
  <tr>

      <td class="modalmain">SizeMax:</td>
  </tr>










  `;


};





















function showthis(el) {
  var toshow = $(el).parent.data("key");
  console.log(toshow);
}


function checkgrid(partrig) {
  for (var i = 0; i < coordcontent.length; i++) {
    for (key in coordcontent[i]) {
      if (coordcontent[i][key].indexOf(partrig) != -1) {
        console.log(coordcontent[i]);
      };
    }
  };

}