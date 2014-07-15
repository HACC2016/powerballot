$(document).ready(function() {
  var candidate_data = {};
  candidate_data['h18hashem'] = {
    name: 'Mark Jun Hashem (D)',
    party: 'Democrat',
    office: 'House',
    district: '18',
    incumbent: true,
    photo_url: "http://www.capitol.hawaii.gov/Members/Images/RepSenPhotos/hashem.jpg",
    photo_width: "148px",
    photo_source_text: "State Legislature photo",
    bio: "<p>Elected in 2010, Representative Mark J. Hashem represents House District 18. He serves as the Vice-Chair of the Committee on Agriculture and the Vice-Chair of the Committee on International Affairs. He is a member of the House Finance Committee, Economic Revitalization & Business Committee, and Tourism Committee.</p>\
            <p>Representative Hashem serves on the Hawaii Invasive Species Council and is also an appointee to the National Council on State Legislatures (NCSL) standing committee on Agriculture and Energy for the 2011-2012 term.</p>\
            <p>Mark is a graduate of McKinley High School, where he is a volunteer wrestling coach. After graduating from Pacific University in Forest Grove, Oregon, he entered the Master's Program at Hokkaido University. During his stay in Japan, Representative Hashem, who is fluent in Japanese, operated an elementary English school and a billiard supply network in Sapporo.</p>\
            <p>Representative Hashem is married, and is the proud father of three children.</p>",
    bio_cred_text: "TobaccoIssues.com website",
    bio_cred_url: "http://www.tobaccoissues.com/candidatedetail.aspx?LegisID=HASHJMARXXXXXXHI",
    fact_list: [
      {name: 'Occupation', text: 'legislator, business owner, sports coach'},
      {name: 'Age', text: 'unknown'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: 'Friends of Mark Hashem'},
        {name: 'Chair', text: 'Mark J. Hashem'},
        {name: 'Treasurer', text: 'Fabiola B. Hashem'},
        {link_url: "https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=10626", link_text: "Organizational Report"}
      ]}
    ],
    campaign_finance_standard_report: "https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC10626",
    campaign_finance_special_report: "https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Hashem,%20Mark&s_CR_EP_ID=",
    other_links: [
      {href: "http://www.capitol.hawaii.gov/memberpage.aspx?member=hashem&year=2014", text: "State Legislature Official Page"},
      {href: "http://www.lwv-hawaii.com/candidates-2014.htm#Hashem,MarkJun", text: "League of Women Voters of Hawaii"},
      {href: "http://beta.followthemoney.org/entity-details?eid=18913803", text: "FollowTheMoney"},
      {href: "http://votesmart.org/candidate/biography/127594/mark-hashem", text: "Project Vote Smart"},
      {href: "http://ballotpedia.org/Mark_Hashem", text: "Ballotpedia"},
      {href: "http://en.wikipedia.org/wiki/Mark_Hashem", text: "Wikipedia"},
      {text: "Civil Beat - unknown"}
    ],

    end: 'ignore'
  };

  // Replaces #h18hashem-box
  $('.cand-choice').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $candidateModal = $('#candidateModal');
    var candidate_name = $this.data('name');
    console.log("clicked on candidate: " + candidate_name);
    var data = candidate_data[candidate_name];

    var template = $('#template').html();
    Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.render(template, data);

    $candidateModal.find('.modal-title').text(data.name);
    $candidateModal.find('.modal-body').html(rendered);
    $candidateModal.modal();
  });

    $('#s12galuteria').click(function(event){
    	$('#s12galuteria-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#s12galuteria-box').fadeIn(100);
        });
    });
    $('#s12galuteria-boxclose').click(function(){
        $('#s12galuteria-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#s12middleton').click(function(event){
    	$('#s12middleton-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#s12middleton-box').fadeIn(100);
        });
    });
    $('#s12middleton-boxclose').click(function(){
        $('#s12middleton-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#s12lethem').click(function(event){
    	$('#s12lethem-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#s12lethem-box').fadeIn(100);
        });
    });
    $('#s12lethem-boxclose').click(function(){
        $('#s12lethem-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#h18halvorsen').click(function(event){
    	$('#h18halvorsen-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#h18halvorsen-box').fadeIn(100);
        });
    });
    $('#h18halvorsen-boxclose').click(function(){
        $('#h18halvorsen-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4iwasa').click(function(event){
    	$('#hon4iwasa-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4iwasa-box').fadeIn(100);
        });
    });
    $('#hon4iwasa-boxclose').click(function(){
        $('#hon4iwasa-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4ozawa').click(function(event){
    	$('#hon4ozawa-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4ozawa-box').fadeIn(100);
        });
    });
    $('#hon4ozawa-boxclose').click(function(){
        $('#hon4ozawa-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4strouble').click(function(event){
    	$('#hon4strouble-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4strouble-box').fadeIn(100);
        });
    });
    $('#hon4strouble-boxclose').click(function(){
        $('#hon4strouble-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4waters').click(function(event){
    	$('#hon4waters-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4waters-box').fadeIn(100);
        });
    });
    $('#hon4waters-boxclose').click(function(){
        $('#hon4waters-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

});
