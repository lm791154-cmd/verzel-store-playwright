import { test, expect } from '@playwright/test';

test('CA - Compra com cupom válido', async ({ page }) => {

  // ==========================================
  // 1. ACESSAR A LOJA
  // ==========================================

  await page.goto(
    'https://verzel-store.qa-test-verzel-store.workers.dev/'
  );


  // ==========================================
  // 2. ADICIONAR PRODUTO AO CARRINHO
  // ==========================================

  await page
    .getByRole('article', { name: 'Kit 3 Pares de Meias' })
    .getByRole('button')
    .click();


  // ==========================================
  // 3. ACESSAR O CARRINHO
  // ==========================================

  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();


  // ==========================================
  // 4. APLICAR CUPOM
  // ==========================================

  await page
    .getByRole('textbox', { name: 'Cupom de desconto' })
    .fill('bemvindo10');

  await page
    .getByRole('button', { name: 'Aplicar cupom' })
    .click();


  // ==========================================
  // 5. VALIDAR DESCONTO
  // ==========================================

 await expect(
  page.getByText(/Desconto \(BEMVINDO10\)/i)
).toBeVisible();


  // ==========================================
  // 6. FINALIZAR COMPRA
  // ==========================================

  await page
    .getByRole('link', { name: 'Finalizar compra' })
    .click();


  // ==========================================
  // 7. PREENCHER DADOS DO CLIENTE
  // ==========================================

  await page
    .getByRole('textbox', { name: 'Nome completo' })
    .fill('Severina Mendes');

  await page
    .getByRole('textbox', { name: 'E-mail' })
    .fill('severina.mendes@hotmail.com');

  await page
    .getByRole('textbox', { name: 'CEP' })
    .fill('04249-000');


  // ==========================================
  // 8. CONFIRMAR PEDIDO
  // ==========================================

  await page
    .getByRole('button', { name: 'Confirmar pedido' })
    .click();


  // ==========================================
  // 9. VALIDAR PEDIDO CONFIRMADO
  // ==========================================

  await expect(
    page.getByText(/Pedido confirmado/i)
  ).toBeVisible();


  // ==========================================
  // 10. VALIDAR ITEM DO PEDIDO
  // ==========================================

  await expect(
    page.getByRole('region', { name: 'Itens do pedido' })
  ).toBeVisible();

});