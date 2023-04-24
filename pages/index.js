import MainLayout from "@/layouts/MainLayout";
import GamesList from "@/components/GamesList";
import Select from "@/components/Select";
import SelectByPlatforms from "@/components/SelectByPlatforms";
import FiltersWrapper from "@/components/FiltersWrapper";


export default function Home({data, currentPage, pageSize, count, platforms}) {

    return (
        <MainLayout>
            <FiltersWrapper>
                <Select/>
                <SelectByPlatforms platforms={platforms}/>
            </FiltersWrapper>
            <GamesList count={count} currentPage={currentPage} pageSize={pageSize} games={data}/>
        </MainLayout>
    )
}

export const getServerSideProps = async (context) => {
    const {page = 1, page_size = 21, ordering = '-rating', platforms} = context.query;

    let apiUrl = `https://api.rawg.io/api/games?page=${page}&page_size=${page_size}&ordering=${ordering}&key=${process.env.NEXT_PUBLIC_MY_API_KEY}`

    if (platforms) {
        apiUrl += `&platforms=${platforms}`
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    const countResponse = await fetch(`https://api.rawg.io/api/games?&key=${process.env.NEXT_PUBLIC_MY_API_KEY}`);
    const count = await countResponse.json();

    const platformsResponse = await fetch(`https://api.rawg.io/api/platforms?&key=${process.env.NEXT_PUBLIC_MY_API_KEY}`);
    const platformsData = await platformsResponse.json();

    return {
        props: {
            data: data.results,
            currentPage: parseInt(page),
            pageSize: page_size,
            count: count.count,
            platforms: platformsData.results
        }
    }
}
