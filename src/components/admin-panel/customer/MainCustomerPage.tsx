import CustomerOverview from './CustomerOverview';
import AccountInfo from './AccountInfo';
import OrdersPlaced from './OrderPlace';

export default function MainCustomerPage() {
    return (
        <div className="container mx-auto p-6">
            <CustomerOverview />
            <AccountInfo />
            <OrdersPlaced />
        </div>
    );
}
