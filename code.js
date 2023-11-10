

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

radius_object = Math.floor(Math.random() * 50) + 1;
    
// Star
const starGradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 80 + radius_object);
starGradient.addColorStop(0, 'white'); 
starGradient.addColorStop(0.5, 'yellow'); 
starGradient.addColorStop(0.6, 'red'); 
starGradient.addColorStop(1, 'black'); 

ctx.fillStyle = starGradient;
ctx.beginPath();
ctx.arc(200 , 200, 100 + radius_object, 0, Math.PI * 2);
ctx.fill();


// Star Texture

const centerX = 200; 
const centerY = 200; 
const radius = radius_object; 

const numberOfPoints = 15 + radius_object; 

for (let i = 0; i < numberOfPoints; i++) {
const angle = Math.random() * Math.PI * 2; 
const distance = Math.random() * radius; 

const x = centerX + distance * Math.cos(angle);
const y = centerY + distance * Math.sin(angle); 

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(x, y, 1, 1, Math.PI * 2); 
ctx.fill();
  
}


// GEN planet color 
   
const r = Math.floor(Math.random() * 256); 
const g = Math.floor(Math.random() * 256); 
const b = Math.floor(Math.random() * 256); 

const randomColor = `rgb(${r}, ${g}, ${b})`;
radius_object = Math.floor(Math.random() * 50) + 1;
    


// Back Planet
  
const circleGradient2 = ctx.createRadialGradient(210 - radius_object * 2 , 215 + radius_object/2 , 0, 195 - radius_object * 2 , 220 + radius_object/2, 10 + radius_object/2);
circleGradient2.addColorStop(0, 'black');
circleGradient2.addColorStop(0.5, 'black');
circleGradient2.addColorStop(1, 'gray'); 

ctx.fillStyle = circleGradient2;
ctx.beginPath();
ctx.arc(205 - radius_object * 2 , 215 + radius_object/2, radius_object/2, 0, Math.PI * 2);
ctx.fill();



//Front Planet atmosphere

const gradient = ctx.createRadialGradient(250+radius_object,250 + radius_object , 0, 250+radius_object, 250+radius_object,30+radius_object);
gradient.addColorStop(0, 'rgba(255, 255, 255)'); 
gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)'); 
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(250 + radius_object,250 + radius_object, 30+radius_object, 0, Math.PI * 2);
ctx.fill();

// Front Planet

const circleGradient = ctx.createRadialGradient(250 + radius_object, 250 + radius_object , 0, 275+radius_object, 275 + radius_object, 50 + radius_object);
circleGradient.addColorStop(0, 'black'); 
circleGradient.addColorStop(0.5, 'black'); 
circleGradient.addColorStop(0.9, randomColor); 
circleGradient.addColorStop(1, 'white'); 

ctx.fillStyle = circleGradient;
ctx.beginPath();
ctx.arc(250+radius_object, 250 + radius_object, 20 + radius_object, 0, Math.PI * 2);
ctx.fill();

// Front Planet texture
const centerXX = 250 + radius_object; 
const centerYY = 250 + radius_object;
const radius2 = radius_object; 

const numberOfPoints2 = 25; 
for (let i = 0; i < numberOfPoints2; i++) {
const angle = Math.random() * Math.PI * 2; 
const distance = Math.random() * radius2; 

const xx = centerXX + distance * Math.cos(angle); 
const yy = centerYY + distance * Math.sin(angle); 

ctx.fillStyle = randomColor;
ctx.beginPath();
ctx.arc(xx, yy, 1, 1, Math.PI * 2); 
ctx.fill();
 
}
