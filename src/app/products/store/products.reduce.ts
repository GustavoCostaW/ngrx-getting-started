const initialState = {
  loading: false,
  error: undefined,
  data: [],
  currentProduct: undefined
};

export function reducer(
  state = initialState,
  action
) {

  switch (action.type) {
    case '[Products] Add Product':

    const newProductsList = [...state.data, action.payload];

    return {
      data: newProductsList
    };


    case '[Products] Edit Product':

    const updatedProduct = {...action.payload.data, id: action.payload.id};

    const productsListEditted = state.data.map( product => {
      return product.id !== updatedProduct.id ? product : updatedProduct;
    });


    return {
      ...state,
      data: productsListEditted,
      currentProduct: updatedProduct
    };

    case '[Products] Load Product by Id':

    const currentProduct = state.data.find( product => {
      return product.id === parseInt(action.payload, 10 );
    });


    return {
      ...state,
      currentProduct: currentProduct
    };


    case '[Products] Remove Product':

    const newProducts = state.data.filter( product => {
      return product.id !== action.payload;
    });

    return {
      ...state,
      data: newProducts
    };

    default:

    return state;

  }
}
