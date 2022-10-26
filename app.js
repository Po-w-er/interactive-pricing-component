const toggleBtn = document.querySelector(".toggle")
const circleToggle = document.querySelector('.circle-toggle')
const progressBtn = document.getElementsByClassName('progress-bar')[0]
const slider = document.querySelector('.slider-btn')
const pageViews = document.querySelector('.views-text')
const price = document.querySelector('.the-price')


const diffPrices = [
    { '0':["10K pageviews" , "$8"]},
    { '1':["50K pageviews" ,"$12"]},
    { '2':["100K pageviews" ,"$16"]},
    { '3':["500k pageviews" ,"$24"]},
    { '4':["1M pageviews","$36"]}
]

const discountPrice = [
    { '0':[ "$2"]},
    { '1':["$3"]},
    { '2':["$4"]},
    { '3':["$6"]},
    { '4':["$9"]}
]


toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("change")
    circleToggle.classList.toggle('action')
})

let pricePages = 0 
slider.addEventListener('click', () => {
    let thePrice =  diffPrices[pricePages][pricePages.toString()][1]
    let discount = discountPrice[pricePages][pricePages][0]
    let styleProperty = parseFloat(getComputedStyle(slider).getPropertyValue("--left"))
    let width = parseFloat( getComputedStyle(progressBtn).getPropertyValue("--width"))
    if(styleProperty < 90){
        slider.style.setProperty('--left', styleProperty += 18)
        progressBtn.style.setProperty('--width', width += 18)
        pageViews.textContent = diffPrices[pricePages][pricePages.toString()][0]
        isBtnClicked(thePrice, discount)
        pricePages++
    } 
})



 function isBtnClicked(value, value2){
    
    toggleBtn.addEventListener("click", ()=>{
        if(toggleBtn.classList.contains("change")){
            return price.textContent = value2
        }else{
           return price.textContent = value
        }
       
})
    if(toggleBtn.classList.contains("change") === true){
        return price.textContent = value2
    }
     return price.textContent = value

 }

 



