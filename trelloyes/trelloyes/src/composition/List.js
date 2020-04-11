import React from 'react'
import Card from './Card'
import './List.css';

function List(props) {
    const cardsArr = props.cards.map((card) =>
        <Card key={card.id} title={card.title} content={card.content}></Card>);
    return (
        <section className='List'>
            <header className='List-header'>{props.header}</header>
            <div className="List-cards">
                {cardsArr}
                <button
                    type='button'
                    className='List-add-button'
                >
                    + Add Random Card
        </button>
            </div>
        </section>
    )
}

export default List;
