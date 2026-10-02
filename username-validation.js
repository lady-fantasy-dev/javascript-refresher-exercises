// The usernames str should be at least 4 and at most 25 charachters long
// They should start with a letter,
// only contain letters, numbers, and _
// shouldn't end with _

function validateUsername(str) {
  if (str.length < 4 || str.length > 25) {
    return false;
  }

  if (!/^[a-zA-Z]/.test(str)) {
    return false;
  }
  if (!/^[a-zA-Z0-9_]+$/.test(str)) {
    return false;
  }
  if (str.endsWith("_")){
    return false;
  }

  return true;
}

// Test the function
console.log(validateUsername("yas"))
console.log(validateUsername("yasmine"))
console.log(validateUsername("yasmine123"))
console.log(validateUsername("yasmine123_"))


