import LocalizedStrings from "react-localization";

const localizedStrings = {
  en: {
    appTitle: "BSC Notes App",
    changeLanguageButton: "Change language:",
    noteListTitle: "Note List"
  },
  cs: {
    appTitle: "BSC poznámková aplikace",
    changeLanguageButton: "Změnit jazyk:",
    noteListTitle: "Seznam poznámek"
  }
};

export default new LocalizedStrings(localizedStrings);
