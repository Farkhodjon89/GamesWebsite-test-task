import React from 'react';
import styled from "styled-components";
import Image from 'next/image';
import Link from "next/link";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  max-width: 350px;
  position: relative;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

`

const Title = styled.p`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
`

const Rating = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 700;
`

const Released = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 700;
`


const GameCard = ({game}) => {

    return (
        <Link href={`/game/${game.id}`}>
            <Card>
                {game.background_image ? (
                    <Image
                        alt={game.name}
                        width={350}
                        height={300}
                        src={game.background_image}
                    />
                ) : null}
                <CardInfo>
                    <Title>{game.name}</Title>
                    <Rating>Рейтинг: {game.rating}</Rating>
                    <Released>Дата релиза: {game.released}</Released>
                </CardInfo>
            </Card>
        </Link>
    );
};

export default GameCard;