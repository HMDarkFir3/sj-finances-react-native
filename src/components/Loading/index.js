//React
import React from "react";

//Lottie
import LottieView from "lottie-react-native";

//Style
import { styles, Container } from "./styles";

//Animation
import loadingAnimation from "../../assets/animations/loading.json";

export default function Loading() {
  return (
    <Container>
      <LottieView
        style={styles.loadingAnimation}
        source={loadingAnimation}
        autoPlay={true}
        loop={true}
      />
    </Container>
  );
}
