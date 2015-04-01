function loadPullRequestTemplate() {
  chrome.storage.sync.get("pr_template", function (obj) {
    $("#pull_request_body").val($("#pull_request_body").val() + obj.pr_template);
 });
};
