/* eslint-disable react/prop-types */
function Card({ payment }) {
  return (
    <tbody>
      <tr className="border-b">
        <td className="px-3 py-2">{payment?.id}</td>
        <td className="px-3 py-2">{payment?.amount}</td>
        <td className="px-3 py-2">{payment?.date}</td>
        <td className="px-3 py-2">{payment?.method}</td>
      </tr>
    </tbody>
  );
}

export default Card;
