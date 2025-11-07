import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const formErros = useActionData();
  console.log('formErros', formErros);
  const navigation = useNavigation();
  console.log('navigation', navigation);
  const isSubmitting = navigation.state === 'submitting';
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="p-4">
      <h2>Ready to order? Let's go!</h2>
      {/* <Form method="POST" action='/order/new'></Form> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {formErros && formErros.phone && <p>{formErros.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              className="input"
              type="text"
              name="address"
              placeholder="your address"
              required
            />
          </div>
        </div>

        <div>
          <input
            className="h-6 w-6 accent-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-opacity-50 focus:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" value={JSON.stringify(cart)} name="cart" />
        <div></div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = 'Invalid phone number';
  if (Object.keys(errors).length > 0) return errors;

  //   const newOrder = await createOrder(order);
  //   console.log('newOrder', newOrder);
  //   return redirect(`/order/${newOrder.id}`);
  // }
  return null;
}

export default CreateOrder;
