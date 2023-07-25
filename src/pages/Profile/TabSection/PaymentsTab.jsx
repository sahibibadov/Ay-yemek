import { map } from "lodash";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

const PaymentWrapper = styled(motion.div)`
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
const EmptyPayment = styled.h3`
  text-align: center;
  display: block;
  color: #f75c03;
  font-size: 25px;
  font-weight: 600;
  margin-top: 50px;
  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;
export const PaymentsTab = () => {
  const { paymentCart } = useSelector((state) => state.cart);
  // const [day, totalPrice, category, orderDates] = paymentCart;

  return (
    <PaymentWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="profile__pages__payments"
    >
      {paymentCart.length > 0 ? (
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
            {map(paymentCart, (item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.dayPackage} günlük</td>
                <td>{item.totalPrice} AZN</td>
                <td>{item.startCurrentDate}</td>
                <td>{item.endCurrentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <EmptyPayment>Ödəniş Tapılmadı</EmptyPayment>
      )}
    </PaymentWrapper>
  );
};
