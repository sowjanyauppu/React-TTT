import logo from './logo.svg';
import './App.css';
import Blog from "./Blog";
import './post.css';
import Header from "./Header";
import Footer from "./Footer";


function App() {
  const details = [
    { title: "twitter", content: "Social Networking app" },
    { title: "facebook", content: "chatting app" },
    { title: "instagram", content: "Social Networking app" },
    { title: "abcd", content: "chatting app" },
  ];
  return (
    <div className="App">
      <Header heading={"My Blog"}/>
      <Blog posts={details}></Blog>
      <Footer year={"2023"} author={"sowjanya"}/>
    </div>
  );
}

export default App;

