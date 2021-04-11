export enum OrderStatus{
    Not_Complete = 0,
    Payment_Done = 1,
    Accepted = 2,
    Rejected = 3,
    Cooking = 4,
    On_Way = 5,
    Delivered = 6
}

export enum ApprovalStatus{
    Pending = 0,
    Approved = 1,
    Rejected = 2
}

export enum AccountType{
    Customer = 0,
    Management = 2,
    Restaurant = 3,
    Agent = 4,
    None = 5
}
export enum AgentStatus{
    Available = 0,
    OnOrder = 1
}

export enum FoodType{
    Burger = 0,
    Pizza = 1,
    Rolls = 2,
    Chaat = 3,
    Momos = 4,
    Cake = 5,
    NorthIndianSnacks = 6,
    Chicken = 7,
    Fries = 8,
    Noodle = 9,
    Biryani = 10,
    Sub = 11,
    Kebabs = 12,
    Milkshakes = 13,
    Salad = 14,
    Soups = 15,
    Appetizers = 16,
    Fish = 17,
    VegMainCourse = 18,
    Sandwich = 19,
    NonVeg = 20,
    Dessert = 21,
    Beverage = 22
}