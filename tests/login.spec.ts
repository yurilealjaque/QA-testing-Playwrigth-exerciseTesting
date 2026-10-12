import {test,expect} from "@playwright/test" 

test("TC01 - login happy path",async({page})=>{
    // Paso 1 --> Abrir la URL
    await page.goto("https://practicesoftwaretesting.com/");
    //validad que el titulo corresponda a apal pagina que se habrio

    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

    // Paso 2 ----> Click en iniciar sesion 

    await page.getByTestId("nav-sing-in").click();


    //Paso 3 ---> completar usuario y password

    // Paso 4 ---> clic en iniciar sesion




});