let grid=document.getElementById("grid-container");

for(let i = 1; i <= 6; ++i)
{
    grid.innerHTML += 
    `   <div class="product" style="background-color: hsl( ${35*i} 100% 50% );"
    <h1>Product ${ i }</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt maxime blanditiis consequatur nobis? Dicta, ipsum. Vero neque iste quis eveniet?
    </p>
    </div>`
}