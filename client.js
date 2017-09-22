$(function() {

  checkAndUpdatePetInfoInHtml();
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);

});

var petInfo = {
  name: 'King Cav',
  weight: 10,
  happiness: 5
};

function clickedTreatButton() {
  petInfo.happiness++;
  petInfo.weight++;
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  petInfo.happiness++;
  petInfo.weight--;
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  petInfo.happiness--;
  petInfo.weight--;
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (petInfo.weight < 1) {
    petInfo.weight = 1;
  }
  if (petInfo.happiness < 1) {
    petInfo.happiness = 1;
  }
}

function updatePetInfoInHtml() {
  $('.name').text(petInfo['name']);
  $('.weight').text(petInfo['weight']);
  $('.happiness').text(petInfo['happiness']);
}
