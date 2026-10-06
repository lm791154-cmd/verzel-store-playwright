# 🧪 Verzel Store - Testes Automatizados

Projeto de automação de testes E2E realizado na aplicação **Verzel Store**, utilizando **Playwright** e **JavaScript**.

O objetivo do projeto é praticar e demonstrar conhecimentos em **Quality Assurance (QA)**, automação de testes, criação de cenários, validações e utilização do Git/GitHub.

---

## 🚀 Tecnologias utilizadas

- JavaScript
- Node.js
- Playwright
- Git
- GitHub
- GitHub Actions (próxima etapa)

---

## 📋 Objetivo do projeto

Automatizar os principais fluxos da loja virtual, validando comportamentos esperados e situações de erro.

Entre os cenários trabalhados estão:

- Acesso à loja
- Seleção de produtos
- Adição de produtos ao carrinho
- Acesso ao carrinho
- Aplicação de cupom válido
- Validação de cupom expirado
- Finalização da compra
- Preenchimento dos dados do cliente
- Confirmação do pedido
- Validação dos resultados esperados

---

# 🧪 Cenários de teste

## CA01 - Compra com cupom válido

### Objetivo

Validar se o usuário consegue realizar uma compra utilizando um cupom de desconto válido.

### Fluxo

1. Acessar a loja.
2. Selecionar um produto.
3. Adicionar o produto ao carrinho.
4. Acessar o carrinho.
5. Informar o cupom `bemvindo10`.
6. Aplicar o cupom.
7. Validar a aplicação do desconto.
8. Finalizar a compra.
9. Preencher os dados do cliente.
10. Confirmar o pedido.
11. Validar a confirmação do pedido.

### Resultado esperado

O cupom deve ser aplicado corretamente e o pedido deve ser confirmado com sucesso.

---

## CA02 - Cupom expirado

### Objetivo

Validar o comportamento do sistema ao tentar utilizar um cupom expirado.

### Fluxo

1. Acessar a loja.
2. Selecionar um produto.
3. Adicionar o produto ao carrinho.
4. Acessar o carrinho.
5. Informar o cupom `verao2026`.
6. Aplicar o cupom.
7. Validar a mensagem apresentada pelo sistema.

### Resultado esperado

O sistema deve informar:

> Cupom expirado.

O desconto não deve ser aplicado.

---

# 🛠️ Configuração do projeto

## 1. Criar o projeto

Foi criado um projeto utilizando Node.js e Playwright.

O Playwright foi instalado através do comando:

```bash
npm init playwright@latest
