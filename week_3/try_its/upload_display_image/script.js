function upload() {
    var fileInput = document.getElementById("fileInput");
    var img = new SimpleImage(fileInput);
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.style.height = img.getHeight();
    myCanvas.style.width = img.getWidth();
    img.drawTo(myCanvas);
}
