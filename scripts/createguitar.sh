
curl "http://localhost:4741/guitars" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "guitar": {
      "make": "'"${MAKE}"'",
      "model": "'"${MODEL}"'",
      "string_brand": "'"${STRING_BRAND}"'",
      "string_guage": "'"${STRING_GUAGE}"'",
      "last_string_change": "'"${LAST_STRING_CHANGE}"'",
      "last_setup": "'"${LAST_SETUP}"'",
      "setup_notes": "'"${SETUP_NOTES}"'"
    }
  }'

echo
