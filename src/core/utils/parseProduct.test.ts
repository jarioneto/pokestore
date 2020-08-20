import parseProduct from './parseProduct';

describe('parseProduct utils', () => {
  test('Should parse product', () => {
    const product = {
      pokemon: {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/'
      }
    };

    const parsedProduct = parseProduct(product);

    expect(parsedProduct.id).toBe(6);
    expect(parsedProduct.price).toBe(60);
    expect(parsedProduct.discount).toBeGreaterThan(0);
    expect(parsedProduct.name).toBe('charizard');

    expect(parsedProduct.image).toBe(
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    );
  });
});
