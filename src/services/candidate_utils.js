import SuperAgent from 'superagent'

export function partyIdToTitle(partyId) {
  switch (partyId.toLowerCase()) {
  case 'a':
    return 'American Shopping Party'
  case 'c':
    return 'Constitution Party'
  case 'd':
    return 'Democratic Party'
  case 'g':
    return 'Green Party'
  case 'i':
    return 'Hawaii Independent Party'
  case 'l':
    return 'Libertarian Party'
  case 'r':
    return 'Republican Party'
  case 'ns':
    return 'Non-Partisan Special'
  case 'n':
    return 'Non-Partisan'
  default:
    return partyId
  }
}

export function metadataFieldNameToTitle(fieldName) {
  switch (fieldName) {

  // General
  case 'ballot_name':
    return 'Ballot Name'
  case 'Office':
    return 'Office'
  case 'District':
    return 'District'
  case 'Party':
    return 'Party'
  case 'name_party':
    return 'Name of Party'
  case 'office_district':
    return 'Office District'
  case 'incumbent_text':
    return 'Incumbent Text'
  case 'photo_url':
    return 'Photo URL'
  case 'photo_width':
    return 'Photo Width'
  case 'photo_source_text':
    return 'Photo Alt Text'
  case 'party_text':
    return 'Party Text'
  case 'occupation':
    return 'Occupation'
  case 'cc_name':
    return 'Candidate Committee Name'
  case 'cc_chair':
    return 'Candidate Committee Chair'
  case 'cc_treasurer':
    return 'Candidate Committee Treasurer'
  case 'volunteer':
    return 'Volunteer'
  case 'bio_cred_url':
    return 'Bio URL'
  case 'bio_cred_text':
    return 'Bio Text'
  case 'bio':
    return 'Biography'

  // Links
  case 'cc_report_url':
    return 'Organizational Report'
  case 'cand_website_url':
    return 'Website'
  case 'cand_email':
    return 'Email'
  case 'cand_facebook_url':
    return 'Facebook'
  case 'cand_twitter_url':
    return 'Twitter'
  case 'cand_linked':
    return 'LinkedIn'
  case 'csc_standard_url':
    return 'Standard Reports'
  case 'csc_special_url':
    return 'Special Reports'
  case 'fec_url':
    return 'FEC URL'
  case 'gov_website_url':
    return 'Official Government Webpage'
  case 'lwv_website_url':
    return 'League of Women Voters of Hawaii'
  case 'ftm_website_url':
    return 'FollowTheMoney'
  case 'pvs_website_url':
    return 'Project Vote Smart'
  case 'bp_website_url':
    return 'Ballotpedia'
  case 'wp_website_url':
    return 'Wikipedia'
  case 'cb_website_url':
    return 'Civil Beat Q&A'
  case 'pbs_hawaii_url':
    return 'PBS Hawaii Insights'
  case 'expenditure_viz_url':
    return 'Campaign Expenditures Visualization'
  case 'staradvertiser_url':
    return 'Star Advertiser'
  }

  return fieldName
}

export function updateCandidateMetadata(candidateId, metadata) {
  var request = SuperAgent.put('/admin/candidate/' + candidateId).send(metadata)
  return request
}
