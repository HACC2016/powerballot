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
      //console.log("got data " + data);
      //console.log("got id: " + JSON.parse(data).features[0].attributes.Candidate_ID);
      // TODO: Can do error checking here? For empty-ish data?
      var features;
      try {
        features = parse_server_response(data);
      } catch(err) {
        console.err("Received err: " + err);
      }

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

  var candidate_links = {
    cand_website_url: "Candidate Website",
    cand_twitter_url: "Twitter",
    cand_facebook_url: "Facebook",
    cand_linked: "LinkedIn",
    cand_email: "Email"
  };
  data.candidate_links = prepare_links(candidate_links, data);

  var campaign_finance_links = {
    csc_standard_url: "Standard Reports",
    csc_special_url: "Special Reports"
  };
  data.campaign_finance_links = prepare_links(campaign_finance_links, data);

  var other_links = {
      gov_website_url: "Official government webpage",
      lwv_website_url: "League of Women Voters of Hawaii",
      ftm_website_url: "FollowTheMoney",
      pvs_website_url: "Project Vote Smart",
      bp_website_url: "Ballotpedia",
      wp_website_url: "Wikipedia",
      cb_website_url: "Civil Beat Q&A"
  };
  if (data.office === "Governor") {
    other_links.fec_url = "FEC";
  }
  data.other_links = prepare_links(other_links, data);

  return data;
}

function prepare_links(links, data) {
  response = [];
  $.each(links, function(key,val) {
    if (data[key].length == 0) {
      response.push({url: '', text: val + ' - unknown'});
    } else {
      response.push({url: data[key], text: val});
    }
    delete data[key];
  });
  return response;
}
