import React from "react";
import WalletPage from "./components/WalletPage";
import MyWallet from "./components/MyWallet";
import PaymentSuccess from "./components/PaymentSuccess";
import Payment from "./components/Payment";
import NoticePage from "./components/NoticePage";
import CustomerServiceScreen from "./components/CustomerServiceScreen";
import MaintenancePage from "./components/MaintenancePage";

const App = () => {
  return (
    <div className="font-sans">
      {/* <WalletPage /> */}
      {/* <MyWallet /> */}
      {/* <PaymentSuccess /> */}
      {/* <Payment /> */}
      <NoticePage />
      <CustomerServiceScreen /> 
      <MaintenancePage /> 
    </div>
  );
};

export default App;
