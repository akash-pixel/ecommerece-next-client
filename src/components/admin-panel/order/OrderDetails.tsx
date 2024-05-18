export default function OrderDetails() {
    const orderDetails = [
        { product: 'Wooden Chair', material: 'Wooden', price: 841, qty: 2, total: 1682 },
        { product: 'Oneplus 10', storage: '128gb', price: 896, qty: 3, total: 2688 },
        { product: 'Nike Jordan', size: '8UK', price: 392, qty: 1, total: 392 },
        { product: 'Face cream', gender: 'Women', price: 813, qty: 2, total: 1626 },
    ];

    const subtotal = orderDetails.reduce((acc, item) => acc + item.total, 0);
    const discount = 22;
    const tax = 30;
    const total = subtotal - discount + tax;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order details</h2>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
                <thead>
                    <tr>
                        <th className="py-2 text-left">PRODUCTS</th>
                        <th className="py-2 text-left">PRICE</th>
                        <th className="py-2 text-left">QTY</th>
                        <th className="py-2 text-left">TOTAL</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orderDetails.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2">{item.product}</td>
                            <td className="py-2">{`$${item.price}`}</td>
                            <td className="py-2">{item.qty}</td>
                            <td className="py-2">{`$${item.total}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center">
                <div>
                    <p>Subtotal: ${subtotal}</p>
                    <p>Discount: -${discount}</p>
                    <p>Tax: +${tax}</p>
                </div>
                <p className="text-xl font-semibold">Total: ${total}</p>
            </div>
        </div>
    );
}
