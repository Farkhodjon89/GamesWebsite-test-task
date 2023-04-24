import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import ImageSlider from "@/components/ImageSlider";
import styled from "styled-components";
import Link from "next/link";

const GameTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    font-size: 34px;
    font-weight: 700;
  }
`

const GameDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  margin-top: 40px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

const StyledLink = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const GamePage = ({data, screenshots}) => {

    return (
        <MainLayout>
            <GameTitle>{data.name}</GameTitle>
            <Link href={data?.website}>
                <StyledLink>{data?.website}</StyledLink>
            </Link>
            <ImageSlider images={screenshots}/>
            <GameDescription>{data.description}</GameDescription>
        </MainLayout>
    );
};

export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://api.rawg.io/api/games/${params.slug}?key=${process.env.NEXT_PUBLIC_MY_API_KEY}`);
    const data = await response.json();

    const screenshotsResponse = await fetch(`https://api.rawg.io/api/games/${params.slug}/screenshots?key=${process.env.NEXT_PUBLIC_MY_API_KEY}`);
    const screenshotsData = await screenshotsResponse.json();

    return {
        props: {
            data,
            screenshots: screenshotsData.results
        }
    }
}

export default GamePage;