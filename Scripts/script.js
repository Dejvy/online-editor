function showPreview(){
    var htmlCode = document.getElementById("html").value;
    var cssCode = "<style>"+document.getElementById("css").value+"</style>";
    var jsCode = "<script>"+document.getElementById("js").value+"</script>";
    var frame = document.getElementById("field").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
  }
