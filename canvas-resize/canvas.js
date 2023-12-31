var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = "rgba(255, 0, 0, 0.5)"
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)'
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);
console.log(canvas);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = '#fa34a3';
c.stroke();

// Arc / Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

for (i = 0; i < 3; i++) {
    var x = Math.random() * window.innerWidth; // Để vòng tròn tạo ra ở vị trí random và nằm trong khu vực màn hình hiển thị
    var y = Math.random() * window.innerHeight; // Để vòng tròn tạo ra ở vị trí random và nằm trong khu vực màn hình hiển thị
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}