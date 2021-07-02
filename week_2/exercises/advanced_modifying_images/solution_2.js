// Advanced Modifying Images - Part 2

var img = new SimpleImage(200, 200);
var halfHeight = img.getHeight() / 2;
var halfWidth = img.getWidth() / 2;
for (var px of img.values()) {
    var x = px.getX();
    var y = px.getY();
    if (x < halfWidth) {
        px.setRed(255);
    }
    if (y > halfHeight) {
        px.setBlue(255);
    }
    if (x >= halfWidth && y <= halfHeight) {
        px.setGreen(255);
    }
}
print(img);
