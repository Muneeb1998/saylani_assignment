
$(document).ready(function () {
    $("#zoom_06").ezPlus({
        zoomType: "inner",
        debug: true,
        cursor: "crosshair"
    });
});

var snippets = [
    { code: "code-ezp-01", ext: "html,js" },
    { code: "code-ezp-02", ext: "html" },
    { code: "code-ezp-03", ext: "html,js" }
];
// $(document).ready(function () {
//     snippetHelper.loadSnippets(snippets);
// });