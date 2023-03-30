import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/pre-diagnostico');
  await page.locator('div').filter({ hasText: 'Ir para o Conteúdo [1] Ir para o Menu [2] Ir para a busca [3] Ir para o rodapé [' }).nth(3).click();
  await page.getByRole('link', { name: 'Ir para a busca [3]' }).click();
  await page.getByRole('link', { name: 'Ir para o Menu [2]' }).click();
  await page.locator('#acessibilidade').click();
});