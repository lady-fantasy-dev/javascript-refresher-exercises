function getMissedMedications(records) {
  let missedRecords = records.filter((record) => record.taken == false);
  return(missedRecords);
}

function getMedicationByName(records, name) {
  let medicationRecords = records.filter((record) => record.name === name);

  return(medicationRecords);
}


module.exports = {
  getMissedMedications,
  getMedicationByName
};
