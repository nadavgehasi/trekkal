import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  title: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "dimgrey",
    marginRight: 0,
    marginLeft: 0,
    alignSelf: "center",
  },
  categoryContainer: {
    marginTop: 35,
    paddingHorizontal: 24,
    borderColor: 'white',
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
  },
  inputWithTitle: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start"
  },
  pieChartView: {
    alignSelf: "center"
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: "right",
    color: Colors.grey,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.grey,
  },
  highlight: {
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    margin: 25,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    textAlign: "center",
    alignSelf: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "black",
    height: 40,
    width: 80,
    margin: 10,
  }
});

export default styles;