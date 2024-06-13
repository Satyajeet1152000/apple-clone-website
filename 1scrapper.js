const tl = document.getElementsByClassName("rf-cards-scroller-platter")

const xx = tl[2].children

const tlData = Array.from(xx).map(ele => {
    return { 
            h1: ele.children[0].children[0].children[0].children[0].children[1].children[0].innerText,
            h2: ele.children[0].children[0].children[0].children[0].children[1].children[1].innerText,
            h3: ele.children[0].children[0].children[0].children[0].children[1].children[2].innerText,
            imgPath: ele.children[0].children[0].children[0].children[0].children[0].children[0].src
        }
});


// for downloading result in in text or any file
function saveTextToFile(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
saveTextToFile(JSON.stringify(tlData, null, 2), 'tl1Data.json');



// rediirection correction
// /store to /store
// /shop/buy_mac to /store/buy_mac