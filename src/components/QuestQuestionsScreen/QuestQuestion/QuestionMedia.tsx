import { StyleSheet, Image } from "react-native";

const QuestionMedia = ({ media }) => {
  return (
    <Image
      resizeMode="cover"
      style={styles.image}
      source={{ uri: media.uri }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default QuestionMedia;
