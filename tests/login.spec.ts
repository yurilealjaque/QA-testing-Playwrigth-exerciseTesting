import {test,expect} from "@playwright/test" 

test("TC01 - login happy path",async({page})=>{
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


});