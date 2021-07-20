import Colors from "./Colors";

export default {
  filterBottomSheetData: [
    {
      title: "Rating -- Low to High",
      containerStyle: { backgroundColor: Colors.accentColor },
      titleStyle: { color: Colors.textColor },
      type: "ASC",
    },
    {
      title: "Rating -- High to Low",
      containerStyle: { backgroundColor: Colors.accentColor },
      titleStyle: { color: Colors.textColor },
      type: "DESC",
    },
    {
      title: "Close",
      containerStyle: { backgroundColor: Colors.accentColor },
      titleStyle: { color: Colors.primaryColor },
      type: "NONE",
    },
  ],
};
