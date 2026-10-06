import { test, expect } from '@playwright/test';

test('Compra com sucesso', async ({ page }) => {

    // ==========================================
    // 1. ACESSAR A LOJA
    // ==========================================

    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');


    // ==========================================
    // 2. ADICIONAR PRODUTOS AO CARRINHO
    // ==========================================

    await page
        .getByRole('article', { name: /Camiseta Essencial/i })
        .getByRole('button', { name: 'Adicionar ao carrinho' })
        .click();

    await page
        .getByRole('article', { name: /Calça Jeans Slim/i })
        .getByRole('button', { name: 'Adicionar ao carrinho' })
        .click();


    // ==========================================
    // 3. ACESSAR O CARRINHO
    // ==========================================

    await page
        .getByRole('link', { name: 'Carrinho 2 itens no carrinho' })
        .click();


    // ==========================================
    // 4. FINALIZAR COMPRA
    // ==========================================

    await page
        .getByRole('link', { name: 'Finalizar compra' })
        .click();


    // ==========================================
    // 5. PREENCHER DADOS DO CLIENTE
    // ==========================================

    await page
        .getByRole('textbox', { name: 'Nome completo' })
        .fill('Charlotte Mendes');

    await page
        .getByRole('textbox', { name: 'E-mail' })
        .fill('charlotte.mendes@hotmail.com');

    await page
        .getByRole('textbox', { name: 'CEP' })
        .fill('04249-520');


    // ==========================================
    // 6. CONFIRMAR PEDIDO
    // ==========================================

    await page
        .getByRole('button', { name: 'Confirmar pedido' })
        .click();


    // ==========================================
    // 7. VALIDAR RESULTADO
    // ==========================================

    await expect(page.locator('#conteudo-principal'))
        .toBeVisible();

});