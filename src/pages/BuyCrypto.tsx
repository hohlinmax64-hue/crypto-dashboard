import AvailableBalance from "../components/BuyCrypto/AvailableBalance.tsx";
import ChooseAssets from "../components/BuyCrypto/ChooseAssets.tsx";
import PurchaseDetails from "../components/BuyCrypto/PurchaseDetails.tsx";
import RecentTransactions from "../components/BuyCrypto/RecentTransactions.tsx";


export default function BuyCrypto() {

    return (
        <>
            <AvailableBalance />
            <div className='flex gap-5 my-6'>
                <ChooseAssets />
                <PurchaseDetails />
            </div>
            <RecentTransactions />
        </>
    )
}