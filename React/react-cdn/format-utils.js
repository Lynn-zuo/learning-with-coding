function getSizeImg (imgUrl, size) {
    return imgUrl + `param=${size}X${size}`
}

function formatePrice (price, num) {
    if (typeof price !== 'number') {
        price = Number(price) || 0
    }
    return '¥ ' + price.toFixed(num)
}