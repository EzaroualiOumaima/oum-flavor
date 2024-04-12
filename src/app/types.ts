export interface Reservation {
 _id:string
    name: string;
    email: string;
    phone: string;
    reservationDate: string;
    reservationTime: string;
    numberOfPeople: number;
    specialRequests: string;
  }

export interface Contact {
  _id: string
  name : string,
  email: string,
  message : string
}

export interface Review {
  _id:string
  name : string,
  message : string,
  isShown :boolean
}

// Define a type for the dish
export interface Dish {
    _id: string;
    title: string;
    category: string;
    ingredients: string;
    price: number;
  }
  
  // Define the shape of your Redux store's state
