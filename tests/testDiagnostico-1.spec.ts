import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://inclua2.ipea.gov.br/pre-diagnostico');
  await page.getByRole('banner').getByRole('listitem').filter({ hasText: 'Diagnóstico' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Diagnóstico' }).click();
  await page.getByRole('heading', { name: 'Diagnóstico', exact: true }).click();
  await page.getByText('Diagnóstico O diagnóstico visa identificar e avaliar riscos de desatenção, trata').click();
  await page.getByText('O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadeq').click();
  await page.getByText('Qualquer profissional, técnico ou gestor que atua com execução de políticas ou s').click();
});