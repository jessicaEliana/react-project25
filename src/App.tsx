import { useState } from "react";
import mostRequested from "./componentes/MostRequestedData"
import NavBar from "./componentes/NavBar";
import FilterableList from "./componentes/FilterableList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [likesCount, setLikesCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);


  return (
    <div>
      <NavBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        cartCount={likesCount}
        totalPrice={totalPrice}
      />
        
      <FilterableList
        data={mostRequested}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        likesCount={likesCount}
        setLikesCount={setLikesCount}
        totalPrice={totalPrice} 
        setTotalPrice={setTotalPrice}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
}

export default App;
