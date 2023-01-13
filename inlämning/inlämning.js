// hamburger dropdown menu toggle visibility
var mobileMenuVisible = false;
function FunkyFunction()
{
    mobileMenuVisible = !mobileMenuVisible;
    console.log(mobileMenuVisible);

    let vis = "";
    if (mobileMenuVisible)
    {
        vis = "visible";
    }
    else
    {
        vis = "hidden";
    }

    document.getElementById("hamburger-links").style.visibility = vis;
}

// hamburger dropdown menu disappear on resize
addEventListener("resize", () =>
{
    if (!mobileMenuVisible)
    {
        return;
    }
    const wWidth = window.innerWidth;
    console.log(wWidth);
    if (wWidth >= 600)
    {
        console.log("hid hamburger dropdown");
        mobileMenuVisible = false;
        document.getElementById("hamburger-links").style.visibility = "hidden";
    }
})

// constructs item contents
let products = document.getElementsByClassName("item");
const cube = `
    <p class="cube-title">Cool Cube</p>
    <div class="cube">
        <div class="top"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="front"></div>
        <div class="back"></div>
    </div>
    <p class="price"></p>
`;
for (i = 0; i < products.length; ++i)
{

    products[i].innerHTML += cube;
}

// random price tags
let pricetags = document.getElementsByClassName("price");
for(let i = 0; i < pricetags.length; ++i)
{
    let price = Math.floor(Math.random() * 1000 + 1) + "$";
    pricetags[i].innerHTML = price;
}