import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}
