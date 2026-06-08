const btnMenu = document.querySelector("#btn-sidebar");
const sidebar = document.querySelector(".sidebar");

btnMenu.addEventListener("click", () => {
  sidebar.classList.toggle("aberto");
});


//Pega as datas para o filtro e depois mostra as movimentacoes
const dataInicial = document.querySelector("#dataInicial");
const dataFinal = document.querySelector("#dataFinal");
const btnFiltro = document.querySelector("#btnPesquisar");

const resultado = document.querySelector("#resultado");

btnFiltro.addEventListener("click", async () => {
  const respostaFiltro = await fetch("http://localhost:8000/filtrarData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      datainicial: dataInicial.value,
      datafinal: dataFinal.value,
    }),
  });

  if (!respostaFiltro.ok) {
    console.error("Erro na requisição");
    return;
  }

  const dados = await respostaFiltro.json();

  resultado.innerHTML = `
<table>
    <thead>
        <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>
        ${dados
          .map(
            (item) => `
            <tr>
                <td>${item.data}</td>
                <td>${item.descricao}</td>
                <td>R$ ${item.valor}</td>
            </tr>
        `,
          )
          .join("")}
    </tbody>
</table>
`;
}); //fim