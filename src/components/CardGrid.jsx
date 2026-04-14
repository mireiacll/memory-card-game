import Card from "./Card";

function CardGrid({ cards, handleCardClick }) {
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default CardGrid;