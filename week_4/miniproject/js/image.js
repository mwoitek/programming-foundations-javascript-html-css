function resizeCanvas(canvas, height, width) {
    canvas.style.height = height;
    canvas.style.width = width;
}

function fitCanvasToImage(canvas, image) {
    resizeCanvas(canvas, image.getHeight(), image.getWidth());
}

function loadImage() {
    originalImage = new SimpleImage(fileInput);

    grayImage = new SimpleImage(fileInput);
    redImage = new SimpleImage(fileInput);
    sepiaImage = new SimpleImage(fileInput);

    fitCanvasToImage(canvas, originalImage);
    originalImage.drawTo(canvas);
}

function isImageNotLoaded(image) {
    return image == null || !image.complete();
}

function resetImage() {
    if (!isImageNotLoaded(originalImage)) {
        originalImage.drawTo(canvas);

        grayImage = new SimpleImage(fileInput);
        redImage = new SimpleImage(fileInput);
        sepiaImage = new SimpleImage(fileInput);
    }
}
