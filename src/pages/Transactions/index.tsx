import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styled";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/01/2024</td>
            </tr>
            <tr>
              <td width="50%">Pastel</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 15,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>21/01/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}