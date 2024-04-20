'use client';

import { LoremIpsum } from 'lorem-ipsum';
import { v4 } from 'uuid';

import { CheckoutDTO } from './dtos/CheckoutDTO';
import { ProductDTO } from './dtos/ProductDTO';
import { UserDTO } from './dtos/UserDTO';
import SignInCredentialsDTO from './providers/auth/dtos/SignInCredentialsDTO';

type FakeApiUser = UserDTO & { password: string };

const Substantivos = [
  'Armário',
  'Navio',
  'Mala',
  'Base',
  'Hidroavião',
  'Revista',
  'Carretel',
  'Minissaia',
  'Tamborim',
  'Andador',
  'Geladeira',
  'Estátua',
  'Rolo',
  'Crachá',
  'Peneira',
  'Bafômetro',
  'Desentupidor',
  'Guarda-chuva',
  'Espanador',
  'Escudo',
  'Raquete',
  'Vaso sanitário',
  'Lancheira',
  'Cofre',
  'Helióstato',
  'Medalha',
  'Foguete',
  'Lata',
  'Sintetizador',
  'Grampo',
  'Bucha',
  'Catraca',
  'Alfinete',
  'Caneca',
  'Fita',
  'Moeda',
  'Gel',
  'Maquete',
  'Interfone',
  'Gaveta',
  'Helicóptero',
  'Velade cera',
  'Quimono',
  'Bambolê',
  'Necessaire',
  'Machado',
  'Tecido',
  'Vareta de freio',
  'Obra dearte',
  'Canga',
];

const Adjetivos = [
  'prepotente',
  'valioso',
  'legítimo',
  'desleixado',
  'Natural',
  'inteligente',
  'disciplinado',
  'louvável',
  'amargurado',
  'honesto',
  'odioso',
  'vergonhoso',
  'horroroso',
  'magnífico',
  'gordo',
  'romântico',
  'sublime',
  'mesquinho',
  'injusto',
  'medroso',
  'otário',
  'quente',
  'intenso',
  'Sábio',
  'zeloso',
  'desapegado',
  'faceiro',
  'companheiro',
  'empenhado',
  'espantoso',
  'traidor',
  'perfeccionista',
  'Qualificado',
  'feio',
  'tolerante',
  'orgulhoso',
  'ignorante',
  'lutador',
  'desejado',
  'exigente',
  'nostálgico',
  'próspero',
  'compreensivo',
  'excelente',
  'estourado',
  'malvado',
  'windsurfista',
  'verdadeiro',
  'melhor',
  'terno',
];

