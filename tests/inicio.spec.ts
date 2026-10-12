import {test,expect} from "@playwright/test" 

test("TC-INI-01 - Ordenar alfabeticamente",async({page})=>{
    // Paso 1 --> Abrir la URL
    await page.goto("https://practicesoftwaretesting.com/");
    //validad que el titulo corresponda a apal pagina que se habrio
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
    // Paso 2 ----> Click en iniciar sesion 
    await page.getByTestId("nav-sign-in").click();
     //Paso 3 ---> completar usuario y password
    await page.getByTestId("email").fill("customer@practicesoftwaretesting.com");
    await page.getByTestId("password").fill("welcome01");

    // Paso 4 ---> clic en iniciar sesion
    await page.getByTestId("login-submit").click()

    // Paso 5 --> Validar acceso a la pantalla Home
    await expect(page.getByTestId("page-title")).toContainText("Mi cuenta")

    // click en inicio
    await page.getByTestId("nav-home").click();

    //obtener la lista al dar clic en inicio

    const itemsAntes = page.getByTestId("product-name");
    await expect(itemsAntes.first()).not.toHaveText('');
    const primerTextoInicial = await itemsAntes.first().innerText()
    console.log(primerTextoInicial);



    //clic en ordenar ascendente
    await page.getByTestId("sort").selectOption({label:'Nombre (A - Z)'});
    
    // Validar

    const items = page.getByTestId("product-name");

    await expect(items.first()).not.toHaveText(primerTextoInicial);

    const nombreProducto = await items.allTextContents();
    console.log(nombreProducto)

    // Validar que se hayan ordenado

    //1. Obtener los textos de la pagina (limpios de espacios)
    const actualTitles = (await items.allTextContents()).map(text => text.trim())

    //2. crear una copia del arreglo y la ordena alfabeticamente
    const expectedTitles = [...actualTitles].sort((a,b) => a.localeCompare(b));

    //3. Validar que el arreglo original sea identico al arreglo ordenado
    expect(actualTitles).toEqual(expectedTitles);



});