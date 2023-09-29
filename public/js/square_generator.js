const bruh = document.getElementById('root')
var delayInMilliseconds = 1000; //1 second

const colors = ['#C3DCFD', '#8074F6', '#A69EF9', '#5FA5FB', '#378FFA', '#F2F1FE', '#6A4CED']
const sizes = ['16px', '24px', '32px', '42px', '64px']
const degs = ['15deg', '20deg', '30deg' , '40deg']

setTimeout(function() {
    if (bruh.clientHeight > 0){
        creat_squares()
    }
}, delayInMilliseconds);

function creat_squares(){
    let height = screen.height / 2;
    // square.classList.add(`a-${color}-${size}` , 'square')
    
    for(let i = 1 ;  i <= bruh.clientHeight / height ; i++){
        if (i * height < bruh.clientHeight){
            generate_square(i,height)
            generate_square(i,height)
            generate_square(i,height)
        }
    }

    
}

function generate_square(i,height){
    let size_num = sizes.length
    let color_num = colors.length
    let deg_num = degs.length
    let color = Math.floor(Math.random() * color_num)
    let size = Math.floor(Math.random() * size_num)
    let deg = Math.floor(Math.random() * deg_num)
    let square = document.createElement('div')
    square.style.height = sizes[size]
    square.style.zIndex = 0
    square.style.width = sizes[size]
    square.style.borderRadius = '4px'
    square.style.backgroundColor = colors[color]
    square.style.transform = `rotate(${degs[deg]})`
    square.style.position = 'absolute'
    square.style.top = `${i*height}px`
    if(i % 2 == 0){
        square.style.left = `${Math.floor(Math.random() * 15)}%`
    }else{
        square.style.left = `${Math.floor(Math.random() * 15) + 85}%`
    }
    bruh.appendChild(square)
}