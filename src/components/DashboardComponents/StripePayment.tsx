import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { initStripe, StripeProvider } from "@stripe/stripe-react-native";
import StripeProviderComponent from "./StripeProvider";

const StripePayment = ({onValuesChange}) => {
  const [publishableKey, setPublishableKey] = useState("");

  const STRIPE_PUBLISHABLE_KEY ="pk_test_51JFTx2ELhasCFMKI2oqVyeeMrRREgFVWHxxQRRapQ0BPIEAooqbV0yhc8CfC7nNeEgRewIHTjDdMpiHe59iWs0xp006oFa5FtV";


  useEffect(() => {
    initStripe({
      publishableKey: STRIPE_PUBLISHABLE_KEY,
      merchantIdentifier: "merchant.identifier",
      urlScheme: "your-url-scheme",
    });
  }, []);

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <StripeProviderComponent onChangeMethod={onValuesChange}/>
    </StripeProvider>
  );
};

export default StripePayment;

const styles = StyleSheet.create({});