const apiFactory = () => {
  const lorem = new LoremIpsum({});

  const values: ProductDTO[] = [];
  let users: FakeApiUser[] | null = null;

  const substantivos = [...Substantivos];
  const adjetivos = [...Adjetivos];
  const combinations: Record<string, Set<string>> = {};

  for (const element of substantivos) {
    combinations[element] = new Set();
  }

  function sync() {
    if (!users) {
      const usersString = localStorage.getItem('@AcmeIncFake:users');

      if (!usersString) {
        localStorage.setItem('@AcmeIncFake:users', '[]');
      } else {
        users = JSON.parse(usersString);
      }
    }
  }

  function* generateName() {
    while (Object.keys(combinations).length > 0) {
      const randomIndex1 = Math.floor(Math.random() * substantivos.length);
      const substantivo = substantivos[randomIndex1];

      const remainingArray2 = adjetivos.filter(
        (adjetivo) => !combinations[substantivo].has(adjetivo),
      );

      if (remainingArray2.length > 0) {
        const randomIndex2 = Math.floor(Math.random() * remainingArray2.length);
        const adjetivo = remainingArray2[randomIndex2];

        combinations[substantivo].add(adjetivo);
        yield `${substantivo} ${adjetivo}`;
      } else {
        substantivos.splice(randomIndex1, 1);
        delete combinations[substantivo];
      }
    }

    return null;
  }

  function* generateNameWithFilter(filter: string) {
    const formattedFilter = filter.toLocaleLowerCase();

    const substantivosValidos = substantivos.filter((substantivo) =>
      substantivo.toLocaleLowerCase().includes(formattedFilter),
    );
    const substantivosInvalidos = substantivos.filter(
      (substantivo) =>
        !substantivo.toLocaleLowerCase().includes(formattedFilter),
    );

    const adjetivosInvalidos = adjetivos.filter(
      (adjetivo) => !adjetivo.toLocaleLowerCase().includes(formattedFilter),
    );

    const validCombinations = substantivosInvalidos.reduce(
      (acc, substantivo) => {
        const newCombinations = new Set([
          ...Array.from(combinations[substantivo]),
          ...adjetivosInvalidos,
        ]);

        if (newCombinations.size >= adjetivos.length) {
          delete acc[substantivo];
          return acc;
        }

        acc[substantivo] = newCombinations;
        substantivosValidos.push(substantivo);

        return acc;
      },
      { ...combinations },
    );

    while (Object.keys(validCombinations).length > 0) {
      const randomIndex1 = Math.floor(
        Math.random() * substantivosValidos.length,
      );
      const substantivo = substantivosValidos[randomIndex1];

      const remainingArray2 = adjetivos.filter(
        (adjetivo) => !validCombinations[substantivo].has(adjetivo),
      );

      if (remainingArray2.length > 0) {
        const randomIndex2 = Math.floor(Math.random() * remainingArray2.length);
        const adjetivo = remainingArray2[randomIndex2];

        combinations[substantivo].add(adjetivo);
        validCombinations[substantivo].add(adjetivo);
        yield `${substantivo} ${adjetivo}`;
      } else {
        substantivosValidos.splice(randomIndex1, 1);
        delete validCombinations[substantivo];
      }
    }

    return null;
  }

  function createProduct({
    id,
    generator,
  }: {
    id?: string;
    generator: Generator<string, null, unknown>;
  }) {
    const productName = generator.next().value;

    if (!productName) {
      return null;
    }

    const productId = id ? id : v4();

    const descriptionLenght = Math.floor(Math.random() * (500 - 20 + 1)) + 20;
    const description = lorem
      .generateWords(300)
      .substring(0, descriptionLenght);

    const nameLenght = productName.split(' ').length;

    const newProduct = {
      id: productId,
      name: productName,
      imagePreviewURL: `https://picsum.photos/seed/${productId}/230/190`,
      imageURL: `https://picsum.photos/seed/${productId}/690/570`,
      description: description,
      value:
        10 +
        nameLenght *
          ((500 - descriptionLenght) /
            (4 - (nameLenght >= 4 ? 1 : nameLenght))),
    };

    return newProduct;
  }

  async function getProducts({
    limit,
    page,
    filter,
  }: {
    limit: number;
    page: number;
    filter?: string;
  }) {
    console.info('[FakeAPI] Getting products...');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startPage = limit * page;

    const generator = filter ? generateNameWithFilter(filter) : generateName();

    const formattedFilter = filter?.toLocaleLowerCase();
    const filtredValues =
      formattedFilter ?
        values.filter((value) =>
          value.name.toLocaleLowerCase().includes(formattedFilter),
        )
      : [...values];

    while (filtredValues.length < startPage + limit) {
      const newProduct = createProduct({
        generator,
      });

      if (!newProduct) {
        break;
      }

      values.push(newProduct);
      filtredValues.push(newProduct);
    }

    return filtredValues.slice(startPage, startPage + limit);
  }

  async function getProductById(id: string) {
    const productFound = values.find((value) => value.id === id);

    if (productFound) {
      return productFound;
    }

    const newProduct = createProduct({
      generator: generateName(),
      id,
    });

    if (!newProduct) {
      throw new Error('Product not found');
    }

    values.push(newProduct);
    return newProduct;
  }

  async function login({
    username,
    password,
  }: SignInCredentialsDTO): Promise<UserDTO> {
    sync();

    const user = users!.find((user) => {
      return user.username === username && user.password === password;
    });

    if (!user) {
      throw Error('User not found');
    }

    return {
      id: user.id,
      name: user.name,
      username: user.username,
    };
  }

  async function register({
    name,
    username,
    password,
  }: Omit<FakeApiUser, 'id'>): Promise<UserDTO> {
    sync();

    const user = users!.find((user) => {
      return user.username === username;
    });

    if (user) {
      throw Error('User already exists');
    }

    const newUser: FakeApiUser = {
      id: v4(),
      name,
      username,
      password,
    };

    users!.push(newUser);
    localStorage.setItem('@AcmeIncFake:users', JSON.stringify(users));

    return {
      id: newUser.id,
      name: newUser.name,
      username: newUser.username,
    };
  }

  async function updateUser({ id, name, username }: UserDTO): Promise<UserDTO> {
    sync();

    const userIndex = users!.findIndex((user) => {
      return user.id === id;
    });

    if (userIndex < 0) {
      throw Error('User not found');
    }

    users![userIndex].name = name;
    users![userIndex].username = username;

    localStorage.setItem('@AcmeIncFake:users', JSON.stringify(users));

    return {
      id: id,
      name: name,
      username: username,
    };
  }

  function syncCart() {
    const cartString = localStorage.getItem('@AcmeIncFake:cart');

    if (!cartString) {
      localStorage.setItem('@AcmeIncFake:cart', '[]');

      return [];
    }

    return JSON.parse(cartString) as Array<{
      id: string;
      quantity: number;
    }>;
  }

  function syncFavorite() {
    const favoriteString = localStorage.getItem('@AcmeIncFake:favorite');

    if (!favoriteString) {
      localStorage.setItem('@AcmeIncFake:cart', '[]');

      return [];
    }

    return JSON.parse(favoriteString) as Array<string>;
  }

  async function addProduct(productId: string) {
    const cart = syncCart();

    const productCartIndex = cart.findIndex(({ id }) => id === productId);

    if (productCartIndex < 0) {
      cart.push({
        id: productId,
        quantity: 1,
      });
    } else {
      cart[productCartIndex].quantity++;
    }

    localStorage.setItem('@AcmeIncFake:cart', JSON.stringify(cart));
  }

  async function removeQuantity(productId: string) {
    const cart = syncCart();

    const productCartIndex = cart.findIndex(({ id }) => id === productId);

    if (productCartIndex >= 0 && cart[productCartIndex].quantity > 1) {
      cart[productCartIndex].quantity--;
    }

    localStorage.setItem('@AcmeIncFake:cart', JSON.stringify(cart));
  }

  async function removeProduct(productId: string) {
    const cart = syncCart();

    const productCartIndex = cart.findIndex(({ id }) => id === productId);

    if (productCartIndex >= 0) {
      localStorage.setItem(
        '@AcmeIncFake:cart',
        JSON.stringify(cart.filter((cart) => cart.id !== productId)),
      );
    }
  }

  async function getCartProducts(): Promise<CheckoutDTO[]> {
    const cart = syncCart();

    const checkoutProductsPromise: Array<Promise<CheckoutDTO>> = cart.map(
      async ({ id, quantity }) => {
        const product = await getProductById(id);

        return {
          product,
          quantity,
        };
      },
    );

    const checkoutProducts = await Promise.all(checkoutProductsPromise);

    return checkoutProducts;
  }

  async function finishPurchase() {
    const cart = await getCartProducts();

    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(cart, null, '\t'));

    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'produtos.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    localStorage.setItem('@AcmeIncFake:cart', '[]');
  }

  async function toggleProductFavorite(productId: string) {
    const favorite = syncFavorite();

    const productIndex = favorite.findIndex((id) => id === productId);

    if (productIndex < 0) {
      favorite.push(productId);
      localStorage.setItem('@AcmeIncFake:favorite', JSON.stringify(favorite));
    } else {
      localStorage.setItem(
        '@AcmeIncFake:favorite',
        JSON.stringify(favorite.filter((id) => id === productId)),
      );
    }
  }

  async function getFavoriteProducts(): Promise<ProductDTO[]> {
    const favorite = syncFavorite();

    const productsPromise = favorite.map(async (id) => {
      const product = await getProductById(id);

      return product;
    });

    const products = await Promise.all(productsPromise);

    return products;
  }

  return {
    getProducts,
    getProductById,
    login,
    register,
    updateUser,
    getCartProducts,
    addProduct,
    removeQuantity,
    removeProduct,
    finishPurchase,
    toggleProductFavorite,
    getFavoriteProducts,
  };
};

export const api = apiFactory();
