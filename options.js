var key = "pr_template";
var exampleTemplate = 'Example Template';

function change_template(e) {
  var obj = {};
  obj[key] = e.target.value || exampleTemplate;
  chrome.storage.sync.set(obj);
}

function restore_options() {
  chrome.storage.sync.get(key, function (obj) {
    document.getElementById("prtemplate").value = obj[key];
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#prtemplate').addEventListener('change', change_template);
document.querySelector('#reset').addEventListener('click', function () {
  chrome.storage.sync.clear(function () {
    var obj = {};
    obj[key] = exampleTemplate;
    chrome.storage.sync.set(obj);
    document.querySelector('#prtemplate').value = exampleTemplate;
  });
});
document.querySelector('#close').addEventListener('click', function () {
  window.close();
});
