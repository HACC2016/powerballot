$(document).ready(function() {
  var candidate_data = {};
  
  //Governor
  candidate_data['govdejean'] = {
    name: '  Khis Caldwell DeJean (N)',
    party: 'Non-partisan',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'http://www.lwv-hawaii.com/cand-images/dejean1.jpg',
    photo_width: '148px',
    photo_source_text: 'Hawaii League of Women Voters photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: '',
    bio_cred_url: '',
    fact_list: [
      {name: 'Occupation', text: ''},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Khistina Caldwell DeJean for Governor of Hawaii'},
        {name: 'Chair', text: '  Khistina C. DeJean'},
        {name: 'Treasurer', text: '  Khistina C. DeJean'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=10811', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: '', text: 'Candidate website - unknown'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:khistinacdejean@yahoo.com', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC10811',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=DeJean, Khistina Caldwell&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#DeJean,KhistinaCaldwell', text: 'League of Women Voters of Hawaii'},
      {href: 'http://beta.followthemoney.org/entity-details?eid=24812562', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/153283/khis-dejean-caldwell#.U8G5FvldU1I', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Khistina_Dejean', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govige'] = {
    name: '  David Yutaka Ige  (D)',
    party: 'Democratic',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'http://votesmart.org/canphoto/3406.jpg',
    photo_width: '148px',
    photo_source_text: 'Project Vote Smart photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'candidate website',
    bio_cred_url: 'http://www.davidige.org/about-david/',
    fact_list: [
      {name: 'Occupation', text: 'Electrical Engineer, State Senator'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' David Ige for Governor 2014'},
        {name: 'Chair', text: '  Keith K. Hiraoka'},
        {name: 'Treasurer', text: '  Michael T. Tokioka'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=10147', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: 'http://www.davidige.org/', text: 'Candidate website'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:sendige@davidige.org', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC10147',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Ige, David&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.capitol.hawaii.gov/memberpage.aspx?member=ige&year=2014', text: 'Official government webpage'},
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Ige,DavidY.', text: 'League of Women Voters of Hawaii'},
      {href: 'http://beta.followthemoney.org/entity-details?eid=20815439', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/3406/david-ige#.U8NlwaZOWas', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/David_Ige', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {href: 'http://www.civilbeat.com/2014/07/candidate-qa-governor-of-hawaii-david-ige/?utm_medium=social&utm_source=powerballot&utm_campaign=hawaii', text: 'Civil Beat Q&A'},
    ],
  };

  candidate_data['govspatola'] = {
    name: '  Joseph R. Spatola  (N)',
    party: 'Non-partisan',
    office_district: 'Governor',
    incumbent: false,
    photo_url: '',
    photo_width: '148px',
    photo_source_text: '',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: '',
    bio_cred_url: '',
    fact_list: [
      {name: 'Occupation', text: ''},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Friends of Joe Spatola'},
        {name: 'Chair', text: '  Joseph R. Spatola II'},
        {name: 'Treasurer', text: '  Joseph R. Spatola II'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11076', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: '', text: 'Candidate website - unknown'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:', text: 'Email - unknown'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11076',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Spatola, Joseph&s_CR_EP_ID=',

    other_links: [
      {text: 'League of Women Voters of Hawaii - unknown'},
      {href: 'http://beta.followthemoney.org/entity-details?eid=24812566', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/153285/joseph-spatola#.U8LjGvldU1I', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Joe_Spatola', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govtanabe'] = {
    name: '  Van K. (Tanaban) Tanabe  (D)',
    party: 'Democratic',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'http://votesmart.org/canphoto/32337.jpg',
    photo_width: '148px',
    photo_source_text: 'Project Vote Smart photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'Blogger profile',
    bio_cred_url: 'https://www.blogger.com/profile/00170437569602470225',
    fact_list: [
      {name: 'Occupation', text: 'Telecommunications Industry'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Good Guys for Tanabe'},
        {name: 'Chair', text: '  Van K. Tanabe'},
        {name: 'Treasurer', text: '  Van K. Tanabe'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11107', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: '', text: 'Candidate website - unknown'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:vantanabe@yahoo.com', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11107',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Tanabe, Van &s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Tanabe,VanK.', text: 'League of Women Voters of Hawaii'},
      {href: 'http://beta.followthemoney.org/entity-details?eid=24812567', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/evaluations/32337/van-tanabe/12#.U8G6LPldU1I', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Van_Tanabe', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {href: 'http://www.civilbeat.com/2014/07/candidate-qa-governor-of-hawaii-van-tanabe/?utm_medium=social&utm_source=powerballot&utm_campaign=hawaii', text: 'Civil Beat Q&A'},
    ],
  };

  candidate_data['govjdavis'] = {
    name: '  Jeff Davis  (L)',
    party: 'Libertarian',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'http://d3n8a8pro7vhmx.cloudfront.net/jeffdavisgovernor/pages/29/attachments/original/1384490977/suit.jpg?1384490977',
    photo_width: '148px',
    photo_source_text: 'Candidate website photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'candidate website',
    bio_cred_url: 'http://www.jeffdavisgovernor.com/bio',
    fact_list: [
      {name: 'Occupation', text: 'Solar Contractor and Radio Show Host'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Friends of Jeff Davis'},
        {name: 'Chair', text: '  Robert Morgenweck'},
        {name: 'Treasurer', text: '  Julius Lannuti'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11008', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: 'http://www.jeffdavisgovernor.com/', text: 'Candidate website'},
      {href: 'https://www.facebook.com/TheSolarGuyJeffDavis', text: 'Facebook'},
      {href: 'https://twitter.com/yoursolarguy', text: 'Twitter'},
      {href: 'http://www.linkedin.com/in/solarserviceshawaii', text: 'LinkedIn'},
      {href: 'mailto:http://www.jeffdavisgovernor.com/contact-us', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11008',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Davis, Jeffrey&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Davis,Jeff', text: 'League of Women Voters of Hawaii'},
      {text: 'FollowTheMoney - unknown'},
      {href: 'http://votesmart.org/candidate/153278/jeff-davis#.U8W3VPldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Jeff_Davis_(Hawaii)', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {href: 'http://www.civilbeat.com/2014/07/candidate-qa-governor-of-hawaii-jeff-davis/?utm_medium=social&utm_source=powerballot&utm_campaign=hawaii', text: 'Civil Beat Q&A'},
    ],
  };

  candidate_data['govmdavis'] = {
    name: '  Misty Davis  (N)',
    party: 'Non-partisan',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'http://a.disquscdn.com/uploads/users/10941/9469/avatar92.jpg?1402533327',
    photo_width: '148px',
    photo_source_text: 'Disqus photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'Disqus website',
    bio_cred_url: 'http://disqus.com/disqus_4q3jshxTCd/',
    fact_list: [
      {name: 'Occupation', text: ''},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Misty Davis'},
        {name: 'Chair', text: '  Misty Davis'},
        {name: 'Treasurer', text: '  Misty Davis'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11083', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: '', text: 'Candidate website - unknown'},
      {href: '', text: 'Facebook - unknown'},
      {href: 'https://twitter.com/@davismisty52', text: 'Twitter'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:davismisty52@gmail.com', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11083',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Davis, Misty&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Davis,Misty', text: 'League of Women Voters of Hawaii'},
      {text: 'FollowTheMoney - unknown'},
      {href: 'http://votesmart.org/candidate/153280/misty-davis#.U8W4gPldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Misty_Davis', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govabercrombie'] = {
    name: '  Neil Abercrombie  (D)',
    party: 'Democratic',
    office_district: 'Governor',
    incumbent: true,
    photo_url: 'http://governor.hawaii.gov/wp-content/uploads/2012/09/5.9.2011-Governor-Abercrombie-1000x1250-240x300.jpeg',
    photo_width: '148px',
    photo_source_text: 'State website photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'candidate website',
    bio_cred_url: 'http://neilabercrombie.com/about-neil-abercrombie/',
    fact_list: [
      {name: 'Occupation', text: 'Governor'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Abercrombie for Governor'},
        {name: 'Chair', text: '  William Kaneko'},
        {name: 'Treasurer', text: '  Jack Y. Endo'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=10529', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: 'http://neilabercrombie.com/', text: 'Candidate website'},
      {href: 'https://www.facebook.com/NeilForHawaii', text: 'Facebook'},
      {href: 'https://twitter.com/neilforhawaii', text: 'Twitter'},
      {href: 'https://www.linkedin.com/in/neilabercrombie', text: 'LinkedIn'},
      {href: 'mailto:2014@neilabercrombie.com', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC10529',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Abercrombie, Neil&s_CR_EP_ID=',

    other_links: [
      {href: 'http://governor.hawaii.gov/', text: 'Official government webpage'},
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Abercrombie,Neil', text: 'League of Women Voters of Hawaii'},
      {href: 'http://www.followthemoney.org/database/uniquecandidate.phtml?uc=132289', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/biography/26827/neil-abercrombie#.U8W7xvldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Neil_Abercrombie', text: 'Ballotpedia'},
      {href: 'http://en.wikipedia.org/wiki/Neil_Abercrombie', text: 'Wikipedia'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govgregory'] = {
    name: '  Stuart Todd Gregory  (R)',
    party: 'Republican',
    office_district: 'Governor',
    incumbent: false,
    photo_url: '',
    photo_width: '148px',
    photo_source_text: '',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'Project Vote Smart',
    bio_cred_url: 'http://votesmart.org/candidate/biography/17801/stuart-gregory#.U8cEC_ldWSo',
    fact_list: [
      {name: 'Occupation', text: ''},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: " If You Didn't Vote For Me Then You Paid Too Much"},
        {name: 'Chair', text: '  Stuart T. Gregory'},
        {name: 'Treasurer', text: '  Stuart T. Gregory'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11160', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: '', text: 'Candidate website - unknown'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:', text: 'Email - unknown'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11160',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Gregory, Stuart&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Gregory,StuartTodd', text: 'League of Women Voters of Hawaii'},
      {text: 'FollowTheMoney - unknown'},
      {href: 'http://votesmart.org/candidate/biography/17801/stuart-gregory#.U8cEC_ldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Stuart_Gregory', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govhannemann'] = {
    name: '  Mufi Hannemann  (I)',
    party: 'Independent',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'https://pbs.twimg.com/profile_images/457971737875853312/qp4--Tdd_400x400.jpeg',
    photo_width: '148px',
    photo_source_text: 'Twitter photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'candidate website',
    bio_cred_url: 'http://votemufi.com/mufis-biography/',
    fact_list: [
      {name: 'Occupation', text: 'Former Mayor of Honolulu'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' The Hannemann Committee'},
        {name: 'Chair', text: '  Dean J. Okimoto'},
        {name: 'Treasurer', text: '  Mike Ellis'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=10132', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: 'http://votemufi.com/', text: 'Candidate website'},
      {href: 'https://www.facebook.com/votemufi', text: 'Facebook'},
      {href: 'https://twitter.com/MufiHannemann?original_referer=http%3A%2F%2Fvotemufi.com%2Fmufis-biography%2F&profile_id=23866990&tw_i=488888101666693120&tw_p=embeddedtimeline&tw_w=454107791351754752', text: 'Twitter'},
      {href: 'http://www.linkedin.com/in/mufihannemann', text: 'LinkedIn'},
      {href: 'mailto:http://votemufi.com/contact-us/', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC10132',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Hannemann, Mufi&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Hannemann,Mufi', text: 'League of Women Voters of Hawaii'},
      {href: 'http://www.followthemoney.org/database/search.phtml?searchbox=mufi&CurrentType=Candidates', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/75793/mufi-hannemann#.U8cIpfldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Mufi_Hannemann', text: 'Ballotpedia'},
      {href: 'http://en.wikipedia.org/wiki/Mufi_Hannemann', text: 'Wikipedia'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govcollins'] = {
    name: '  Charles (Trump) Collins  (R)',
    party: 'Republican',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'http://ballotpedia.org/wiki/images/thumb/a/a1/Charles_Collins.JPG/200px-Charles_Collins.JPG',
    photo_width: '148px',
    photo_source_text: 'Ballotpedia photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'Ballotpedia',
    bio_cred_url: 'http://ballotpedia.org/Charles_Collins',
    fact_list: [
      {name: 'Occupation', text: 'Former educator'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Charles "Trump" Collins 4 Gov'},
        {name: 'Chair', text: '  Charles Augustine Collins'},
        {name: 'Treasurer', text: '  Charles A. Collins'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11134', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: '', text: 'Candidate website - unknown'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:', text: 'Email - unknown'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11134',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Collins, Charles&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Collins,CharlesA.', text: 'League of Women Voters of Hawaii'},
      {text: 'FollowTheMoney - unknown'},
      {href: 'http://votesmart.org/candidate/54135/charles-collins#.U8cKXfldWSp', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Charles_Collins', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  candidate_data['govmorse'] = {
    name: '  Richard Morse  (N)',
    party: 'Non-partisan',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'https://www.civilbeat.com/wp-content/uploads/2014/06/P-1b-150x150.jpg',
    photo_width: '148px',
    photo_source_text: 'Civil Beat photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'Civil Beat',
    bio_cred_url: 'http://www.civilbeat.com/2014/07/candidate-qa-governor-of-hawaii-richard-morse/',
    fact_list: [
      {name: 'Occupation', text: 'Writer'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Richard Morse'},
        {name: 'Chair', text: '  Richard B. Morse Jr.'},
        {name: 'Treasurer', text: '  Richard B. Morse Jr.'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11109', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: 'http://morse4gov.blogspot.com/', text: 'Candidate website'},
      {href: '', text: 'Facebook - unknown'},
      {href: '', text: 'Twitter - unknown'},
      {href: '', text: 'LinkedIn - unknown'},
      {href: 'mailto:morse4gov@gmail.com', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11109',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Morse, Richard&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Morse,Jr.,RichardB.', text: 'League of Women Voters of Hawaii'},
      {text: 'FollowTheMoney - unknown'},
      {href: 'http://votesmart.org/candidate/149754/richard-morse#.U8gw8PldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Richard_Morse,_Jr.', text: 'Ballotpedia'},
      {text: 'Wikipedia - unknown'},
      {href: 'http://www.civilbeat.com/2014/07/candidate-qa-governor-of-hawaii-richard-morse/?utm_medium=social&utm_source=powerballot&utm_campaign=hawaii', text: 'Civil Beat Q&A'},
    ],
  };
  
  candidate_data['govaiona'] = {
    name: '  Duke Aiona  (R)',
    party: 'Republican',
    office_district: 'Governor',
    incumbent: false,
    photo_url: 'https://civilbeat_production.s3.amazonaws.com/media_files/photos/4791-97c75edc5b406e62e9fc2ab074efff4d74c25ad8ff98da7466f0f999_w%3A1024_px.jpg',
    photo_width: '148px',
    photo_source_text: 'Civil Beat photo',
    bio: '<p>bio text goes here</p>\
            <p>and here...</p>\
            <p>and here...</p>\
            <p>and here.</p>',
    bio_cred_text: 'candidate website',
    bio_cred_url: 'http://www.dukeaiona.com/about-duke/',
    fact_list: [
      {name: 'Occupation', text: 'Lawyer and Substitute Teacher'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: ' Friends  of Duke Aiona'},
        {name: 'Chair', text: '  Dewey Arakawa'},
        {name: 'Treasurer', text: '  Sharon M. Wong'},
        {link_url: 'https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=10162', link_text: 'Organizational Report'}
      ]}
    ],

    candidate_links: [
      {href: 'http://www.dukeaiona.com/', text: 'Candidate website'},
      {href: 'https://www.facebook.com/DukeAiona2014', text: 'Facebook'},
      {href: 'https://twitter.com/DukeAiona2014', text: 'Twitter'},
      {href: 'http://www.linkedin.com/in/dukeaiona', text: 'LinkedIn'},
      {href: 'mailto:http://www.dukeaiona.com/contact-duke/', text: 'Email'},
    ],

    campaign_finance_standard_report: 'https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC10162',
    campaign_finance_special_report: 'https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Aiona, James (Duke)&s_CR_EP_ID=',

    other_links: [
      {href: 'http://www.lwv-hawaii.com/candidates-2014.htm#Aiona,Duke', text: 'League of Women Voters of Hawaii'},
      {href: 'http://www.followthemoney.org/database/uniquecandidate.phtml?uc=132534', text: 'FollowTheMoney'},
      {href: 'http://votesmart.org/candidate/biography/32350/duke-aiona-jr#.U8W1APldWSo', text: 'Project Vote Smart'},
      {href: 'http://ballotpedia.org/Duke_Aiona', text: 'Ballotpedia'},
      {href: 'http://en.wikipedia.org/wiki/James_Aiona', text: 'Wikipedia'},
      {text: 'Civil Beat Q&A - unknown'},
    ],
  };

  //House 18
  candidate_data['h18hashem'] = {
    name: 'Mark Jun Hashem (D)',
    party: 'Democrat',
    office_district: 'Hawaii State House - District 18',
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

    candidate_links: [
      {href: "http://www.markhashem.com/", text: "Candidate website (not working)"},
      {href: "https://www.facebook.com/markjhashem", text: "Facebook"},
      {text: "Twitter - unknown"},
      {text: "LinkedIn - unknown"},
      {href: "mailto:mark.hashem@yahoo.com", text: "Email"},
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
  };



  candidate_data['h18halvorsen'] = {
    name: 'HALVORSEN, Susan Kehaulani (R)',
    party: 'Republican',
    office_district: 'Hawaii State House - District 18',
    incumbent: false,
    photo_url: "http://www.lwv-hawaii.com/cand-images/halvorsen.jpg",
    photo_width: "148px",
    photo_source_text: "Hawaii League of Women Voters",
    bio: "<p>Born and raised in Honolulu, Susan graduated from Roosevelt High School and Brigham Young University-Hawaii.</p>\
		<p>She is a devoted wife and mother of 3 children and has served in many positions of responsibility for her community and church.</p>\
		<p>Susan has served the people of Hawaii for over 12 years as a Social Worker with the Department of Health.</p>\
		<p>She works with and assists Kūpuna and the disabled to receive necessary health care. She also helps to obtain permanent homes for many of Hawaii’s homeless and resolves escalating situations in the community to protect the public.</p>\
		<p>Susan is experienced in collaborating with federal, state, and private organizations to benefit individuals and families.</p>\
		<p>She serves as Union Steward for the Hawaii Employees Government Association (HGEA) Unit 13 in the Department of Health.</p>",
    bio_cred_text: "the candidate's website",
    bio_cred_url: "http://susanhalvorsenforstatehouse.blogspot.com/p/blog-page.html",
    fact_list: [
      {name: 'Occupation', text: 'social worker'},
      {name: 'Age', text: 'unknown'},
      {name: 'Candidate Committee', has_sub_list: true, sub_fact_list: [
        {name: 'Name', text: 'Susan Halvorsen for State House'},
        {name: 'Chair', text: 'Elevila B. Giles'},
        {name: 'Treasurer', text: 'Norrin K. Lau'},
        {link_url: "https://nc.csc.hawaii.gov/CFSPublic/ORG_Report.php?OR_ID=11106", link_text: "Organizational Report"}
      ]}
    ],

    candidate_links: [
      {href: "http://susanhalvorsenforstatehouse.blogspot.com/", text: "Candidate website"},
      {href: "https://www.facebook.com/susanhalvorsenforstatehouse", text: "Facebook"},
      {text: "Twitter - unknown"},
      {href: "https://www.linkedin.com/pub/susan-halvorsen/21/676/a9", text: "LinkedIn"},
      {href: "mailto:susan@susanhalvorsen.com", text: "Email"}
    ],

    campaign_finance_standard_report: "https://nc.csc.hawaii.gov/CFSPublic/ReportDetail.php?RNO=CC11106",
    campaign_finance_special_report: "https://nc.csc.hawaii.gov/CFSPublic/CandidateSRCH.php?s_OR_CC_CANDIDATE_NAME=Halvorsen,%20Susan&s_CR_EP_ID=",

    other_links: [
      {href: "http://www.lwv-hawaii.com/candidates-2014.htm#Halvorsen,SusanKehaulani", text: "League of Women Voters of Hawaii"},
      {href: "http://beta.followthemoney.org/entity-details?eid=24819117", text: "FollowTheMoney"},
      {href: "http://votesmart.org/candidate/153376/susan-halvorsen", text: "Project Vote Smart"},
      {href: "http://ballotpedia.org/Susan_Kehaulani_Halvorsen", text: "Ballotpedia"},
      {text: "Wikipedia - unknown"},
      {text: "Civil Beat - unknown"}
    ]
  };

  // Replaces #h18hashem-box
  $('.cand-choice').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var $candidateModal = $('#candidateModal');
    var candidate_name = $this.data('name');
    var candidate_ballot_name = $this.text().replace(/\([DR]\)/, "").trim();
    var url = "http://services2.arcgis.com/tuFQUQg1xd48W6M5/arcgis/rest/services/powerballot_test2/FeatureServer/2/query"
    var params = { where: "Ballot_name='" + candidate_ballot_name + "'", outFields: '*', f: 'pjson' }
    $.get(url, params, function(data) {
      console.log("got data " + data);
      // TODO: Can do error checking here? For empty-ish data?
      var features = parse_server_response(data);

      var template = $('#template').html();
      Mustache.parse(template);   // optional, speeds up future uses
      var rendered = Mustache.render(template, features);

      $candidateModal.find('.modal-title').text(data.name_party);
      $candidateModal.find('.modal-body').html(rendered);
      $candidateModal.modal();
    });
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

function parse_server_response(json_str) {
  var data = JSON.parse(json_str).features[0].attributes;
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
