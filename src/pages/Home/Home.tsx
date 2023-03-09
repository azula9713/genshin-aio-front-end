import AllCharacterShowcase from "../../components/Home/AllCharacterShowcase";
import ElementalPicker from "../../components/Home/ElementalPicker";
import Header from "../../components/Layout/Header";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden px-4 md:px-12">
      <Header />
      <ElementalPicker />
      <AllCharacterShowcase />
    </div>
  );
}
