import { ref } from 'vue';

export function useCart() {
  const cart = ref([]);

  function addToCart(product) {
    cart.value.push(product);
  }

  function removeFromCart(index) {
    cart.value.splice(index, 1);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}