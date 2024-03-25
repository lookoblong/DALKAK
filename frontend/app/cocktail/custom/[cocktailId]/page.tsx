import CustomCocktailList from '@/components/custom-cocktail/list/CustomCocktailList';

export default function Page({ params }: { params: { cocktailId: string } }) {
  const { cocktailId } = params;
  return (
    <div>
      <CustomCocktailList cocktailId={cocktailId} />
    </div>
  );
}

export async function generateStaticParams() {
  const dummyCocktailId = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];

  return dummyCocktailId.map((cocktail) => ({
    cocktailId: cocktail.id.toString(),
  }));
}
