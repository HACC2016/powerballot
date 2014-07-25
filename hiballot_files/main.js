$.get('candidate-template.mst', function(template) {
  Mustache.parse(template);   // optional, speeds up future uses
  window.candidate_template = template;
});

$(document).ready(function() {
  var candidate_data = {};

  $('.cand-choice').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $candidateModal = $('#candidateModal');
    var reg_no = $this.data('reg-no');
    var candidate_ballot_name = $this.text().replace(/\([DRLGIN]\)/, "").trim();
    var url = "http://services2.arcgis.com/tuFQUQg1xd48W6M5/arcgis/rest/services/powerballot_test4/FeatureServer/2/query"
    //var params = { where: "Ballot_name='" + candidate_ballot_name + "'", outFields: '*', f: 'pjson' };
    var params = { where: "CC_Reg_No='" + reg_no + "'", outFields: '*', f: 'pjson' };
    $.get(url, params, function(data) {
      console.log("got data " + data);
      // TODO: Can do error checking here? For empty-ish data?
      var features = parse_server_response(data);

      var rendered = Mustache.render(window.candidate_template, features);

      $candidateModal.find('.modal-title').text(data.name_party);
      $candidateModal.find('.modal-body').html(rendered);
      $candidateModal.modal();
    });
  });

});

function parse_server_response(json_str) {
  var features = JSON.parse(json_str).features;
  if (features.length == 0) {
    throw "Invalid response - Unable to load candidate";
  }
  var data = features[0].attributes;
  // name -> name_party or ballot_name
  // party -> Party
  // incumbent -> incumbent_text
  // photo_with -> add the 'px'
  //    fec_url
  //    TODO: Where does fec_url go?
  // volunteer
  // pb_status?
  // party_text

  // Note: if we wanted to have text "unknown" or "missing" for links like LinkedIn we would do the processing here
  return data;
}
