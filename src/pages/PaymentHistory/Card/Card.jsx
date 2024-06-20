/* eslint-disable react/prop-types */
function Card({ payment }) {
  return (
    <tbody className="py-6">
      <tr className="border-b">
        <td className="px-3 py-2">{payment?.transactionID}</td>
        <td className="px-3 py-2">{payment?.amount}</td>
        <td className="px-3 py-2">{payment?.tran_date}</td>
        <td className="px-3 py-2">{payment?.card_issuer}</td>
      </tr>
    </tbody>
  );
}

export default Card;
