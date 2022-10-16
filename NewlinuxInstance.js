var Newinstance = new FormData();
data.append("upfile", new Blob(["CONTENT"], {type: "text/plain"}));
fetch("SERVER.SCRIPT", {
method:"POST",
body: data
});
