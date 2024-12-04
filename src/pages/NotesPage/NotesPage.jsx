import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import AddIcon from '@mui/icons-material/Add';

export default function NotesPage() {
  const [cards, setCards] = useState([
    { id: "1", name: "Зустріч з командою", text: "Обговорення нових функцій проекту.", color: "#FF5733" },
    { id: "2", name: "Важливий дедлайн", text: "Завершити звіт до кінця тижня.", color: "#33FF57" },
    { id: "3", name: "Відпустка", text: "Запланувати відпустку на серпень.", color: "#3357FF" },
    { id: "4", name: "Зворотній зв'язок від клієнта", text: "Отримати відгук про останній реліз.", color: "#FF33A6" },
    { id: "5", name: "Читати нову книгу", text: "Почати читати 'Вбити пересмішника'.", color: "#FFEA33" },
  ]);

  

  const [inputName, setInputName] = useState(""); 
  const [inputText, setInputText] = useState(""); 
  const [inputColor, setInputColor] = useState("#aabbcc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddCard = () => {
    if (inputName.trim() && inputText.trim()) { 
      setCards([
        ...cards,
        {
          id: Date.now().toString(),
          name: inputName, 
          text: inputText, 
          color: inputColor,
        },
      ]);
      setInputName(""); 
      setInputText(""); 
    }
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const filteredCards = cards.filter((card) => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    card.text.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Введіть назву нотатки"
          style={styles.input}
        />
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Введіть текст нотатки"
          style={styles.input}
        />
        <HexColorPicker color={inputColor} onChange={setInputColor} />
        <button onClick={handleAddCard} style={styles.addButton}>
          Додати <AddIcon color="error"/>
        </button>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Пошук за назвою або вмістом замітки"
        style={styles.searchInput}
      />

      <div style={styles.grid}>
        {filteredCards.map((card) => (
          <div key={card.id} style={{ ...styles.card, backgroundColor: card.color }}>
            <h3>{card.name}</h3>
            <p>{card.text}</p>
            <button onClick={() => handleDeleteCard(card.id)} style={styles.deleteButton}>
              Видалити
            </button>
          </div>




        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  searchInput: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "10px",
    width: "100%",
    maxWidth: "800px",
  },
  card: {
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    position: "relative",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#4A90E2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#E74C3C",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginTop: "10px",
  },
};
