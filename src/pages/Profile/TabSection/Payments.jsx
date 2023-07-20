import styled from "styled-components";
const PaymentWrapper = styled.div`
  & table {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #dfe4ea;

    border-collapse: collapse;
    & thead {
      & th {
        color: #f75c03;
        font-size: 18px;
        font-weight: 600;
      }
      & th:last-child {
        text-align: center;
      }
    }
    & tbody {
      & td {
        color: #0a2540;
        font-size: 14px;
        font-weight: 400;
      }
      & :is(td:last-child, td:nth-last-child(2)) {
        text-align: center;
      }
    }
    & tr {
      border-bottom: 1px solid #dfe4ea;
    }
    & :is(th, td) {
      text-align: start;
      padding: 25px;
    }
  }
  @media screen and (1000px <= width <= 1140px) {
    & table {
      & :is(th, td) {
        text-align: start;
        padding: 25px 5px;
      }
    }
  }
  @media screen and (max-width: 690px) {
    & table {
      & :is(th, td) {
        text-align: start;
        padding: 10px 5px;
      }
    }
  }
  @media screen and (max-width: 530px) {
    & table {
      & thead {
        & th {
          font-size: 12px;
        }
      }
      & tbody {
        & td {
          font-size: 9px;
        }
        & :is(td:last-child, td:nth-last-child(2)) {
          text-align: center;
        }
      }
      & :is(th, td) {
        text-align: start;
        padding: 6px 3px;
      }
    }
  }
`;
export const Payments = () => {
  return (
    <PaymentWrapper className="profile__pages__payments">
      <table>
        <thead>
          <tr>
            <th>Kateqoriya</th>
            <th>Paket</th>
            <th>Price</th>
            <th colSpan={2}>Etibarlılıq</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ekonom</td>
            <td>Test</td>
            <td>35 AZN</td>
            <td>17.01.2023</td>
            <td>20.01.2023</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>10 günlük</td>
            <td>200 AZN</td>
            <td>10.01.2023</td>
            <td>20.01.2023</td>
          </tr>
          <tr>
            <td>Ekonom</td>
            <td>20 günlük</td>
            <td>150 AZN</td>
            <td>01.01.2023</td>
            <td>20.01.2023</td>
          </tr>
        </tbody>
      </table>
    </PaymentWrapper>
  );
};
