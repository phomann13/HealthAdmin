
var lang_sel = false;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
function showPopup() {
    lang_sel = true;
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    popup.style.width = 0;
    popup.style.height = 0;

}
window.onload = function() {
    var count = localStorage.getItem('count');
    if(count)
{    showPopup();
}
    
}

function getLanguage(){

}

 
function search() {
  var term = document.getElementById("searchTerm").value.toLowerCase();
  var pages = [
    // Navigation Bar Links
    { url: "../Navigation_Bar/About.html", name: "About" },
    { url: "../Navigation_Bar/Contact.html", name: "Contact" },
    { url: "../Navigation_Bar/Home.html", name: "Home" },
    { url: "../Navigation_Bar/Map.html", name: "Map" },

    // Conditions Links
    { url: "../Conditions/Abdominal_Pain.html", name: "Abdominal Pain" },
    { url: "../Conditions/Allergic_Reaction.html", name: "Allergic Reaction" },
    { url: "../Conditions/Animal_Bite.html", name: "Animal Bite" },
    { url: "../Conditions/Broken_Bone.html", name: "Broken Bone" },
    { url: "../Conditions/Burns.html", name: "Burns" },
    { url: "../Conditions/Chest_Pain.html", name: "Chest Pain" },
    { url: "../Conditions/Cold_Flu.html", name: "Cold and Flu" },
    { url: "../Conditions/Cuts.html", name: "Cuts" },
    { url: "../Conditions/Diabetic.html", name: "Diabetic" },
    { url: "../Conditions/Diff_Breathing.html", name: "Difficulty Breathing" },
    { url: "../Conditions/Ear_Pain.html", name: "Ear Pain" },
    { url: "../Conditions/Eye_Infection.html", name: "Eye Infection" },
    { url: "../Conditions/Eye_Injury.html", name: "Eye Injury" },
    { url: "../Conditions/Head_Injury.html", name: "Head Injury" },
    { url: "../Conditions/HTN.html", name: "Hypertension" },
    { url: "../Conditions/Immunizations.html", name: "Immunizations" },
    { url: "../Conditions/Mental_Health.html", name: "Mental Health" },
    { url: "../Conditions/Rash_Poison.html", name: "Rash and Poison" },
    { url: "../Conditions/Routine.html", name: "Routine" },
    { url: "../Conditions/Sexual_Assault.html", name: "Sexual Assault" },
    { url: "../Conditions/Sprains_Strains_BackP.html", name: "Sprains, Strains, and Back Pain" },
    { url: "../Conditions/StrokeSX.html", name: "Stroke Symptoms" },
    { url: "../Conditions/Suspected_Overdose.html", name: "Suspected Overdose" }
  ];

  var matches = pages.filter(function (page) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", page.url, false);
    xhr.send();
    var text = xhr.responseText.toLowerCase();
    return text.indexOf(term) !== -1;
  });

  var results = document.getElementById("results");
  results.innerHTML = "";

  if (matches.length > 0) {
    matches.forEach(function (match) {
      var link = document.createElement("a");
      link.href = match.url;
      link.textContent = match.name;
      results.appendChild(link);
      results.appendChild(document.createElement("br"));
    });
  } else {
      var link = document.createElement("a");
      link.textContent = "No matches found";
      results.appendChild(link);
      results.appendChild(document.createElement("br"));
    
  }
}


