import { test, expect } from '@playwright/test';

test('CA - Aplicar cupom expirado', async ({ page }) => {

  // 1. Acessar a loja
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');


  // 2. Adicionar produto ao carrinho
  await page
    .getByRole('article', { name: 'Tênis Casual Urbano' })
    .getByRole('button')
    .click();


  // 3. Acessar o carrinho
  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();


  // 4. Informar cupom expirado
  await page
    .getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('verao2026');


  // 5. Aplicar cupom
  await page
    .getByRole('button', { name: 'Aplicar cupom' })
    .click();


  // 6. Validar mensagem de erro
  await expect(
    page.getByText('Cupom expirado.')
  ).toBeVisible();

});