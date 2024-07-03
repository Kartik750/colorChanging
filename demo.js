document.getElementById('colorButton').addEventListener('click', function(){
    let color="#";
    const num="01234567890ABCDEF";
    for(let i=0;i<6;i++){
        color=color+num[Math.floor(Math.random()*num.length)];
    }
    document.body.style.backgroundColor=color;
    document.getElementById('colorCheck').innerHTML=color;
});

document.getElementById('colorButton').addEventListener('click', function(){
    const img=["https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=600"];
    const myImg=img[Math.floor(Math.random()*img.length)];
    document.getElementById('changePic').src=myImg;
});