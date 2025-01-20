let xAxisData = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 99_000 },
  { name: "Mar", sale: 12_090 },
  { name: "Apr", sale: 112_000 },
  { name: "May", sale: 54_000 },
  { name: "Jun", sale: 85_000 },
  { name: "Jul", sale: 34_000 },
  { name: "Agu", sale: 18_598 },
  { name: "Sep", sale: 0 },
  { name: "Oct", sale: 73_078 },
  { name: "Nov", sale: 34_000 },
  { name: "Dec", sale: 97_000 },
];

const newMembers = [
  {
    id: 1,
    username: "Mohammad Amin",
    title: "Web Developer",
    img: "/images/profile.jpg",
  },
  {
    id: 2,
    username: "Ali Moradi",
    title: "Js Developer",
    img: "/images/profile.jpg",
  },
  {
    id: 3,
    username: "Sara Mohammadi",
    title: "Front End",
    img: "/images/profile.jpg",
  },
  {
    id: 4,
    username: "Reza khani",
    title: "devOps",
    img: "/images/profile.jpg",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Reza khani",
    date: "12 Jun 2022",
    amount: 123,
    status: "Declined",
    img: "/images/profile.jpg",
  },
  {
    id: 2,
    customer: "Ali karimi",
    date: "10 Sep 2023",
    amount: 345,
    status: "Approved",
    img: "/images/profile.jpg",
  },
  {
    id: 3,
    customer: "sara moradi",
    date: "18 Apr 2022",
    amount: 154,
    status: "Pending",
    img: "/images/profile.jpg",
  },
  {
    id: 4,
    customer: "Amin rezai",
    date: "1 Feb 2021",
    amount: 213,
    status: "Declined",
    img: "/images/profile.jpg",
  },
];

let userRow = [
  {
    id: 1,
    username: "Ali khani",
    avatar: "/images/profile.jpg",
    status: "active",
    transaction: "$192.34",
    email: "test23@gmail.com",
  },
  {
    id: 2,
    username: "Amin saedi",
    avatar: "/images/profile.jpg",
    status: "inactive",
    transaction: "$124.14",
    email: "test23@gmail.com",
  },
  {
    id: 3,
    username: "sasan moqads",
    avatar: "/images/profile.jpg",
    status: "active",
    transaction: "$435.4",
    email: "test23@gmail.com",
  },
  {
    id: 4,
    username: "sara rezai",
    avatar: "/images/profile.jpg",
    status: "inactive",
    transaction: "$5",
    email: "test23@gmail.com",
  },
  {
    id: 5,
    username: "reza piri",
    avatar: "/images/profile.jpg",
    status: "active",
    transaction: "$468",
    email: "test23@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: "/images/Asus.jpg",
    price: "$468",
  },
  {
    id: 2,
    title: "Lenevo",
    avatar: "/images/lenevo.jpg",
    price: "$340",
  },
  {
    id: 3,
    title: "HP",
    avatar: "/images/hp.jpg",
    price: "$500",
  },
  {
    id: 4,
    title: "Acer",
    avatar: "/images/acer.jpg",
    price: "$236",
  },
  {
    id: 5,
    title: "Dell",
    avatar: "/images/acer.jpg",
    price: "$560",
  },
];

let productsData = [
  {
    name: "Jun",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 5000,
  },
];

export { xAxisData, newMembers, transactions, userRow, products, productsData };
