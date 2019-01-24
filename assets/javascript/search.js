$(document).ready(function(){
    $(document).on("click", "#resetSearchButton", function() {
        document.getElementById('searchTerms').reset();
        console.log("Resetting Search Terms");
    });
    $(document).on("click", "#addModelDBButton", function() {
        document.getElementById('addModelForm').reset();
    });
});