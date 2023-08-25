import { ScrollView } from "react-native";
import BottomBoxcard from "./components/BottomBoxcard";
import Bottomcards from "./components/Bottomcards";
import Middlecards from "./components/MiddleCards";
import TopBoxcard from "./components/TopBoxcard";
import Topcards from "./components/Topcards";
export default function App() {
  return (
   <ScrollView>
   <Topcards/>
   <TopBoxcard/>
   <Middlecards/>
   <Bottomcards/>
   <BottomBoxcard/>
   </ScrollView>
  );
}

