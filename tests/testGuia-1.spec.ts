import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/pre-diagnostico');
  await page.locator('.col-md-2').first().click();
  await page.locator('.col-md-6').first().click();
  await page.getByRole('main').getByRole('link', { name: 'Guias' }).click();
  await page.getByText('Diagnóstico O diagnóstico visa identificar e avaliar riscos de desatenção, trata').click();
  await page.getByRole('main').click();
});