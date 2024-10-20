# Easesmith - React Developer Assignment

### Hosted Link:
[Visit the live site here](https://easesmith.vercel.app/)

---

## Overview

Welcome to my **Buy Plants Page**! This project was built as part of my React Developer interview assignment, where the goal was to convert a Figma design into a fully functional UI. The application is focused on delivering a clean, and user-friendly interface, while ensuring component reusability and effective state management.

---

## Key Features

- **Header Section**: Contains a search bar for searching products, along with icons for profile and cart.
- **Product Listing Section**:
  - Displays a grid of products, each containing:
    - Product Image
    - Product Name
    - Price
    - "View Product" and "Add to Cart" buttons
  - Clicking **"View Product"** redirects users to a custom "Thank You" page.
  - Clicking **"Add to Cart"** triggers a modal for product details and cart confirmation.
- **Add to Cart Modal**: This modal displays the selected product details and allows the user to confirm adding the product to their cart.
- **Pagination**: Functional pagination to navigate through multiple product listings using mock data.
- **Thank You Page**: After viewing a product, users are redirected to a custom Thank You page with a message that acknowledges their interest in the selected product.

---

## Technologies Used

- **ReactJS**: Component-based architecture, leveraging hooks and the Context API.
- **React Router**: For navigation between product listings and the custom "Thank You" page.
- **CSS/Styled Components**: For styling the UI to match the provided Figma design.
- **Mock Data**: Static data was used to simulate products for listing purposes.
- **Figma**: UI design inspiration.

---

## Approach

1. **Componentization**: The application was broken down into reusable components for better code maintainability and scalability. Major components include:
    - `Header`
    - `ProductCard`
    - `Pagination`
    - `AddToCartModal`
    - `ThankYouPage`
    - `Footer`
    
2. **State Management**: React hooks (`useState`, `useEffect`) and Context API were used for managing the product list, modal states, and pagination.

3. **Routing**: Implemented routing using `React Router` to handle navigation between the main product listing page and the custom "Thank You" page.

4. **Modals**: The "Add to Cart" modal was implemented using React state to manage its visibility and content dynamically, adhering closely to the Figma design.

---

## Challenges Faced

- **Component Reusability**: Structuring components to be modular and reusable while maintaining clean, readable code required careful planning and refactoring.
- **Modal Implementation**: Ensuring that the modal followed the exact design and functionality outlined in the Figma file, particularly the handling of product details within the modal.
- **Pagination**: Designing pagination to work seamlessly with mock data while maintaining a fluid user experience.

---

## How to Run the Project

1. Clone this repository:
   ```bash
   https://github.com/RabbanMehamood/Easesmith.git
2. Navigate to the project Directory:
   ```bash
   cd Easesmith
3. Install Dependencies:
   ```bash
   npm install
4. Run the Development Server:
   ```bash
   npm run dev
5. Open http://localhost:3000 in your browser to view the app.


---

## Future Enhancements:

- **Dynamic Product Data: Implement integration with a backend API to fetch real-time product information.**
- **Product Filters & Sorting: Add functionality for users to filter and sort products based on categories, price, or ratings.**
- **Enhanced Thank You Page: Design a more personalized "Thank You" page with product recommendations or next steps for users.**

---

## Conclusion:

- **This project was a great opportunity to work on a component-based architecture using React, manage state effectively, and create a seamless user experience. Feel free to explore the live version of the project and review the code for further insights!** 

---
## Thank you.

