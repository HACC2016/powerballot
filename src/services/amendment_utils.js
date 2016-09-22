export function getAmendmentGroupTitle(amendmentGroupName) {
  switch (amendmentGroupName) {

  case "CON AMEND":
    return "State Constitution"
  case "HAWAII CHARTER AMEND":
    return "Hawaii County Charter"
  case "HONOLULU CHARTER AMEND":
    return "Honolulu County Charter"
  case "MAUI CHARTER AMEND":
    return "Maui County Charter"
  case "KAUAI CHARTER AMEND":
    return "Kauai County Charter"
  default:
    return amendmentGroupName
  }
}
