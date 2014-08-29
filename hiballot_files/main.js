// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53294565-1', 'auto');
ga('send', 'pageview');

$.get('candidate-template.mst', function(template) {
  Mustache.parse(template);   // optional, speeds up future uses
  window.candidate_template = template;
});

$(document).ready(function() {
  $('.cand-choice').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $candidateModal = $('#candidateModal');
    var cand_id = $this.data('cand-id');
    var cand_name = $this.text().trim();
    ga('send', 'event', 'button', 'click', cand_name, 1);
    var url = "http://services2.arcgis.com/tuFQUQg1xd48W6M5/arcgis/rest/services/HI_2014_primary_candidates/FeatureServer/1/query";
    var params = { where: "Candidate_ID='" + cand_id + "'", outFields: '*', f: 'pjson' };
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

      $candidateModal.find('.modal-title').text(features.name_party);
      $candidateModal.find('.modal-body').html(rendered);
      // Replace bio text if there is no bio
      if (features.bio.length == 0) {
        $candidateModal.find('.cand-extra-container').append($('.bio-candidate-section'));
        $candidateModal.find('.cand-extra-container').append($('.candidate-links'));
      }

      // Set history to include anchor
      window.location.hash = cand_id;
      $candidateModal.on('hidden.bs.modal', function() {
        // http://stackoverflow.com/a/17108603
        window.location.hash = "#!";
      });
      $candidateModal.modal();
    });
  });

  // Detect if anchor is set and click on that candidate
  if (window.location.hash.length > 0) {
    var cand_id = window.location.hash.substr(1);
    $('.cand-choice[data-cand-id="' + cand_id + '"]').click();
  }

});

function parse_server_response(json_str) {
  var features = JSON.parse(json_str).features;
  if (features.length == 0) {
    throw "Invalid response - Unable to load candidate";
  }
  var data = features[0].attributes;
  // Fix email links
  if(data.cand_email) data.cand_email = "mailto:" + data.cand_email;

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
      response.push({url: '', text: val + ' - Unknown'});
    } else {
      response.push({url: data[key], text: val});
    }
    delete data[key];
  });
  return response;
}
