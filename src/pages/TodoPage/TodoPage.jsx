import { useState } from "react";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import AddIcon from '@mui/icons-material/Add';
import FiberNewIcon from '@mui/icons-material/FiberNew';


export default function HomePage() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all"); 

  const handleAddItem = () => {
    if (inputText.trim()) {
      setItems([...items, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const toggleComplete = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

 
  const filteredItems = items.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "new") return !item.completed;
    return true; 
  });

  return (
    <div style={styles.container}>



<h1 style={{ fontSize: "1.8rem", color: "red", marginBottom: "20px" }}>
  Список Нотаток
</h1>


      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Введіть нову нотатку"
          style={styles.input}
        
        />

        <button onClick={handleAddItem} style={styles.addButton}>
          Додати  <AddIcon color="error"/>
        </button>
      </div>

     
      <div style={styles.filterContainer}>
        <button
          onClick={() => setFilter("all")}
          style={filter === "all" ? styles.activeFilter : styles.filterButton}
        >
          Всі
        </button>
        <button
          onClick={() => setFilter("new")}
          style={filter === "new" ? styles.activeFilter : styles.filterButton}
        >
          Нові <FiberNewIcon/>
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={filter === "completed" ? styles.activeFilter : styles.filterButton}
        >
          Завершені
        </button>
      </div>

      <ul style={styles.list}>
        {filteredItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <span
              onClick={() => toggleComplete(index)}
              style={{
                ...styles.itemText,
                textDecoration: item.completed ? "line-through" : "none",
                color: item.completed ? "#888" : "#333",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => handleDeleteItem(index)} style={styles.deleteButton}>
              Видалити   <RestoreFromTrashIcon/>
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f0f2f5",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "500px",
    margin: "auto",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#4A90E2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontSize: "1rem",
  },
  filterContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  filterButton: {
    padding: "10px 15px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  activeFilter: {
    padding: "10px 15px",
    backgroundColor: "#4A90E2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    width: "100%",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  itemText: {
    fontSize: "1rem",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "6px 12px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};


styles.addButton = {
  ...styles.addButton,
  ":hover": {
    backgroundColor: "#357ABD",
  },
};

styles.deleteButton = {
  ...styles.deleteButton,
  ":hover": {
    backgroundColor: "#ff3333",
  },
};

styles.listItem = {
  ...styles.listItem,
  ":hover": {
    transform: "scale(1.03)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
};
