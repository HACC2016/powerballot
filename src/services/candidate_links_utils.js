function fieldNameToTitle(fieldName) {
  switch (fieldName) {
  case 'cc_report_url':
    return 'TEST'
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
    return 'TEST'
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
  case 'bio_cred_url':
    return 'TEST'
  case 'pbs_hawaii_url':
    return 'PBS Hawaii Insights'
  case 'expenditure_viz_url':
    return 'Campaign Expendictures Visualization'
  case 'staradvertiser_url':
    return 'Star Advertiser'
  }

  return 'N/A'
}

function fieldToHref(metadata, field) {
  if (field === 'cand_email' && metadata[field]) {
    return 'mailto: ' + metadata[field]
  }
  else {
    return metadata[field]
  }
}

export function createLinkObject(metadata, fieldName) {
  return {
    title: fieldNameToTitle(fieldName),
    href: fieldToHref(metadata, fieldName),
  }
}
