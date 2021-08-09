import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATE = [
  { id: "p1", author: "giorgi gogoladze", text: "react is great" },
  { id: "p2", author: "max", text: "learning react is great" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATE} />;
};
export default AllQuotes;
